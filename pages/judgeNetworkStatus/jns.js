// pages/judgeNetworkStatus/jns.js
var _this
const netUtils = require('../../netWork/NetUtils.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    netWorkType: '监听中~',
    netWorkType22: '!!!!!1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this
    netUtils.judgeNetworkStatus(function (res) {
      //none 是无网络状态下，networkType 的值
      if ("none" != res) {
        //有网了，干你要干的事儿吧
        _this.setData({
          netWorkType: '有网了,网是' + res
        });
      } else {
        return;
      }
    })
    wx.getNetworkType({
      success: function (res) {
        const networkType = res.networkType
        if ('none' != networkType) {
          _this.setData({
            netWorkType22: '有网,网是' + res.networkType
          })
        } else {
          wx.onNetworkStatusChange(function (res) {
            if (res.isConnected) {
              _this.setData({
                netWorkType22: '有网了,网是' + res.networkType
              })
            } else {
              _this.setData({
                netWorkType22: '没网了'
              })
            }

          })
        }
      },
    })
  },
  click: function () {
    _this = this
    netUtils.judgeNetworkStatus(function (res) {
      //none 是无网络状态下，networkType 的值
      if ("none" != res) {
        //有网了，干你要干的事儿吧
        _this.setData({
          netWorkType: '有网了,网是' + res
        });
      } else {
        return;
      }
    })
    wx.getNetworkType({
      success: function (res) {
        const networkType = res.networkType
        if ('none' != networkType) {
          _this.setData({
            netWorkType22: '有网,网是' + res.networkType
          })
          wx.onNetworkStatusChange(function (res) {
            if (res.isConnected) {
              _this.setData({
                netWorkType22: '有网了,网是' + res.networkType
              })
            } else {
              _this.setData({
                netWorkType22: '没网了'
              })
            }

          })
        } else {
          wx.onNetworkStatusChange(function (res) {
            if (res.isConnected) {
              _this.setData({
                netWorkType22: '有网了,网是' + res.networkType
              })
            } else {
              _this.setData({
                netWorkType22: '没网了'
              })
            }

          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})