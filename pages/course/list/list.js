var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onLoad:function()
  {
        wx.request({
          url: 'https://192.168.1.254/wxapp/rest/schedules',
          method:"POST",
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res.data)
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