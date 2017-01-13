//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tip:"",
    username: '',
    phone: ""
  },
  formBindsubmit:function(e){
    if(e.detail.value.username.length==0||e.detail.value.phone.length==0){
        this.setData({
          tip:'提示：用户名和手机号不能为空！',
          username:'',
          phone:''
        });
    }else if(e.detail.value.username.length>6||e.detail.value.phone.length>11){
        this.setData({
          tip:'提示：用户名和手机号超过指定长度！',
          username:'',
          phone:''
        });
    }else{
        this.setData({
          tip:'',
          username:e.detail.value.username,
          phone:e.detail.value.phone
        });
        console.log(this.data);
        wx.request({
          url: 'https://192.168.1.254/wxapp/rest/singUp',
          data:e.detail.value,
          method:"POST",
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res.data);
            if((res.data.success))
            {
              wx.showModal({
                title: '提示',
                content: '提交成功!',
                success: function(res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }
                }
              })
            }else{
              wx.showModal({
                title: '提示',
                content: '提交失败!',
                success: function(res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }
                }
              })
            }
          },
          fail: function(res) {
            console.log(res.data)
          },
          complete: function(res) {
            console.log(res.data)
          }
        });
    }
  },
  formReset:function(){
    this.setData({
      tip:'',
      username:'',
      phone:''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
