// pages/index/index.js
Page({
  data:{
    items: [
      {
        id:"1",
        field1:"field1",
        field2:"field2",
        field3:"field3",
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      },
      {
        id:"2",
        field1:"field1",
        field2:"field2",
        field3:"field3",
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ]
  },
  onLoad:function(options){
    var that = this; 
    wx.request({
      url: 'https://192.168.1.254/wxapp/rest/micclass',
      data:options.id,
      method:"POST",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        if(res.data.success){
          that.setData({items:res.data.data});
        };
      },
      fail: function(res) {
        console.log(res.data);
      },
      complete: function(res) {
        console.log(res.data);
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})