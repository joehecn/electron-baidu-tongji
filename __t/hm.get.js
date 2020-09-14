
const request = require('superagent')

const arg = 'f3b6b71c1bc16c915445fd90679f9934'

// const rource = '(h.c.b.su = h.c.b.u || document.location.href)'
// const target = '(h.c.b.su = h.c.b.u || "https://c.joehe.cn"+a[1])'
// const rource = 'h.c.b.u=f.protocol+"//"+document.location.host+'
// const target = 'console.log(c,h.c),h.c.b.u="https://c.joehe.cn"+'
const rource = '(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+'
const target = '(h.c.b.su="https://c.joehe.cn"+a[1]),h.c.b.u="https://c.joehe.cn"+'

request
  .get(`https://hm.baidu.com/hm.js?${arg}`)
  .set('Referer', 'https://hm.baidu.com/')
  .buffer(true)
  .then(res => {
    let text = res.text
    console.log(text.includes(rource))
    text = text.replace(rource, target)
    console.log(text.includes(target))
})
