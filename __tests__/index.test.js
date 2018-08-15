
jest.mock('superagent')
let superagent = require('superagent')
superagent.get = function () { return this }
superagent.set = function () { return this }
superagent.buffer = function () {
  return Promise.resolve({
    text: '(function () { window._hmt.push([]) })()'
  })
}
superagent.then = function (callback) {
  callback()
}

const baiduTongji = require('../index.js')

const router = {
  beforeEach (callback) {
    callback( { path: '/', fullPath: '/' }, null, () => {} )
  }
}

describe('index.js', () => {
  test('baiduTongji()', () => {
    expect.assertions(1)

    expect(baiduTongji).toThrow('siteId must be a string')
  })

  test('baiduTongji(siteId, router)', done => {
    expect.assertions(1)

    baiduTongji('e0a564dfc08b6db584e25108f652fcd1', router)

    setTimeout(() => {
      expect(window._hmt.length).toBe(2)
      done()
    })
  })
})
