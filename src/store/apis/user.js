/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 * Created on 2018/8/2.
 * Email: lxhfight1@gmail.com
 * Description:
 *  封装模块请求接口数据的方法, 以下是demo
 */

import axios from './../../tools/axios'

const RESOURCE = 'users'

export default {
  list (searchInfo) {
    return axios.doGet(`${RESOURCE}`, searchInfo)
  },
  detail (id) {
    return axios.doGet(`${RESOURCE}/${id}`)
  },
  create (bundle) {
    return axios.doPost(`${RESOURCE}`, bundle)
  },
  update (bundle) {
    const { id } = bundle
    return axios.doPut(`${RESOURCE}/${id}`, bundle)
  },
  del (id) {
    return axios.doDelete(`${RESOURCE}/${id}`)
  }
}
