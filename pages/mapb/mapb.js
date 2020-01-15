Page({
  data: {
    markers: [{
      id: 0,

    }]
  },
  toaddress:function(e){
    console.log(e);
    var id =e.markerId;
    console.log(id);
  },
  onLoad() {
    wx.getLocation({
      success: (res) => {
        const {
          latitude,
          longitude
        } = res
        console.log(latitude);
        console.log(longitude);
        this.setData({
          latitude: latitude,
          longitude: longitude,
          markers: [{
            id: 0,
            iconPath: "../../image/area.png",
            latitude:34.78977,
            longitude:113.65072,
            alpha: 1,
            width: 200,
            height: 200,
            anchor:{x:.5,y:.5},
            label: {
              content: "今晚打老虎",
              color: "#FFF",
              fontSize: 14,
              // anchorX:-70,
              anchorX:-35,//字体大小的一般乘以字数
              anchorY:-10.5,//字体大小乘以0.75
              // anchorY:-30,
              bgColor: "#29A9FE00",
              borderWidth: 0,
              borderColor: "#00BFFFAA",
              borderRadius:100,
              textAlign: 'center',
              padding:0
            }
          }, {
            id: 1,
            iconPath: "../../image/area.png",
            latitude:34.77977,
            longitude:113.64072,
            alpha: 1,
            width: 200,
            height: 200,
            anchor:{x:.5,y:.5},
            label: {
              content: "今",
              color: "#FFF",
              fontSize: 14,
              anchorX:-7,
              anchorY:-10,
              bgColor: "#00BFFF00",
              borderWidth: 0,
              borderColor: "#00BFFFAA",
              borderRadius: 80,
              textAlign: 'center',
              padding:0
            }
          }]
        });
      }
    })
  }
})