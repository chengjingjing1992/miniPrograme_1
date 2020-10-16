// pages/demo8/demo8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iv:"",
    encryptedData:"",
    userInfo:{}
  },
  getphonenumber(e){
    console.log(e.detail)
    console.log(e.detail.iv);
    var iv=e.detail.iv;
    var encryptedData=e.detail.encryptedData;
    this.setData({
      iv,encryptedData
    });
  },
  getuserinfo(e){
    console.log(e.detail.userInfo);
    var userInfo=e.detail.userInfo;
    this.setData({
      userInfo
    });
  }
})