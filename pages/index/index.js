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
