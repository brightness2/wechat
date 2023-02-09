// logs.js
const util = require('../../utils/util.js')
const app = getApp()
//路由拦截使用 app.filterPage
app.filterPage({
  data: {
    logs: []
  },
  onLoad() {
    console.log('loading');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onShow(){
    console.log('show...');
  }
},[ app.routeFilters.checkPermission])
