// pages/waterfallFlow/wf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleList:[
      {
        id:0,
        a:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375017683,2174997570&fm=26&gp=0.jpg',
        b:'是美女呀',
        c:'6',
        d:'985'
      },
      {
        id:1,
        a:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1697850329,1416483110&fm=26&gp=0.jpg',
        b:'是美大师傅女呀',
        c:'6',
        d:'995'
      },
      {
        id:2,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122443580,193955624&fm=26&gp=0.jpg',
        b:'是美sad女呀',
        c:'6',
        d:'234'
      },  {
        id:3,
        a:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3083490177,4087830236&fm=26&gp=0.jpg',
        b:'是美胜多负少女呀',
        c:'6',
        d:'435'
      },  {
        id:4,
        a:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2076212417,3005667226&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:5,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1625310290,73752710&fm=26&gp=0.jpg',
        b:'是美女呀',
        c:'6',
        d:'985'
      },
      {
        id:6,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2374579182,3757175384&fm=26&gp=0.jpg',
        b:'是美大师傅女呀',
        c:'6',
        d:'995'
      },
      {
        id:7,
        a:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2001767787,752829909&fm=26&gp=0.jpg',
        b:'是美sad女呀',
        c:'6',
        d:'234'
      },  {
        id:8,
        a:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3860060341,126967039&fm=26&gp=0.jpg',
        b:'是美胜多负少女呀',
        c:'6',
        d:'435'
      },  {
        id:9,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122443580,193955624&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:10,
        a:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807460086,2881854178&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:11,
        a:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2332975657,3496749507&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      }
      , {
        id:12,
        a:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3076091725,2590138737&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:13,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2410116264,1562918764&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:14,
        a:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3164884185,619407698&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
    ],
    isHaveMore:true,
    moreBeauty:[
      {
        id:15,
        a:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1056235612,2749108915&fm=26&gp=0.jpg',
        b:'是美女呀',
        c:'6',
        d:'985'
      },
      {
        id:16,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1578352299,1489167013&fm=11&gp=0.jpg',
        b:'是美大师傅女呀',
        c:'6',
        d:'995'
      },
      {
        id:17,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122443580,193955624&fm=26&gp=0.jpg',
        b:'是美sad女呀',
        c:'6',
        d:'234'
      },  {
        id:18,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1625310290,73752710&fm=26&gp=0.jpg',
        b:'是美胜多负少女呀',
        c:'6',
        d:'435'
      },  {
        id:19,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=491778059,2973055073&fm=11&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:20,
        a:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2195374342,1553984885&fm=26&gp=0.jpg',
        b:'是美女呀',
        c:'6',
        d:'985'
      },
      {
        id:21,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1828982182,1114677948&fm=26&gp=0.jpg',
        b:'是美大师傅女呀',
        c:'6',
        d:'995'
      },
      {
        id:22,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3362814640,1802564356&fm=26&gp=0.jpg',
        b:'是美sad女呀',
        c:'6',
        d:'234'
      },  {
        id:23,
        a:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=103751946,2665235783&fm=26&gp=0.jpg',
        b:'是美胜多负少女呀',
        c:'6',
        d:'435'
      },  {
        id:24,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122443580,193955624&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:25,
        a:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3554772111,675329364&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:26,
        a:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1923594659,2058543657&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      }
      , {
        id:27,
        a:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1516809084,3577933157&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:28,
        a:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505845389,3637097424&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
      {
        id:29,
        a:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1786857612,523702384&fm=26&gp=0.jpg',
        b:'是美发女呀',
        c:'6',
        d:'434434343'
      },
    ],
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
  hotCircleCilck: function(event){
    var tapId = event.currentTarget.id;
    console.log(tapId)
  },
  scrollTolower: function(){
    if(this.data.isHaveMore){
       this.data.circleList = this.data.circleList.concat(this.data.moreBeauty)
       this.setData({
        circleList: this.data.circleList,
        isHaveMore: false
       })
    }else{
      wx.showToast({
        title: '没有更多了',
        icon: 'none',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {},
      })
    }
  
  }
})