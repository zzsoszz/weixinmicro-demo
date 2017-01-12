Page({
  data: {
  },
  upper: function(e) {
    console.log(e)
  },
  onLoad: function(options) {
    var that = this; 
    wx.request({
      url: 'https://192.168.1.254/wxapp/rest/micclass/detail',
      data:options.id,
      method:"POST",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data);
        //this.setData(res.data);
        if(res.data.success){
          that.setData(res.data.data);
        };
      },
      fail: function(res) {
        console.log(res.data);
      },
      complete: function(res) {
        console.log(res.data);
      }
    });
    
    
  }
})