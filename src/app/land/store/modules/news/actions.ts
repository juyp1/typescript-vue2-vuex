import { ActionContext, Action, ActionTree } from 'vuex';
import { S } from './types';
import { NewsList } from "../../../api/News";

export const getNews: Action<S, any> = ({ commit, getters }: ActionContext<S, any>, query: any) => {
  return new Promise((resolve, reject) => {
    NewsList(query).then((res: any) => {
      commit('NEWS_LIST', res);
      resolve();
    }, () => {
      reject();
    });
  });
};

export const actions:ActionTree<S,any>={
  getNews:getNews
}