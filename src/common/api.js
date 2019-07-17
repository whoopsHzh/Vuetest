import axios from 'axios'

const ERR_OK = 0
export const api = 'http://www.liulongbin.top:3005/api/'
// 返回在请求同一个get地址时，可以返回一个函数。
export function getData(url) {
  // 返回一个函数
  return function (params) {
    return axios.get(url, {
      params
    }).then(res => {
      const {
        errno,
        data
      } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {

    })
  }
}
