import Vue from 'vue'
export const signin = function (query: any) {
  return Vue['http'].post('/signin/')
}

