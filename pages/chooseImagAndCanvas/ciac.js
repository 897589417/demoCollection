// pages/chooseImagAndCanvas/ciac.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '',
    quality: 0.2,
    cWidth: 0,
    cHeight: 0,
    timer: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  /**
   * 选项添加图片事件
   */
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: result => {
        wx.getImageInfo({
          src: result.tempFilePaths[0],
          success: function (res) {
            console.log(res.width, res.height)
            that.setData({
              cWidth: res.width,
              cHeight: res.height
            }, () => {
              // setData引起的页面渲染完成之后的回调函数
              // setData渲染是异步的 canvasToTempFilePath的时候canvas的大小可能还没有被重新设置
              that.getCanvasImg(result.tempFilePaths, res.width, res.height, that.data.quality);
            })
          }
        })

      }
    })

  },

  /**
   * 质量压缩
   */
  getCanvasImg: function (tempFilePaths, canvasWidth, canvasHeight, quality) {
    var that = this;
    const ctx = wx.createCanvasContext('attendCanvasId');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let pixelRatio = wx.getSystemInfoSync().pixelRatio
    ctx.drawImage(tempFilePaths[0], 0, 0, canvasWidth, canvasHeight);
    ctx.draw(false, function () {
      that.data.timer = setTimeout(() => {
        wx.canvasToTempFilePath({
          canvasId: 'attendCanvasId',
          fileType: 'jpg',
          quality: quality,
          destWidth: canvasWidth,
          destHeight: canvasHeight,
          success: function success(res) {
            clearTimeout(that.data.timer)
            that.setData({
              imagePath: res.tempFilePath
            });
          },
          fail: function (e) {
            clearTimeout(that.data.timer)
            wx.showModal({
              title: '提示',
              content: JSON.stringify(e),
            })
          }
        });
      }, 500)
    });
  },

  /**
   * 图片保存到相册
   */
  save: function (e) {
    let that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success: function (res) {
        console.log('图片已保存');
      },
      fail: function (res) {
        console.log('保存失败');
      }
    })
  },
  chooseImagClick: function () {
    const ctx = wx.createCanvasContext('myCanvas')

    wx.chooseImage({
      success: function (res) {
        console.log(res.tempFilePaths[0])
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        ctx.draw()
      }
    })
  }
})
