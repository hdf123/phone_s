// pages/homea/homea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorDotsa: false,
    duration: 500,//幻灯片切换时长
    durationa: 500,//幻灯片切换时长
    autoplay: false,//自动播放
    autoplaya: false,//自动播放
    currentb: 0,//显示轮播位置
    currentTabc: 0,//轮播3
    currentTabd: 0,
    numa: 10,
    heis: 0,//定位距离的高度
    topk: false,
    trus: true,//加载状态
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
    consulting: [{
      title: "强房企年内拿地3514亿，海外融资同比翻倍10强房企年内拿地3514亿，海外融资同比翻倍",
      time: "2018年5月9日",
      img: "../../image/carda.png"
    }, {
      title: "强房企年内拿地3511亿，海外融资同比翻倍",
      time: "2018年5月9日",
      img: "../../image/carda.png"
    }, {
      title: "强房企年内拿地3512亿，海外融资同比翻倍",
      time: "2018年5月9日",
      img: "../../image/carda.png"
    }, {
      title: "强房企年内拿地3513亿，海外融资同比翻倍",
      time: "2018年5月9日",
      img: "../../image/carda.png"
    }],
    preferential: [
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城2号院洋房在售一号院高层优惠升级中",
      "正弘形城3号院洋房在售一号院高层优惠升级中",
      "正弘形城4号院洋房在售一号院高层优惠升级中",
      "正弘形城5号院洋房在售一号院高层优惠升级中",
      "正弘形城6号院洋房在售一号院高层优惠升级中",
      "正弘形城7号院洋房在售一号院高层优惠升级中",
      "正弘形城8号院洋房在售一号院高层优惠升级中",
      "正弘形城9号院洋房在售一号院高层优惠升级中",
      "正弘形城10号院洋房在售一号院高层优惠升级中",
      "正弘形城11号院洋房在售一号院高层优惠升级中",
    ]
  },
  // 监听页面滚动的距离
  onPageScroll: function (e) {
    var _this = this;
    console.log(e.scrollTop)
    if (e.scrollTop >= _this.data.heis) {
      _this.setData({
        topk: true
      })
    } else {
      _this.setData({
        topk: false
      })
    }
  },
  /**
   * 轮播2
   */
  swiperChangeb: function (e){
    var that = this;
    console.log(e);
    if (e.detail.source == 'touch') {
      that.setData({
        currentb: e.detail.current
      })
    }
  },
  /**
   * 轮播3
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTabc === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTabc: e.currentTarget.dataset.current
      })
    }
    console.log(e.currentTarget.dataset.current);
  },
  swiperChangec: function (e) {
    var that = this;
    that.setData({ currentTabc: e.detail.current });
  },
  /**
   * 轮播4
   */
  swichNavd: function (e) {
    var _this = this;
    this.setData({
      currentTabd: e.currentTarget.dataset.current
    })
    wx.pageScrollTo({
      scrollTop: _this.data.heis
    })
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
    }).exec()
    wx.createSelectorQuery().select('.swiper-tabd').boundingClientRect(function (rect) {
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
    var _this = this;
    if (_this.data.trus){
      _this.popMaskTest();
      _this.setData({ trus: false });
      setTimeout(function () {
        _this.setData({
          numa: _this.data.numa + 1,
          trus: true
        });
      }, 2000);
    }
  },
  popMaskTest: function () {
    wx.showToast({
      title: '加载中...',
      duration: 2000,
      mask: true    //是否有透明蒙层，默认为false 
      //如果有透明蒙层，弹窗的期间不能点击文档内容 
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})