'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  getDetail: function getDetail() {
    var that = this;
    app.wxrequest({
      url: app.getUrl().myintegra,
      data: {
        session3rd: app.gs()
      },
      success: function success(res) {
        wx.hideLoading();
        if (res.data.code === '200') {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = res.data.data.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var v = _step.value;

              v.time = new Date(v.time * 1000).toLocaleString();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          that.setData({
            set: res.data.data.set,
            get: res.data.data.get,
            listArr: res.data.data.list
          });
        } else {
          app.setToast(that, { content: res.data.msg });
        }
      }
    });
  },

  // 关闭规则
  close: function close() {
    var _this = this;

    if (this.data.small) return;
    this.setData({
      small: true
    });
    setTimeout(function () {
      _this.setData({
        show: false
      });
    }, 500);
  },
  show: function show() {
    this.setData({
      show: true,
      small: false
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(optiosn) {
    this.setData({
      score: optiosn.score
    });
    this.getDetail();
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


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=score.js.map
