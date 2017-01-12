Page({
  data:{
    items:[]
  },
  onLoad:function()
  {
        var that=this;
        wx.request({
          url: 'https://192.168.1.254/wxapp/rest/schedules',
          method:"POST",
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res.data);
            that.setData({items:res.data.data});
          },
          fail: function(res) {
            console.log(res.data)
          },
          complete: function(res) {
            console.log(res.data)
          }
        });
  }
})