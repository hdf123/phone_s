Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 24.4795100000,
    longitude: 118.0894800000,
    markers: [{
      // iconPath: "../../image/area.png",
      id: 1,
      width:50,
      height:50,
      latitude: 24.5131500000,
      longitude: 118.1468600000,
      label: {
        content: " 1厦门湖里区政府 \n 70000元/㎡",
        padding: 10,
        anchorX:-40,
        anchorY:-30,
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 2,
      width:50,
      height:50,
      latitude: 24.7235700000,
      longitude: 118.1517300000,
      label: {
        content: " 2厦门市同安区政府 \n 100",
        padding: 10,
        width:10,
        borderRadius:100,
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 3,
      width:50,
      height:50,
      latitude: 24.5759000000,
      longitude: 118.0972700000,
      label: {
        content: " 3厦门市集美区政府 \n 100",
        padding: 10,
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 4,
      width:50,
      height:50,
      latitude: 24.4846000000,
      longitude: 118.0329300000,
      label: {
        content: " 4厦门市海沧区政府 \n 100",
        padding: 10,
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 5,
      width:50,
      height:50,
      latitude: 24.6196000000,
      longitude: 118.2478900000,
      label: {
        content: " 5厦门市翔安区政府 \n 100",
        padding: 10,
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