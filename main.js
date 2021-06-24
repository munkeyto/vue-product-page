// * creating a new vue app
// const app = Vue.createApp({
//   // data: function() {
//   data() { //ES6 shorthand - This is the data Option
//     return { // return object
//       product: 'Socks',
//       description: 'Feels good man'
//     }
//   }
// })

// const app = Vue.createApp({})
// ! the ({}) is an Options object
// ! always pass at least an empty object

// ! Vue is reactive and have a reactivity system that handels updating for us

const app = Vue.createApp({
  data() {
      return {
        cart: 0,
        product: 'Socks',
        description: 'green socks',
        image: './assets/images/socks_green.jpg',
        url: 'https://www.vuemastery.com/',
        inStock: false,
        // inventory: 20, <-- Used for conditional stock management
        onSale: false,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ],
        sizes: ["s", "m", "l", "xl"],
        isActive: false
      }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
        this.cart -= 1;
    }
  }
})