import Vue from 'vue';
import Component from 'vue-class-component';
import helloMixins from '../mixins/helloMixin';
@Component({
  props: {
    title: String
  },
  mixins: [helloMixins],
})

export default class hotproduct extends Vue {
  title: String;
  hello:()=>any;
  //更多
  more() {
    this.hello();
    this.$emit('more',  this.title)
  }


}