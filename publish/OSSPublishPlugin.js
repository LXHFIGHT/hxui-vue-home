/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const ossUtil = require('./ossUtil')

const queue = []
let isUploading = false

class OSSPublishPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    compiler.hooks.done.tap('done', complication => {
      setTimeout(() => {
        console.log(`${chalk.green('\n\nBuild Complete\n\n')}`)
        this.createUploadTasks()
        this.publish()
      })
    })
  }
  createUploadTasks () {
    async function createTask (path, target = '/') {
      const dir = await fs.promises.opendir(path)
      for await (const dirent of dir) {
        if (dirent.isFile()) {
          const item = { localPath: `${path}/${dirent.name}`, targetPath: `${target}${dirent.name}` }
          queue.push(item)
        } else if (dirent.isDirectory()) {
          createTask((path + '/' + dirent.name), target + dirent.name + '/')
        }
      }
    }
    const dir = path.resolve('dist/')
    createTask(dir, '/')
  }
  // 发布到阿里云OSS
  publish () {
    let sum = 0
    let successCount = 0
    let failCount = 0
    let timer = setInterval(() => {
      if (isUploading) {
        return  
      }
      if (queue.length) {
        isUploading = true
        const item = queue.pop()
        ossUtil.put(item.localPath, item.targetPath).then(result => {
          isUploading = false
          successCount++
          console.log(`${chalk.green(`文件成功上传`)} | OSS目标路径：${chalk.green(item.targetPath)}`)
        }).catch(err => {
          isUploading = false
          failCount++
          console.log(`Error: ${chalk.red(err)}`)
        })
      } else {
        if (sum > 5) {
          clearInterval(timer)
          console.log(`
=======================================================
          
          已完成本次同步，成功${chalk.green(successCount)}个，失败${chalk.red(failCount)}个
          
=======================================================`)
        } else {
          sum++
          console.log('正在确认同步结果......')
        }
      }
    }, 100)
  }
}

module.exports = OSSPublishPlugin
