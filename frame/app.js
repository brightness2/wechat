// app.js
import {routeFilters,filterPage} from './route/filter';//路由拦截
import {PagesList,Router} from './route/router'; //路由封装
import {Http} from './api/http';//request封装
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  routeFilters,
  filterPage,
  PagesList,
  Router,
  Http,
  globalData: {
    userInfo: null
  }
})


