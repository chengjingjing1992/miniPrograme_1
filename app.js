//app.js
App({
  //1 应用第一次启动就会触发的事件
  onLaunch: function () {
    console.log(' 我是 onLaunch 应用第一次启动就会触发的事件');
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //2 被看到就会触发
  onShow(){
    console.log('我是 onShow 我被看到就会触发 用途：数据或页面效果进行重置');
  },
  onHide(){
    //3 暂停或者清楚定时器
    console.log('我是hide 应用被隐藏时候触发');
  },
  //4 当代码发生报错时候 触发 
  //用途 收集错误信息 通过异步请求 发送给后台
  onError(err){
    console.log('代码报错时候触发');
    console.log(err);
  }

  
})