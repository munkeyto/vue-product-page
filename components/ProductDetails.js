app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template:
  /* html */
  `
  <ul>
    <!-- ! running through the array and prints out each element individually -->
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  `
})