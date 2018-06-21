import jsonp from '../common/js/jsonp'
import { commonParams , options } from './config'

export function getRecommend(){
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({},commonParams,{
    platform: 'h5',
    uin: 1026145889,
    needNewCode: 1
  })
  return jsonp(url,data,options)
}
