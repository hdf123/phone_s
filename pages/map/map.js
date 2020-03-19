Page({
  /**
   * 页面的初始数据
   */
  data: {
    scales:12,
    latitude: 24.4795100000,
    longitude: 118.0894800000,
    ads:[{
      iconPath: "../../image/area.png",
      id: 1,
      width:0.1,
      height:0.1,
      latitude: 24.5131500000,
      longitude: 118.1468600000,
      callout: {
        color:"#fff",
        content: "今晚打老虎1",
        padding:10,
        borderRadius:50,
        bgColor:'#0099ff',
        borderColor:'#0099ff',
        fontSize: 14,
        display:'ALWAYS',
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 1,
      width:0.1,
      height:0.1,
      latitude:24.51499190350442,
      longitude:118.14978361129761,
      callout: {
        color:"#fff",
        content: "今晚打老虎2",
        padding:10,
        borderRadius:50,
        bgColor:'#0099ff',
        borderColor:'#0099ff',
        fontSize: 14,
        display:'ALWAYS',
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 1,
      width:0.1,
      height:0.1,
      latitude:24.512453846061597,
      longitude:118.15298080444336,
      callout: {
        color:"#fff",
        content: "今晚打老虎3",
        padding:10,
        borderRadius:50,
        bgColor:'#0099ff',
        borderColor:'#0099ff',
        fontSize: 14,
        display:'ALWAYS',
        textAlign: 'center'
      }
    }],
    markers: [{
      iconPath: "../../image/area.png",
      id: 1,
      width:150,
      height:150,
      anchor:{x:.5,y:.5},
      latitude: 24.5131500000,
      longitude: 118.1468600000,
      label: {
        color: "#FFF",
        content: "1厦门湖里区政府\n70000元/㎡",
        padding:0,
        fontSize: 14,
        anchorX:-56,//字体大小的一半乘以字数，空格也要计算在内
        anchorY:-20,//字体大小乘以0.75,多行就再乘以行数
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 2,
      width:150,
      height:150,
      anchor:{x:.5,y:.5},
      latitude: 24.7235700000,
      longitude: 118.1517300000,
      label: {
        color: "#FFF",
        content: "2厦门市同安区政府\n100",
        padding:0,
        fontSize: 14,
        anchorX:-63,//字体大小的一半乘以字数，空格也要计算在内
        anchorY:-20,//字体大小乘以0.75,多行就再乘以行数
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 3,
      width:150,
      height:150,
      anchor:{x:.5,y:.5},
      latitude: 24.5759000000,
      longitude: 118.0972700000,
      label: {
        color: "#FFF",
        content: "3厦门市集美区政府\n100",
        padding:0,
        fontSize: 14,
        anchorX:-63,//字体大小的一半乘以字数，空格也要计算在内
        anchorY:-20,//字体大小乘以0.75,多行就再乘以行数
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 4,
      width:150,
      height:150,
      anchor:{x:.5,y:.5},
      latitude: 24.4846000000,
      longitude: 118.0329300000,
      label: {
        color: "#FFF",
        content: "4厦门市海沧区政府\n100",
        padding:0,
        fontSize: 14,
        anchorX:-63,//字体大小的一半乘以字数，空格也要计算在内
        anchorY:-20,//字体大小乘以0.75,多行就再乘以行数
        textAlign: 'center'
      }
    },{
      iconPath: "../../image/area.png",
      id: 5,
      width:150,
      height:150,
      anchor:{x:.5,y:.5},
      latitude: 24.6196000000,
      longitude: 118.2478900000,
      label: {
        color: "#FFF",
        content: "5厦门市翔安区政府\n100",
        padding:0,
        fontSize: 14,
        anchorX:-63,//字体大小的一半乘以字数，空格也要计算在内
        anchorY:-20,//字体大小乘以0.75,多行就再乘以行数
        textAlign: 'center'
      }
    }]
  },
  toaddress:function(e){
    console.log(e);
    var _this=this;
    _this.setData({
      markers:_this.data.ads
    })
  },
  bdt:function(e){//点击地图获取当前位置坐标
    console.log(e);
  },
  callout:function(e){
    console.log(e);
    console.log(e.markerId);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sy = wx.getSystemInfoSync(),mapWidth = sy.windowWidth*2,mapHeight = sy.windowHeight*2;
    // this.setData({
    //   mapWidth:mapWidth,
    //   mapHeight:mapHeight
    // })
  }
})