//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 发送网络请求
    wx.request({
      url: 'url',
      success:function(res){
        console.log(res)
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  hTabClick(event){
    console.log(event)
  },
  handleAdd(){
    // console.log('------------')
    //最终目的：修改组件中的数字
    //组件对象.setData()
    //1,先获取组件对象
    const my_sel=this.selectComponent('#sel-id')
    // console.log(my_sel)
    //2,通过setdata修改组件中的数据(不合理)
    // my_sel.setData({
    //   count:my_sel.data.count+20
    // })
    // 这种方法不推荐，我们最好是写接口
  
    //3,通过接口对数据经行修改
    my_sel.incrementCounter(10)
  }
})
