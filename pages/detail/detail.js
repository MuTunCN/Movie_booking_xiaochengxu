// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_info:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
        wx:wx.request({
            url: "https://m.maoyan.com/movie/"+options.id+".json",
            success: function(res) {
                //console.log(res.data.data.MovieDetailModel)
                that.setData({
                    movie_info: res.data.data.MovieDetailModel
                })
            },
            fail: function(res) {},
            complete: function(res) {},
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
      var movie = this.data.movie_info
      //console.log()
      return {
          title: '我推荐电影 '+movie.nm+"，"+movie.wish+"人想看" ,
          path: '/page/user?id=1234',
          success: function (res) {
              // 转发成功
              wx: wx.showToast({
                  title: '转发成功',
                  icon: 'success',
                  image: '',
                  duration: 1000,
                  mask: true,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
              })
          },
          fail: function (res) {
              // 转发失败
              wx: wx.showToast({
                  title: '转发取消',
                  icon: "success",
                  duration: 1000
              })
          }
      }
  }
})