// pages/demo9/demo9.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabss:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"其他",
        isActive:false 
      }
    ],
    titleName:'张1三',
    personsinfo:[
      {
        name:'小明',
        age:18
      },
      {
        name:'小李',
        age:22
      }
    ]
  },
  handleClickone(e){
    
    var index=e.detail;
      console.log(index);
      var tabss=this.data.tabss;
      
      tabss.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      
      this.setData({
        tabss
      });

  }
})