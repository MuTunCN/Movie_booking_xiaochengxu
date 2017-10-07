//index.js
//获取应用实例
const app = getApp()
Page({
   
  data: {
      QRcode_img:"../../images/tabbar/scanning.png",
     ak:"efoSRD4IGe8osvGupCVq7SoIhc6Bog0b",
     navbar: ["上映","预售"],
     currentTab: 0,
     movie_list:""
  },
  onShareAppMessage: function(res) {
      if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
      }
      return {
          title: '最新上映的电影',
          path: '/page/user?id=1234',
          success: function (res) {
              // 转发成功
              wx:wx.showToast({
                  title: '转发成功',
                  icon: 'success',
                  image: '',
                  duration: 1000,
                  mask: true,
                  success: function(res) {},
                  fail: function(res) {},
                  complete: function(res) {},
              })
          },
          fail: function (res) {
              // 转发失败
              wx:wx.showToast({
                  title: '转发取消',
                  icon:"success",
                  duration: 1000
              })
          }
      }
  },
  navbarTap: function(e) {
    this.setData({
        currentTab: e.currentTarget.dataset.idx  
    })
  },
  onLoad: function(){
      var that = this;
      wx.request({
          url: 'https://m.maoyan.com/movie/list.json', 
          data: {
              type: 'hot',
              offset: '0',
              limit: "1000"
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          success: function (res) {
              that.setData({movie_list:res.data.data.movies});
              //console.log(res.data.data.movies)
          }
      })
  },
  QRcode:function() {
      wx.scanCode({
          success: (res) => {
              console.log(res)
          }
      })
  }
})
