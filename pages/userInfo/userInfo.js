// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"",
    systemInfo: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      wx.login({
          success: function (res) {
              wx: wx.getUserInfo({
                  withCredentials: true,
                  lang: 'EN',
                  success: function (res) {
                      //console.log()
                      that.setData({
                          userInfo: res.userInfo
                      })
                  },
                  fail: function (res) { },
                  complete: function (res) { },
              })
          },
          fail: function (res) { },
          complete: function (res) { },
      })
      wx.getSystemInfo({
          success: function(res) {
              console.log(res)
              that.setData({
                  systemInfo: res
                  
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
  onShareAppMessage: function () {
  
  }
})