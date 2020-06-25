// components/my-mslot/my-mslot.js
// 四：Component构造器
Component({
  // 作用：定义组件的配置选项
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   * 作用：让使用者可以给组件传入数据
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * 作用：定义组件内部的函数
   */
  methods: {

  },
  //外界给组件传入的额外样式
  externalClasses:[],

  // 可以监听properties/data的改变
  observers:{

  },

  // 组件中监听生命周期函数
  // 1，监听所在页面的生命周期
  // 2，监听组件自身的生命周期
})
