/**
 * 简单路由封装
 * 使用
 * import {PagesList,Router} from './route/router'; //路由封装
 * Router.navigateTo(PagesList.index)
 */

const PagesList = {
  'index':'/pages/index/index',
  'logs':'/pages/logs/logs',
}

const Router = {
  /**
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
   * @param {*} url 
   * @param {*} params 
   * @description 处理目标页面的参数，转成json字符串传递给param字段，在目标页面通过JSON.parse(options.param)接收
   * 使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
   */
  navigateTo(url,params={}){
    if(params){
      url += `?params=${JSON.stringify(params)}`;
    }
    wx.navigateTo({
      url: url,
      fail: (err) => {console.log('navigateTo跳转出错',err)},
    })
  },

  /**
   * 关闭当前页面，返回上一页面或多级页面
   * @param {*} url 
   * @param {Object} param 传递给目标页面的参数，只有页面栈无目标页面调用navigateTo时，参数才会生效，单单返回不能设置参数
   * @description 先取出页面栈，页面栈最多十层，判断目标页面是否在页面栈中，如果在，则通过目标页的位置，返回到目标页面，否则调用navigateTo方法跳转到目标页
  */  

  navigateBack(url,params={}){
    const pageList = getCurrentPages();
    let index = pageList.findIndex(e=>{
      return url.indexOf(e.route)
    });
    if(index == -1){// 没有在页面栈中，可以调用navigateTo方法
      this.navigateTo(url,params);
    }else{
      wx.navigateBack({
        delta:pageList.length-1-index,
        fail:(err)=>{console.log('navigateBack返回出错',err)}
      });
    }
  },

  /**
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
   * @param {*} url 
   * @param {*} params 
   */
  redirectTo(url,params={}){
    if(params){
      url += `?params=${JSON.stringify(params)}`;
    }
    wx.redirectTo({
      url: 'url',
      fail: (err) => {console.log('redirectTo跳转出错',err)},
    })
  },


  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param {*} url 
   */
  switchTab(url){
    wx.switchTab({
      url: 'url',
    });
  },

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param {*} url 
   * @param {*} params 
   */
  reLaunch(url,params={}){
    if(params){
      url += `?params=${JSON.stringify(params)}`;
    }
    wx.reLaunch({
      url:url,
      fail: (err) => {console.log('reLaunch跳转出错',err) },
    })
  },

}

module.exports = {
  PagesList,
  Router,
}