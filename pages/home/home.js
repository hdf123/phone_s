// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statea:false,
    indicatorDots: true,
    indicatorDotsa: false,
    duration: 500,//幻灯片切换时长
    durationa: 500,//幻灯片切换时长
    autoplay: false,//自动播放
    autoplaya: false,//自动播放
    currenta: 0,//显示轮播位置
    imgUrls: [//轮播
      '../../image/home_banner.png',
      '../../image/home_banner.png',
      '../../image/home_banner.png',
      '../../image/home_banner.png'
    ],
    imgUrlsa: [//轮播
      '../../image/home_banner.png',
      '../../image/home_banner.png',
      '../../image/home_banner.png',
      '../../image/home_banner.png'
    ],
    scrollTop:0,
    scrollHeight: "100%"
  },
  DownLoad1: function () {
    console.log('到底了---');
    var _this = this;
    if (_this.data.trua) {
      _this.popMaskTest();
      _this.setData({ trua: false });
      setTimeout(function () {
        _this.setData({
          numa: _this.data.numa + 20,
          trua: true,
        });
      }, 2000);
    }
  },
  scroll: function (event) {
    console.log(3);
  },
  refresh: function (event) {
    console.log("到顶了---");
  },
  swiperChangea: function (e) {
    var that = this;
    console.log(e);
    if (e.detail.source == 'touch') {
      that.setData({
        currenta: e.detail.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(111)
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