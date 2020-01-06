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
    currentb: 0,//显示轮播位置
    currentTabc: 0,
    currentTabd: 0,
    scrollTop: 0,
    numa:100,
    scrolla:false,
    over:true,//控制滚动显示
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
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",

      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",

      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",
      "正弘形城1号院洋房在售一号院高层优惠升级中",
    ]
  },
/**
 * 滚动
 */
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
/**
 * 轮播2
 */
  swiperChangeb: function (e) {
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
    var that = this;
    if (this.data.currentTabd === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTabd: e.currentTarget.dataset.current
      })
    }
    console.log(e.currentTarget.dataset.current);
  },
  swiperChanged: function (e) {
    var that = this;
    that.setData({ currentTabd: e.detail.current });
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
    this.animation = wx.createAnimation()
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