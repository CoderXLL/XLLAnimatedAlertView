//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: false,
    animationData: {}
  },
  btnClick() {
    this.setData({
      isShow: true
    })
  }
})
