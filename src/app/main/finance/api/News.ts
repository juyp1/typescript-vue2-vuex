import Vue from 'vue'
export const NewsList = function (query: { [key: string]: any }) {
  return Vue['http'].get('/faqs/')
}

