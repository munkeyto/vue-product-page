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
          product: 'Socks',
          description: 'green socks',
          image: './assets/images/socks_green.jpg',
          url: 'https://www.vuemastery.com/'
      }
  }
})