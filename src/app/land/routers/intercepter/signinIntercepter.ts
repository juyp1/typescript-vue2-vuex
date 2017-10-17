import { signin } from '../../api/user';
import { RawLocation } from 'vue-router';
import Vue from 'vue';

export default class SigninIntercepter {
  do(next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) {
    //判断是否得到用户信息
    let user = { _id: '获取用户信息' };
    if (user && user._id) {
      return next();
    }

    let ssoToken = [];
    if (!ssoToken) {
      next(false);
      //跳转到登录
      return '/signin';
    }
    ssoToken = ssoToken.slice(13);
    signin(ssoToken).then(function (res: { [key: string]: any }) {
      //再次缓存用户信息
        //G.currentUser.set(res.body);
      next();
    }, function () {
      next(false);
      //跳转到登录
      return '/signin';
    });
  }
}