//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad: function () {
   
  },
   /**
   * 用来判断当前设备是否有网，有网就加载，无网络状态则弹出加载框，有网加载（请用真机测试）
   */
  judgeNetworkStatusClick: function(){
    wx.navigateTo({
      url: '/pages/judgeNetworkStatus/jns',
    })
  },
  waterfallFlowClick: function(){
    wx.navigateTo({
      url: '/pages/waterfallFlow/wf',
    })
  },
  chooseImagAndDraw: function(){
    wx.navigateTo({
      url: '/pages/chooseImagAndCanvas/ciac',
    })
  },
  viewOpen: function(){
    wx.navigateTo({
      url: '/pages/viewOpenPage/vop',
    })
  },
  viewTextCopy: function(){
    wx.navigateTo({
      url: '/pages/textCopy/tc',
    })
  }
})
