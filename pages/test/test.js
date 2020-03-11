// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    muna:5,
    munb:30,
    munc:20,
    sta:true,
    tops:false,
    heis:""
  },
/**
 * 滚动
 */
DownLoad1: function () {
  console.log('到底了-----------------------------------------');
  var _this = this;
  if (_this.data.trua) {
    _this.popMaskTest();
    _this.setData({ trua: false });
    setTimeout(function (){
      _this.setData({
        numa: _this.data.numa + 20,
        trua: true,
      });
    }, 2000);
  }
},
  scroll: function (event) {
    var _this=this;
    wx.createSelectorQuery().select('.swiper-tabd').boundingClientRect(function (rect) {
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
      var tops = rect.top;
      console.log(tops);
      if (tops<100){
        console.log("固定");
        _this.setData({
          over:true
        })
      }else{
        console.log("不固定");
        _this.setData({
          over:false
        })
      }
    }).exec()
  },
  refresh: function (event) {
    console.log("到顶了---");
  },
  onPageScroll: function (e) {
    console.log(e.scrollTop);
    var tops=e.scrollTop;
    var _this=this;
    if(tops>=_this.data.heis){
      _this.setData({
        tops:true
      })
    }else{
      _this.setData({
        tops:false
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
    var _this=this,heis='';
    wx.createSelectorQuery().select('.heads').boundingClientRect(function (rect) {
      heis = rect.height;
    }).exec()
    wx.createSelectorQuery().select('.boxk').boundingClientRect(function (rect) {
      _this.setData({
        heis:rect.top-heis
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