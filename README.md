# gulp.css-build
Gulpfile.js that works on css files

[![GitHub version](https://badge.fury.io/gh/zgabievi%2Fgulp.css-build.svg)](http://badge.fury.io/gh/zgabievi%2Fgulp.css-build)
[![Build Status](https://semaphoreci.com/api/v1/projects/0f614987-2cbb-4c62-af30-ef6bf0b3978b/444278/shields_badge.svg)](https://semaphoreci.com/zgabievi/gulp-css-build)
[![Codacy Badge](https://www.codacy.com/project/badge/c68621e422a047ffb78f63691290b09b)](https://www.codacy.com/app/zgabievi/gulp-css-build)
[![Dependency Status](https://david-dm.org/zgabievi/gulp.css-build.svg)](https://david-dm.org/zgabievi/gulp.css-build)
[![devDependency Status](https://david-dm.org/zgabievi/gulp.css-build/dev-status.svg)](https://david-dm.org/zgabievi/gulp.css-build#info=devDependencies)

## Dependencies
- ["gulp": "^3.8.11"](https://npmjs.org/package/gulp/)
- ["del": "^1.2.0"](https://www.npmjs.com/package/del/)
- ["gulp-if": "^1.2.5"](https://www.npmjs.com/package/gulp-if/)
- ["gulp-load-plugins": "^0.10.0"](https://www.npmjs.com/package/gulp-load-plugins/)
- ["gulp-plumber": "^1.0.1"](https://www.npmjs.com/package/gulp-plumber/)
- ["gulp-rename": "^1.2.2"](https://www.npmjs.com/package/gulp-rename/)
- ["gulp-size": "^1.2.1"](https://www.npmjs.com/package/gulp-size/)
- ["gulp-sourcemaps": "^1.5.2"](https://www.npmjs.com/package/gulp-sourcemaps/)
- ["gulp-minify-css": "^1.1.3"](https://www.npmjs.com/package/gulp-minify-css/)
- ["gulp-autoprefixer": "^2.3.0"](https://www.npmjs.com/package/gulp-autoprefixer/)
- ["gulp-sass": "^2.0.1"](https://www.npmjs.com/package/gulp-sass/)

## Configuration
```json
{
	"environment": "development",
	"extension": "scss"
}
```

You can change environment to **production** or extension to **scss**/**sass** in `config.json` or from command line: `set ENV=production` or `set ENV=sass`

## Useage
Download repository and in your command line run `npm install`, this will download `node_modules` and you are about to go.
Install `bower_components` as in example: `bower install neat`, then open `Gulpfile.js` and add line in `css:copy` task.

- `gulp css:clean` - cleans `./dist/assets/css` directory
- `gulp css:copy` - copies files from `./bower_components`, but that task need to be updated for every component
- `gulp css:build` - works on `scss/sass` files from `./src/assets/sass` and creates `css` files in `./dist/assets/css`
- `gulp css:watch` - watches `scss/sass` files in `./src/assets/sass` for chages
- `gulp css` - default task that cleans, copies, builds and watches `scss/sass` files

---

- `npm test` - sets environment to development and runs default task of gulp
- `npm start` - sets environment to production and runs default task of gulp
