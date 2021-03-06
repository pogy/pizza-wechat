'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  getData: function getData() {
    var that = this;
    app.wxrequest({
      url: app.getUrl().invite,
      data: {
        session3rd: app.gs()
      },
      success: function success(res) {
        wx.hideLoading();
        if (res.data.code === '200') {
          that.setData({
            info: res.data.data
          });
        } else {
          app.setToast(that, { content: res.data.msg });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    this.setData({
      id: options.id
    });
    this.getData();
    // TODO: onLoad
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },
  onShareAppMessage: function onShareAppMessage() {
    var that = this;
    return {
      title: '您的好友邀请您购买披萨啦',
      path: '/pages/index/index?id=' + that.data.id
    };
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=invite.js.map
