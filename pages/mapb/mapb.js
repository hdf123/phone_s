Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude:34.7691233090938,
    longitude:113.7734055519104,
    markers: [{
      id: 1,
      latitude:34.7691233090938,
      longitude:113.7734055519104,
      label:{
        content: '金水区雅宝2号楼1201',  //文本
        color: '#FF0202',  //文本颜色
        borderRadius: 3,  //边框圆角
        borderWidth: 1,  //边框宽度
        borderColor: '#FF0202',  //边框颜色
        bgColor: '#ffffff',  //背景色
        padding: 5,  //文本边缘留白
        textAlign: 'center'  //文本对齐方式。有效值: left, right, center
      }
    },{
      id: 2,
      latitude:34.768735524140006,
      longitude:113.7734967470169,
      label: {
        content: " 2厦门市同安区政府 \n 100",
        padding: 10,
        borderRadius:100,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }],
  },
  toaddress:function(e){
    console.log(e);
    var id =e.markerId;
    console.log(id);
  },
  cdts:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sy = wx.getSystemInfoSync(),mapWidth = sy.windowWidth*2,mapHeight = sy.windowHeight*2;
    this.setData({
      mapWidth:mapWidth,
      mapHeight:mapHeight
    })
  }
})