import Vue from 'vue';
import { S } from './types';
import { NEWS_LIST } from '../../mutation-types';

export default{
  NEWS_LIST:(state:S,value:any)=>{
    //操作数据
    state.News=value;
  }
};