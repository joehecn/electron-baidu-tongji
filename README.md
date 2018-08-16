# electron-baidu-tongji

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Maintainability][codeclimate-image]][codeclimate-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Electron middleware: [百度统计](https://tongji.baidu.com/)

## Preconditions
  [百度统计的网站统计账号](https://tongji.baidu.com/web/homepage/index)

  See more [details information](https://joehecn.github.io/electron-baidu-tongji/)

## Installation

``` bash
# yarn
$ yarn add electron-baidu-tongji

# or npm
$ npm install electron-baidu-tongji -S

```

## API

### baiduTongji(siteId)

normal
- siteId: 必要参数 百度帐号的站点id

``` javascript
// renderer/index.js

const baiduTongji = require('electron-baidu-tongji')

baiduTongji('e0a564dfc08b6db584e25108f6xxxxxx')

```

### baiduTongji(siteId, router)

vue-router
- siteId: 必要参数 百度帐号的站点id
- router: 可选参数 vue-router的实例

``` javascript
// renderer/index.js

import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router/router-config.js'
import baiduTongji from 'electron-baidu-tongji'

Vue.use(Router)

const router = new Router(routerConfig)

// 百度统计
baiduTongji('e0a564dfc08b6db584e25108f6xxxxxx', router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

## License

  [MIT](https://github.com/joehecn/electron-baidu-tongji/blob/master/LICENSE)

## Thanks
  为了更好的维护开源项目，谢谢你的支持！
![A cup of coffee](https://raw.githubusercontent.com/joehecn/j/master/a_cup_of_coffee.JPG)

[npm-image]: https://img.shields.io/npm/v/electron-baidu-tongji.svg?style=flat-square
[npm-url]: https://npmjs.org/package/electron-baidu-tongji
[travis-image]: https://travis-ci.org/joehecn/electron-baidu-tongji.svg?branch=master
[travis-url]: https://travis-ci.org/joehecn/electron-baidu-tongji
[coveralls-image]: https://coveralls.io/repos/github/joehecn/electron-baidu-tongji/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/joehecn/electron-baidu-tongji?branch=master
[codeclimate-image]: https://api.codeclimate.com/v1/badges/883cb85664346421241c/maintainability
[codeclimate-url]: https://codeclimate.com/github/joehecn/electron-baidu-tongji/maintainability
[david-image]: http://img.shields.io/david/joehecn/electron-baidu-tongji.svg?style=flat-square
[david-url]: https://david-dm.org/joehecn/electron-baidu-tongji
[license-image]: http://img.shields.io/npm/l/electron-baidu-tongji.svg?style=flat-square
[license-url]: https://github.com/joehecn/electron-baidu-tongji/blob/master/LICENSE
[downloads-image]: http://img.shields.io/npm/dm/electron-baidu-tongji.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/electron-baidu-tongji