// pages/mapa/mapa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:34.7691233090938,
    longitude:113.7734055519104,
    markers:[{ 
      iconPath: "../../image/a2.png",
      id: 0, 
      latitude: 23.740578,
      longitude: 113.796982,
      width: 35, 
      height: 60, 
      callout: {
        content: "语言：珊珊是不是傻    \n    预计到达时间：10分钟    \n    车牌号：12345",
        color: "#ff0000",
        fontSize: "16", 
        borderRadius: "10",
        bgColor: "#ffffff",
        borderRadius:"50%",
        padding: "10",
        display:"ALWAYS"
      }
    }],          
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sy = wx.getSystemInfoSync(),mapWidth = sy.windowWidth*2,mapHeight = sy.windowHeight*2;
    this.setData({
      mapWidth:mapWidth,
      mapHeight:mapHeight
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