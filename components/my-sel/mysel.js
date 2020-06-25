// components/my-sel/mysel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 从这里写接口,接口即方法
    incrementCounter(num){
      this.setData({
        count:this.data.count+num
      })
    }
  }
})
