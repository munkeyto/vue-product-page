// * creating a new vue app
// * global elements
// const app = Vue.createApp({
//   // data: function() {
// const app = Vue.createApp({})
// ! the ({}) is an Options object

// ! always pass at least an empty object
// ! Vue is reactive and have a reactivity system that handels updating for us

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    reduceCart(id) {
      const index = this.cart.indexOf(id) //get the first postion of an elemnt in an array
          if (index > -1) {
              this.cart.splice(index, 1)
          }
    }
  }
})