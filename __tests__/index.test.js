
jest.mock('superagent')
let superagent = require('superagent')
superagent.get = function () { return this }
superagent.set = function () { return this }
superagent.buffer = function () {
  return Promise.resolve({
    text: '(function () { window._hmt.push([]) })()/*(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+*/'
  })
}
superagent.then = function (callback) {
  callback()
}

const { ebtMain, ebtRenderer } = require('../index.js')

const res = {}

const ipcMain = {
  on (_, callback) {
    const event = {
      sender: {
        send (key, value) {
          res.mainSend = { key, value }
        }
      }
    }
    const arg = 'siteId'
    callback(event, arg)
  }
}

const ipcRenderer = {
  on (_, callback) {
    const arg = '(function () { window._hmt.push([]) })()/*(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+*/'
    callback(_, arg)
  },
  send () {}
}

const router = {
  beforeEach (callback) {
    callback( { path: '/', fullPath: '/' }, null, () => {} )
  }
}

describe('index.js', () => {
  describe('ebtMain', () => {
    test('ebtMain()', () => {
      expect.assertions(1)
      expect(ebtMain).toThrow('require ipcMain')
    })
  
    test('ebtMain({})', () => {
      expect.assertions(1)
      expect(() => ebtMain({})).toThrow('require ipcMain')
    })
  
    test('ebtMain(ipcMain)', done => {
      expect.assertions(1)
  
      ebtMain(ipcMain)
      setTimeout(() => {
        expect(res.mainSend.key).toBe('electron-baidu-tongji-reply')
        done()
      })
    })

    test('ebtMain(ipcMain) production', done => {
      expect.assertions(1)
      process.env.NODE_ENV = 'production'
      ebtMain(ipcMain)
      setTimeout(() => {
        expect(res.mainSend.key).toBe('electron-baidu-tongji-reply')
        done()
      })
    })
  })

  describe('ebtRenderer', () => {
    test('ebtRenderer()', () => {
      expect.assertions(1)
      expect(ebtRenderer).toThrow('require ipcRenderer')
    })

    test('ebtRenderer({})', () => {
      expect.assertions(1)
      expect(() => ebtRenderer({})).toThrow('require ipcRenderer')
    })

    test('ebtRenderer({ on })', () => {
      expect.assertions(1)
      expect(() => ebtRenderer({ on: {} })).toThrow('require ipcRenderer')
    })

    test('ebtRenderer({ on, send })', () => {
      expect.assertions(1)
      expect(() => ebtRenderer({ on: {}, send: {} })).toThrow('require siteId')
    })

    test('ebtRenderer({ on, send }, {})', () => {
      expect.assertions(1)
      expect(() => ebtRenderer({ on: {}, send: {} }, {})).toThrow('require siteId')
    })

    test('ebtRenderer(ipcRenderer, siteid)', done => {
      expect.assertions(1)
      ebtRenderer(ipcRenderer, 'siteid', router)
      setTimeout(() => {
        expect(window._hmt.length).toBe(2)
        done()
      })
    })
  })
})
