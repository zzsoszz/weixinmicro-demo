var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    content: 'red'
  },
  upper: function(e) {
    console.log(e)
  },
  onLoad: function(options) {
    this.setData({
      content: options.title
    })
  }
})