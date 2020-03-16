// pages/test/test.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidepic: null,
    widthScreen: null
  },

  taba: function (e) {
    var tabIndex = e.target.dataset.index;
    console.log(tabIndex);
    var mm = 80 * tabIndex;
    console.log(mm);
    var animation = wx.createAnimation({
      duration:3000,
      delay: 0,
      timingFunction: "linear",
    });
    animation.translate(mm, 0).step({ duration: 200 })
    this.setData({ moveData: animation.export() })
  },
  boxa:function(e){
    console.log(123);
    var animation = wx.createAnimation({}) //创建一个动画实例
    animation.opacity(0).step({ duration: 1000 })
    this.setData({ hidepic: animation.export() })

    app.show(this, 'slide_up1', 0)
  },
  boxb:function(){
    wx.createSelectorQuery().select('.boxb').boundingClientRect(function (rect) {
      console.log(rect);
      console.log(rect.top);

      wx.pageScrollTo({
        scrollTop:0
      })


    }).exec()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(app.globalData.ks);
    
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