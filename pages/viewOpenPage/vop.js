// pages/viewOpenPage/vop.js
var _this 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleList: [{
        "head_photo": "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2005393652,4064638024&fm=26&gp=0.jpg",
        "info": "见覅剪短发俩设计费市里估计撒个娇了"
      },
      {
        "head_photo": "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1463683647,357676853&fm=26&gp=0.jpg",
        "info": "见覅剪短发俩设计费市里估计撒个见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了"
      },
      {
        "head_photo": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3083490177,4087830236&fm=26&gp=0.jpg",
        "info": "见覅剪短发俩设计费市里估计撒个娇了"
      },
      {
        "head_photo": "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4189011130,273392656&fm=111&gp=0.jpg",
        "info": "见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了见覅剪短发俩设计费市里估计撒个娇了"
      }
    ],
    isShow6: true,
    sixLinHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIsShowZk(this.data.circleList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var query = wx.createSelectorQuery()
   _this = this;

    query.select('#abckdkfjs').boundingClientRect()

    query.exec(function (res) {
      console.log("6行的高度呀呀呀呀",res)     
      // _this.setData({
      //   sixLinHeight:res[i].height
      // })
    })
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
  headImageLoadError: function(event){
    _this = this 
    // console.log("Error:",this.data.headImagLoadSuccessNum.length)
    // this.data.headImagLoadSuccessNum.push(event)
    // console.log("Error:",this.data.headImagLoadSuccessNum.length)
    // console.log("Error:",this.data.headImagLoadSuccessNum.length,this.data.circleList.length)
    // if(this.data.headImagLoadSuccessNum.length == this.data.circleList.length){
      // console.log(this.data.headImagLoadSuccessNum.length,this.data.circleList.length)
    // }
  }
  ,
  headImagLoadSuccess: function(event){
    console.log("图片加载成功",event)
    _this = this 
    
    // console.log("Success:",this.data.headImagLoadSuccessNum.length)
    // this.data.headImagLoadSuccessNum.push(event)
    // console.log("Success:",this.data.headImagLoadSuccessNum.length)
    // console.log("Success:",this.data.headImagLoadSuccessNum.length,this.data.circleList.length)
    // if(this.data.headImagLoadSuccessNum.length == this.data.circleList.length){
      // console.log(this.data.headImagLoadSuccessNum.length,this.data.circleList.length)
    // }
  },
  getIsShowZk: function (arrList) {
    var query = wx.createSelectorQuery()
   _this = this;

    query.select('#abckdkfjs').boundingClientRect()

    for (var i = 0; i < arrList.length; i++) {
      var id = '#uMsgs' + i
      query.select(id).boundingClientRect()
    }

    query.exec(function (res) {
      console.log(res)
      for (var i = 1; i <= arrList.length; i++) {
        // console.log(res[i].height, res[0].height, res[i].height > res[0].height)
        var item = arrList[i - 1]
        if (res[i].height >= res[0].height) {
          item.isGreaterThan1 = true;
          item.isExpanding = false;
        }else{
          item.isGreaterThan1 = false;
          item.isExpanding = false;
        }
      }
      // for (var i = 0; i < arrList.length; i++) {
      //   var item = arrList[i]
      //   if (true) {
      //     item.isGreaterThan1 = true;
      //     item.isExpanding = false;
      //   }
      // }
      _this.setData({
        circleList: arrList
      })
    })
  }
  ,
  /**
   * 展开/收起
   */
  handleExpandingChange: function (event) {
    _this = this
    var clickId = event.currentTarget.id
    for (var i = 0; i < _this.data.circleList.length; i++) {
      if (clickId == (("uZhanKaiClick" + i))) {
        _this.data.circleList[i].isExpanding = !_this.data.circleList[i].isExpanding
      }
    }
    this.setData({
      circleList: _this.data.circleList
    })
    this.getIsShowZks(this.data.circleList)
  },
  getIsShowZks: function (arrList) {
    var query = wx.createSelectorQuery()
   _this = this;

    query.select('.business-text').boundingClientRect()

    for (var i = 0; i < arrList.length; i++) {
      var id = '#uMsgs' + i
      query.select(id).boundingClientRect()
    }

    query.exec(function (res) {
      console.log(res)     
    })
  }
})
