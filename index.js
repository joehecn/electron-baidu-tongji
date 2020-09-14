
const request = require('superagent')

/**
 * first step
 * @param {*} ipcMain
 */
const ebtMain = ipcMain => {
  /* istanbul ignore else */
  if (!(ipcMain && ipcMain.on)) {
    throw new TypeError(`require ipcMain`)
  }

  // step 2
  ipcMain.on('electron-baidu-tongji-message', (event, arg) => {
    // electron 生产模式下是直接请求文件系统，没有 http 地址
    // 前台拿不到 hm.js 的内容
    // 所以通过 node 模块 superagent 请求
    request
      .get(`https://hm.baidu.com/hm.js?${arg}`)
      .set('Referer', 'https://hm.baidu.com/')
      .buffer(true)
      .then(res => {
        const rource = '(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+'
        /* istanbul ignore else */
        if (res.text && res.text.includes(rource)) {
          // step 3
          const isDevelopment = process.env.NODE_ENV !== 'production'
          if (isDevelopment) {
            event.sender.send('electron-baidu-tongji-reply', res.text)
            return
          }

          // 百度统计可能改规则了，不统计 file:// 开始的请求
          // 这里强制替换为 https
          const target = '(h.c.b.su=h.c.b.u||"https://"+c.dm[0]+a[1]),console.log(k,c,h.c,a),h.c.b.u="https://"+c.dm[0]+'
          const target2 = '"https://"+c.dm[0]+window.location.pathname+window.location.hash'
          const text = res.text.replace(rource, target).replace(/window.location.href/g, target2)
          event.sender.send('electron-baidu-tongji-reply', text)
        }
      })
  })
}

/**
 * second step
 * @param {*} ipcRenderer
 * @param {*} siteId
 * @param {*} router
 */
const ebtRenderer = (ipcRenderer, siteId, router) => {
  /* istanbul ignore else */
  if (!(ipcRenderer && ipcRenderer.on && ipcRenderer.send)) {
    throw new TypeError(`require ipcRenderer`)
  }

  /* istanbul ignore else */
  if (!(siteId && typeof siteId === 'string')) {
    throw new TypeError(`require siteId`)
  }

  // step 4
  ipcRenderer.on('electron-baidu-tongji-reply', (_, arg) => {
    window._hmt = window._hmt || []

    let hm = document.createElement('script')
    hm.text = arg

    let head = document.getElementsByTagName('head')[0]
    head.appendChild(hm)

    // Vue单页应用时，监听router的每次变化
    // 把虚拟的url地址赋给百度统计的API接口

    /* istanbul ignore else */
    if (router && router.beforeEach) {
      router.beforeEach((to, _, next) => {
        /* istanbul ignore else */
        if (to.path) {
          window._hmt.push(['_trackPageview', '/#' + to.fullPath])
        }

        next()
      })
    }
  })

  // step 1
  ipcRenderer.send('electron-baidu-tongji-message', siteId)
}

module.exports = { ebtMain, ebtRenderer }
