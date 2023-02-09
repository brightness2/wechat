export const filterFuns = {
  //所有方法校验不通过必须抛出error
  /**
   * 校验登录
   */
  checkLogin(){
    console.log('检测登录');
    wx.showModal({
      title:'系统提示',
      content: '请登录',
      cancelText:'取消',
      confirmText:'登录',
      success(e){
        if(e.confirm){
          console.log('跳转登录页面');
          // wx.redirectTo({
          //   url: 'url',
          // });
        }else{
          wx.navigateBack();
        }
      },
      
    })
    throw new Error("no login")
  },
  /**
   * 校验权限
   */
  checkPermission(){
    console.log('检测权限');
    wx.showModal({
      title:'系统提示',
      content: 'no permission',
      showCancel:false,
      complete(){
        wx.navigateBack();
      }
    })
    throw new Error("no permission")
  }
}