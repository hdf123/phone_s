Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 24.4795100000,
    longitude: 118.0894800000,
    markers: [{
      iconPath: "../../image/bubbles.png",
      id: 1,
      width:0.1,
      height:0.1,
      latitude: 24.5131500000,
      longitude: 118.1468600000,
      callout: {
        content: " 1厦门湖里区政府 \n 70000元/㎡",
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    },{
      // iconPath: " ",
      id: 2,
      latitude: 24.7235700000,
      longitude: 118.1517300000,
      callout: {
        content: " 2厦门市同安区政府 \n 100",
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    },{
      // iconPath: " ",
      id: 3,
      latitude: 24.5759000000,
      longitude: 118.0972700000,
      callout: {
        content: " 3厦门市集美区政府 \n 100",
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    },{
      // iconPath: " ",
      id: 4,
      latitude: 24.4846000000,
      longitude: 118.0329300000,
      callout: {
        content: " 4厦门市海沧区政府 \n 100",
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    },{
      // iconPath: " ",
      id: 5,
      latitude: 24.6196000000,
      longitude: 118.2478900000,
      callout: {
        content: " 5厦门市翔安区政府 \n 100",
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }],
    mapWidth:'',
    mapHeight:''
  },
  toaddress:function(e){
    console.log(e);
    var id =e.markerId;
    console.log(id);
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