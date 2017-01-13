Page({
  data: {
  },
  upper: function(e) {
    console.log(e)
  },
  onLoad: function(options) {
    var  url=getApp().data.serverurl+'/wxapp/rest/micclass/detail';
    console.log("request",url);
    var that = this; 
    wx.request({
      url: url,
      data:options.id,
      method:"POST",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data);
        if(res.data.success){
          that.setData(res.data.data);
        };
      },
      fail: function(res) {
        console.log("fail",res);
      },
      complete: function(res) {
        console.log("complete",res);
      }
    });
    
    
  }
})