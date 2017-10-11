import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  components: {

  }
})

export default class NewsComponents extends Vue {
  get News() {
    console.log('走了',this.$store.state.News)
    return this.$store.state.News
  }
  created() {
     this.$store.dispatch('getNews',{type:1})
  }
}