// pages/index/index.js
Page({
  data:{
    array: [
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
    /*
    wx.redirectTo({
      url: '/pages/course/list/list',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    */
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