// pages/search/search.js
let util = require('../../utils/storage');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statea: false,
    stateb:false,
    name:"storage",
    list:[],
    time:100//缓存时间
  },
  search: function (e) {//输入状态
    if (e.detail.value == "") {
      this.setData({
        statea: false
      })
    } else {
      this.setData({
        statea: true
      })
    }
  },
  sends: function (e) {//搜索
    this.setData({
      list: this.data.list.concat(e.detail.value)
    })
    util.put("sj_record", this.data.list, this.data.time)//名称、内容、保存时间
    var datas = util.git("sj_record", "");//名称，没有结果时输出
    const newA = Array.from(new Set(datas));
    this.setData({
      list: newA
    })
    util.put("sj_record", this.data.list, this.data.time)//名称、内容、保存时间
    this.storage();
  },
  storage:function(){//获取缓存数据
    var _this = this;
    var datas = util.git("sj_record","");//名称，没有结果时输出
    if (typeof (datas) == 'undefined') {
      console.log('数据已过期');
    } else {
      if (datas.length<=0){
        console.log("没有历史记录");
        _this.setData({
          stateb:true
        })
      }else{
        console.log("显示历史记录");
        _this.setData({
          stateb:false,
          list: datas
        })
      }
    }
  },
  removek: function () {//清空缓存
    wx.clearStorage({
      success: function (res) {
        console.log(res)
        console.log("清空缓存")
      }
    })
    this.setData({
      list:[]
    })
    this.storage();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storage();
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