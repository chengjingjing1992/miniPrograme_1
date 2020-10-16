// pages/demo7/demo7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"",
    list:[
      {id:0,name:"香蕉",value:"香蕉"},
      {id:1,name:"苹果",value:"苹果"},
      {id:2,name:"橘子",value:"橘子"}
    ],
    checklist:""
  },

  mychange(e){
    console.log(e.detail.value);
    var msg=e.detail.value;
    this.setData({
      msg
    });
  },
  mychange2(e){
    console.log(e.detail.value);
    var checklist=e.detail.value;
    this.setData({
      checklist
    });
  }
})