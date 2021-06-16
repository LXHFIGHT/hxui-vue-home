/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 */

const OSS = require('ali-oss')
const ossConfig = require('./config')
const client = new OSS(ossConfig)

module.exports = {
  put: (currentPath, dest) => {
    // 填写Object完整路径和本地文件的完整路径。Object完整路径中不能包含Bucket名称。
    // 如果未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    return client.put(dest, currentPath)    
  }
}
