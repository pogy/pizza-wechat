'use strict';

/**
 * Created by Administrator on 2017/6/2.
 */
// let baseDomain = 'http://group.lanzhangxiu.cn'
var baseDomain = 'http://pizza.lanzhangxiu.cn/';
var serviceUrl = {
  login: baseDomain + 'api/Login/getLogin',
  menu: baseDomain + 'api/Shop/goodslist',
  user: baseDomain + 'api/User/index',
  myorder: baseDomain + 'api/User/my_order',
  delOrder: baseDomain + 'api/User/edit_order',
  detail: baseDomain + 'api/User/detail',
  orderBuy: baseDomain + 'api/Shop/buy',
  orderPay: baseDomain + 'api/Shop/pay',
  myintegra: baseDomain + 'api/User/my_integra',
  mymoney: baseDomain + 'api/User/my_money',
  getcoupon: baseDomain + 'api/User/get_coupon',
  invite: baseDomain + 'api/User/invite',
  getcode: baseDomain + 'api/User/getcode',
  bind: baseDomain + 'api/User/bind',
  pay: baseDomain + 'api/User/recharge',
  rechargeSet: baseDomain + 'api/Shop/recharge_set',
  mycoupon: baseDomain + 'api/User/my_coupon'
};
module.exports = serviceUrl;
//# sourceMappingURL=service.js.map
