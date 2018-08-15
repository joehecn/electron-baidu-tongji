
/**
 * 百度统计 - electron
 */

const request = require('superagent')

/**
 * Expose baiduTongji
 */

module.exports = baiduTongji

/**
 * 
 * @param {String} siteId 必要参数 百度帐号的站点id	
 * @param {Object} router 可选参数 vue-router的实例
 */

function baiduTongji (siteId, router) {
  // siteId 必须有
  if (!siteId && typeof siteId !== 'string') {
    throw new TypeError('siteId must be a string')
  }

  window._hmt = window._hmt || []

  // electron 生产模式下是直接请求文件系统，没有 http 地址
  // 前台拿不到 hm.js 的内容
  // 所以通过 node 模块 superagent 请求
  request
    .get(`https://hm.baidu.com/hm.js?${siteId}`)
    .set('Referer', 'https://hm.baidu.com/')
    .buffer(true)
    .then(res => {
      /* istanbul ignore else */
      if (res.text && res.text.indexOf('function') > -1) {
        let hm = document.createElement("script")
        hm.text = res.text

        let head = document.getElementsByTagName('head')[0]
        head.appendChild(hm)
      }
    })
  
  // Vue单页应用时，监听router的每次变化
  // 把虚拟的url地址赋给百度统计的API接口

  /* istanbul ignore else */
  if (router && router.beforeEach) {
    router.beforeEach((to, from, next) => {
      /* istanbul ignore else */
      if (to.path) {
        window._hmt.push(['_trackPageview', '/#' + to.fullPath])
      }

      next()
    })
  }
}
