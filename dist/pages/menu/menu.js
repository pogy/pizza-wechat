'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    sizeIndex: 0,
    sizeNum: 1,
    allMoney: 0,
    couponArr: [{
      need: 100,
      del: 10,
      id: 12
    }, {
      need: 100,
      del: 10,
      id: 12
    }],
    menuArr: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '超级好吃的榴莲',
      sale: '888',
      price: '88.50',
      id: 1,
      sizeArr: []
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '超级好吃的榴莲',
      sale: '888',
      price: '88.50',
      id: 2,
      sizeArr: []
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '超级好吃的榴莲',
      sale: '888',
      price: '88.50',
      id: 3,
      sizeArr: [{
        id: 31,
        size: 10,
        price: 110,
        num: 1
      }, {
        id: 32,
        size: 40,
        price: 13,
        num: 1
      }]
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '超级好吃的榴莲',
      sale: '888',
      price: '88.50',
      id: 4,
      sizeArr: [{
        id: 41,
        size: 10,
        price: 110,
        num: 1
      }, {
        id: 42,
        size: 40,
        price: 13,
        num: 1
      }, {
        id: 43,
        size: 50,
        price: 13,
        num: 1
      }]
    }],
    // showSizeChoose: fasle,
    src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
  },
  // 领取优惠卷
  getCoupon: function getCoupon(e) {
    var that = this;
    app.setToast(that, { image: '../../images/success.png', bgc: '#333', color: '#f30', content: '领取成功' });
  },

  // 菜单页数量选择
  chooseMenuNum: function chooseMenuNum(e) {
    if (e.currentTarget.dataset.type === 'del') {
      --this.data.menuArr[e.currentTarget.dataset.index].num;
    } else {
      if (!this.data.menuArr[e.currentTarget.dataset.index].num) {
        this.data.menuArr[e.currentTarget.dataset.index].num = 1;
      } else {
        ++this.data.menuArr[e.currentTarget.dataset.index].num;
      }
    }
    this.setData({
      menuArr: this.data.menuArr
    });
    this.setGoodsStorage();
  },

  // 确定下单
  confirm: function confirm() {
    wx.navigateTo({
      url: '../submitOrder/submitOrder?money=' + this.data.allMoney
    });
  },

  // 尺寸选择弹窗
  close: function close(e) {
    if (e.currentTarget.dataset.type === 'addCar') {
      // todo  购物车相关计算逻辑
      this.setGoodsStorage(true);
    }
    this.setData({
      showIndex: e.currentTarget.dataset.index || this.data.showIndex,
      showSizeChoose: !this.data.showSizeChoose,
      sizeNum: 1
    });
  },

  // 将选择的物品放置缓存
  setGoodsStorage: function setGoodsStorage(size) {
    var that = this;
    var goodsStorage = app.gs('goodsStorage') || [];
    if (size) {
      // 单独规格添加
      // console.log(1)
      if (goodsStorage.length < 1) {
        goodsStorage.push({
          img: that.data.menuArr[that.data.showIndex].img,
          name: that.data.menuArr[that.data.showIndex].name,
          price: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].price,
          id: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].id,
          size: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].size,
          num: that.data.sizeNum
        });
      } else {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = goodsStorage.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                i = _step$value[0],
                v = _step$value[1];

            if (v.id === that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].id) {
              // 如果存在
              goodsStorage[i] = {
                img: that.data.menuArr[that.data.showIndex].img,
                name: that.data.menuArr[that.data.showIndex].name,
                price: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].price,
                id: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].id,
                size: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].size,
                num: that.data.sizeNum
              };
              break;
            } else if (i === goodsStorage.length - 1) {
              goodsStorage.push({
                img: that.data.menuArr[that.data.showIndex].img,
                name: that.data.menuArr[that.data.showIndex].name,
                price: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].price,
                id: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].id,
                size: that.data.menuArr[that.data.showIndex].sizeArr[that.data.sizeIndex].size,
                num: that.data.sizeNum
              });
            }
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
      }
    } else {
      // console.log(2)
      // 单独规格选择
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.data.menuArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var v = _step2.value;

          if (v.sizeArr.length > 1) continue; // 有规格的不添加
          if (v.num >= 0) {
            if (goodsStorage.length >= 1) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = goodsStorage.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _step3$value = _slicedToArray(_step3.value, 2),
                      i = _step3$value[0],
                      m = _step3$value[1];

                  if (m.id === v.id) {
                    // 缓存中存在该项,重新赋值，跳出循环
                    goodsStorage[i] = v;
                    break;
                  } else if (i === goodsStorage.length - 1) {
                    goodsStorage.push(v);
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            } else {
              goodsStorage.push(v);
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    var num = 0;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = goodsStorage.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            i = _step4$value[0],
            _v = _step4$value[1];

        if (_v.num === 0) {
          goodsStorage.splice(i, 1);
        }
        num += _v.num;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    app.su('goodsStorage', goodsStorage);
    this.calculatorMoney();
    this.setData({
      allCount: num,
      sizeIndex: 0,
      sizeNum: 1
    });
  },

  // 计算总价格
  calculatorMoney: function calculatorMoney() {
    var allMoney = 0;
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = app.gs('goodsStorage')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var v = _step5.value;

        if (v.num) {
          allMoney += v.num * v.price;
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    if (allMoney <= 0) {
      wx.removeStorageSync('goodsStorage');
    }
    this.setData({
      allMoney: allMoney
    });
  },

  // 选择尺寸
  chooseSize: function chooseSize(e) {
    this.setData({
      sizeIndex: e.currentTarget.dataset.index,
      sizeNum: 1
    });
  },

  // 尺寸数量选择
  chooseSizeNum: function chooseSizeNum(e) {
    if (e.currentTarget.dataset.type === 'del') {
      this.setData({
        sizeNum: --this.data.sizeNum
      });
    } else {
      this.setData({
        sizeNum: ++this.data.sizeNum
      });
    }
  },

  // 顶栏选择
  chooseTab: function chooseTab(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    // wx.removeStorageSync('goodsStorage')
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
    var num = 0;
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = app.gs('goodsStorage')[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _v2 = _step6.value;

        num += parseInt(_v2.num);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    this.calculatorMoney();
    if (app.gs('goodsStorage')) {
      if (app.gs('goodsStorage').length >= 1) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.data.menuArr[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var v = _step7.value;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = app.gs('goodsStorage')[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var g = _step8.value;

                if (g.id === v.id) {
                  v.num = g.num;
                  break;
                } else {
                  v.num = 0;
                }
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this.data.menuArr[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var s = _step9.value;

            s.num = 0;
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }
      }
    } else {
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this.data.menuArr[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var _s = _step10.value;

          _s.num = 0;
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
    this.setData({
      allCount: num,
      menuArr: this.data.menuArr
    });
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
//# sourceMappingURL=menu.js.map