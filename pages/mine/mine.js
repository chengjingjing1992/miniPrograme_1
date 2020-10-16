// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name":"zhangsan",
    "age":18,
    "married":true,
    wife:{
      "name":"丽丽",
      "age":10
    },
    isChecked:true,
    list:["老虎","狮子","熊猫"],
    animals:[
      {"name":"老虎",legs:4,sex:0},
      {"name":"鹦鹉",legs:2,sex:1},
      {"name":"眼镜蛇",legs:0,sex:2}
    ],
    "person":{
      "name":"小明",
      "age":15,
      "sex":"男"
    }
  }
})