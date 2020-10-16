// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:null,
    numm:0
  },
  change(e){
    console.log(e);
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    });
  },
  suanshu(e){
   console.log(e);
   const opp=e.currentTarget.dataset.opp;
   this.setData({
    numm:this.data.numm += opp
  });
  }
})