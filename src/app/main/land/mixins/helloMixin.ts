const helloMsg = function () {
  console.log('mixin')
}
export default {
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    }
  }
}