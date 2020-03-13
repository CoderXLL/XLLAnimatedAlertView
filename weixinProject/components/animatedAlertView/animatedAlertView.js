// components/animatedAlertView/animatedAlertView.js
Component({
  properties: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: {
    animationData: {}
  },
  methods: {
    hideAlert() {
      this.setData({
        isShow: false
      })
    }
  },
  observers: {
    isShow(newValue) {
      if (!newValue) {
        this.animation.bottom('-100%').step()
      } else {
        this.animation.bottom('0').step()
      }
      this.setData({
        animationData: this.animation.export()
      })
    }
  },
  lifetimes: {
    created() {
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      })
      this.animation = animation
    }
  },
})
