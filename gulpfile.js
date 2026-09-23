const {spawn} = require("child_process");
const browserSync = require("browser-sync").create();
const fancyLog = require("fancy-log");
const gulp = require("gulp");
const PluginError = require("plugin-error");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const presetEnv = require("postcss-preset-env");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf");

const hugoArgsDefault = ["-d", "../dist", "-s", "site"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

function css() {
  return gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      presetEnv()
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function fonts() {
  return gulp.src("./src/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream());
}

function js(done) {
  const config = Object.assign({}, webpackConfig, {
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
  });

  webpack(config, (error, stats) => {
    if (error) {
      done(new PluginError("webpack", error));
      return;
    }

    if (stats.hasErrors()) {
      done(new PluginError("webpack", stats.toString({colors: true})));
      return;
    }

    fancyLog("[webpack]", stats.toString({colors: true, modules: false}));
    browserSync.reload();
    done();
  });
}

function buildSite(done, options = [], environment = "development") {
  const args = hugoArgsDefault.concat(options);
  process.env.NODE_ENV = environment;

  import("hugo-bin")
    .then(({default: hugoBin}) => {
      spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
        if (code === 0) {
          browserSync.reload();
          done();
          return;
        }

        browserSync.notify("Hugo build failed :(");
        done(new Error("Hugo build failed"));
      });
    })
    .catch(done);
}

function hugoProduction(done) {
  buildSite(done, [], "production");
}

function hugoPreview(done) {
  buildSite(done, hugoArgsPreview);
}

function hugoPreviewProduction(done) {
  buildSite(done, hugoArgsPreview, "production");
}

function hugo(done) {
  buildSite(done);
}

function runServer(done) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  }, done);

  gulp.watch("./src/js/**/*.js", js);
  gulp.watch("./src/css/**/*.css", css);
  gulp.watch("./src/fonts/**/*", fonts);
  gulp.watch("./site/**/*", hugo);
}

const assets = gulp.parallel(css, js, fonts);

exports.hugo = hugo;
exports["hugo-preview"] = hugoPreview;
exports.css = css;
exports.js = js;
exports.fonts = fonts;
exports.build = gulp.series(assets, hugoProduction);
exports["build-preview"] = gulp.series(assets, hugoPreviewProduction);
exports.server = gulp.series(hugo, assets, runServer);
exports["server-preview"] = gulp.series(hugoPreview, assets, runServer);
