import Vue from 'vue';
import Component from 'vue-class-component';
import hotproduct from '../../common/hotproduct.vue'
@Component({
  components: {
    'hotproduct': hotproduct
  }
})

export default class HelloWorld extends Vue {
  msg: string = "hello 最好的我们 最好的我们";
  product_title = "热门产品";
  //方法名称
  onmore(title) {
    alert(title);
  }
}