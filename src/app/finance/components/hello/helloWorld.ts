import Vue from 'vue';
import Component from 'vue-class-component';
import hotproduct from '../../common/hotproduct.vue'
@Component({
  components: {
    'hotproduct': hotproduct
  }
})

export default class HelloWorld extends Vue {
  msg: string = "致青春!致青春!致我们奔跑的操场!";
  product_title = "热门产品";
  //方法名称
  onmore(title) {
    alert(title);
  }

  checkObject = {
    checkName:function(){
        alert('检测名称')
    }
  }

}