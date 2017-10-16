import Vue from 'vue'
import Vuex from 'vuex'
import { Module, ActionTree } from 'vuex'

import { S } from './types'
import { actions } from './actions'
import mutations from './mutations'
import { state } from './state'

Vue.use(Vuex)

export const News:Module<S, any>  = {
  state: state,
  mutations: mutations,
  actions: actions
};
