/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 */
const fs = require('fs')
const path = require('path')
const readline = require('readline')
const chalk = require('chalk')
const OSS = require('ali-oss')
const config = require('./config')
const client = new OSS(config.oss)

class OSSPublishPlugin {
  queue = []
  totalTaskAmount = 0 // 整体上传任务数
  isUploading = 0
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    compiler.hooks.done.tap('done', complication => {
      setTimeout(() => {
        console.log(`${chalk.green('\n\nBuild Complete\n\n')}`)
        if (config.autoPublish) {
          this.createUploadTasks()
        } else {
          this.doAuthorizePublish().then(res => {
            console.log('\n已授权发布 ✅\n')
            this.createUploadTasks()
          }).catch(() => {
            console.log('\n发布未授权，已取消 🚫\n')
            process.exit()
          })
        }
      })
    })
  }
  // 授权发布操作
  doAuthorizePublish () {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
      rl.question(`是否确认发布代码（输入 ${chalk.green(config.answer.join('/'))} 发布）`, answer => {
        if (config.answer.includes(answer)) {
          resolve(answer)
          return
        }
        reject(new Error('not authorized'))
      })
    })
  }
  createUploadTasks () {
    const ctx = this
    async function createTask (path, target = '/') {
      const dir = await fs.promises.opendir(path)
      for await (const dirent of dir) {
        if (dirent.isFile()) {
          const item = { localPath: `${path}/${dirent.name}`, targetPath: `${target}${dirent.name}` }
          ctx.queue.push(item)
          ctx.totalTaskAmount++
        } else if (dirent.isDirectory()) {
          createTask((path + '/' + dirent.name), target + dirent.name + '/')
        }
      }
    }
    const dir = path.resolve('dist/')
    createTask(dir, '/')
    this.publish()
  }
  // 发布到阿里云OSS
  publish () {
    let successCount = 0
    let failCount = 0
    const startTime = Date.now()
    let timer = setInterval(() => {
      if (this.isUploading >= config.thread) {
        return  
      }
      if (this.queue.length) {
        this.isUploading++
        const item = this.queue.pop()
        client.put(item.targetPath, item.localPath).then(result => {
          this.isUploading--
          successCount++
          console.log(`${chalk.green(`文件成功上传`)} | OSS目标路径：${chalk.green(item.targetPath)}`)
        }).catch(err => {
          this.isUploading--
          failCount++
          console.log(`Error: ${chalk.red(err)}`)
        })
      } else {
        if (successCount + failCount >= this.totalTaskAmount) {
          clearInterval(timer)
          console.log(`
=======================================================
          
          已完成本次同步，成功${chalk.green(successCount)}个，失败${chalk.red(failCount)}个
          共耗时 ${chalk.green(parseInt((Date.now() - startTime) / 1000))} 秒 :)
          
=======================================================\n`)
          !config.autoPublish && process.exit()
        }
      }
    }, config.duration)
  }
}

module.exports = OSSPublishPlugin
