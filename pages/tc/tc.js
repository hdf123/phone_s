// pages/tc/tc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    muna: 15,
    munb: 5,
    munc: 30,
    heis:'',
    sta:false
  },
  taba:function(e){
    console.log(e.target.dataset.index);
  },
  tabb:function(e){
    console.log(e.target.dataset.index);
  },
  // 监听页面滚动的距离
  onPageScroll: function (e) {
    var _this = this;
    console.log(e.scrollTop)
    console.log(_this.data.heis)
    var heik = _this.data.heis;
    if (e.scrollTop >= heik) {
      console.log("定位到顶部");
      _this.setData({
        sta:true
      })
    }else{
      _this.setData({
        sta:false
      })
    }
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
    var _this = this, heis = '';
    wx.createSelectorQuery().select('.headers').boundingClientRect(function (rect) {
      heis = rect.height;
      console.log("顶部高度----" + heis);
    }).exec()
    wx.createSelectorQuery().select('.heas').boundingClientRect(function (rect) {
      console.log("距离顶部高度----" + rect.top);
      _this.setData({
        heis: rect.top - heis
      })
    }).exec()
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