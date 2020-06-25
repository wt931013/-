// components/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  // 从页面传值给组件的属性
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      // console.log(event);
      const index=event.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      })
      //传出组件内部点击事件到页面
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]},{})

    }
  }
})
