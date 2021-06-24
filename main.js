// * creating a new vue app
// const app = Vue.createApp({
//   // data: function() {
// const app = Vue.createApp({})
// ! the ({}) is an Options object
// ! always pass at least an empty object
// ! Vue is reactive and have a reactivity system that handels updating for us

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      url: 'https://www.vuemastery.com/',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      sizes: ["s", "m", "l", "xl"],
      isActive: false,
      selectedVariant: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
        this.cart -= 1;
    }
  },
  // computed properties provide us a performance improvement because they cache the calculated value.
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    saleMessage() {
      if (this.onSale) {
          return this.brand + ' ' + this.product + ' is on sale.'
      }
      return ''
    }
  }
})