import {request} from 'network/request.js'

export function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}