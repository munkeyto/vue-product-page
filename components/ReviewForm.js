app.component('review-form', {
  template:
  /*html*/
  `
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a Review</h3>
    <label for="name">Name</label>
    <input id="name" v-model="name" />

    <label for="review">Review</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating</label>
    <select id="rating" v-model.number="rating">
      <option value="5"></option>
      <option value="4"></option>
      <option value="3"></option>
      <option value="2"></option>
      <option value="1"></option>
    </select>

    <input class="button" type="submit" value="submit" />
  </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods() {
    onsubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      //sends the review data upwards
      this.$emit('review-submitted', productReview)
      
      // clearing data field
      this.name = ''
      this.review = ''
      this.rating = null
    }
  }
})