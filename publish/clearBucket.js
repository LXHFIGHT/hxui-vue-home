/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 */

let OSS = require('ali-oss')
let config = require('./config')
let client = new OSS(config.oss)

async function handleDel (name, options) {
  try {
    await client.delete(name)
  } catch (error) {
    error.failObjectName = name
    return error
  }
}

// 删除指定前缀的文件。
const deletePrefix = (prefix) => {
  return new Promise((resolve, reject) => {
    client.list({
      prefix: prefix
    }).then(list => {
      list.objects = list.objects || []
      return Promise.all(list.objects.map((v) => handleDel(v.name)))
    }).then(results => {
      resolve(results)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = () => {
  const queue = [deletePrefix('css/'), deletePrefix('img/'), deletePrefix('js/'), deletePrefix('precache-manifest.')]
  return Promise.all(queue)
}
