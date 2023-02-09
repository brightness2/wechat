/**
 * request 封装
 * 使用
 * import {Http} from './api/http';//request封装
 * Http.get('url')
 */
const baseURL = 'https://www.fastmock.site/mock/1e5c7738d5d7c2bf7843460528567611/test/';

const Http = {

  /**
   * get 请求
   * @param {string} url 
   * @param {object} params 
   * @param {function} params 
   * @param {object} options 
   */
  get(url,params=null,callback=null,options=null){
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    let baseOptions = {
      url: baseURL + url,
      data: params,
      dataType: 'json',
      method: 'GET',
      responseType: 'text',
    }
    let callbackOptions = {
      success: (result) => {
        callback&&callback(result);
      },
      fail: (err) => {
        console.log("http get request error:",err);
      },
      complete: (res) => {
        wx.hideLoading()
      },
    }
    if(options){
      baseOptions = Object.assign(baseOptions,options);
    }
    baseOptions = Object.assign(baseOptions,callbackOptions);

    wx.request(baseOptions);
  },

  /**
   * get 请求
   * @param {string} url 
   * @param {object} params 
   * @param {function} params 
   * @param {object} options 
   */
  post(url,params=null,callback=null,options=null){
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    let baseOptions = {
      url: baseURL + url,
      data: params,
      dataType: 'json',
      method: 'POST',
      responseType: 'text',
    }
    let callbackOptions = {
      success: (result) => {
        callback&&callback(result);
      },
      fail: (err) => {
        console.log("http post request error:",err);
      },
      complete: (res) => {
        wx.hideLoading()
      },
    }
    if(options){
      baseOptions = Object.assign(baseOptions,options);
    }
    baseOptions = Object.assign(baseOptions,callbackOptions);

    wx.request(baseOptions);
  }
}

module.exports = {
  Http
}