app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.rating }}/5 from {{ review.name }}
        <br/>
        {{ review.review }}
        <br/> 
      </li>
    </ul>
  </div>
  `
})