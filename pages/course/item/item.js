Page({
  data: {
    id: ''
  },
  upper: function(e) {
    console.log(e)
  },
  onLoad: function(options) {
    this.setData({
      id: options.id
    });
  }
})