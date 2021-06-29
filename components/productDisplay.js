app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true 
    }
  },
  template:
  /* html */
  `
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :class="{ 'out-of-stock-img': !inStock }">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <hr />
        
        <p v-if="inStock">$ {{ price }} + Shipping ($ {{shipping}})</p>
        <p v-else class="no-stock">Out of Stock</p>
        
        <p>Socks straight out of a JavaScript framework! <br/>
				These socks are soft, strong and will keep you toasty through the winter months.</p>
       
				<ul class="color-options">
					<li v-for="(variant, index) in variants" 
          :key="variant.id" 
          @click="updateVariant(index)"
          class="color-circle individual-element-spacing"
          :style="{ backgroundColor: variant.color }"
        	>
					</li>
        </ul>

        <button 
          class="button individual-element-spacing"
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
				</button>
        
        <button class="button confirm" @click="removeFromCart" :disabled="isActive">Remove from Cart</button>
				<a href="#review"><h3>Leave a Review</h3></a>
				
				<review-list v-if="reviews.length" :reviews="reviews"></review-list>
      </div>
    </div>
		<section id="review">
			<review-form @review-submitted="addReview"></review-form>
		</section>
  </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      price: 7.99,
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', price: 7.99, quantity: 10 },
        { id: 2235, color: '#3A495E', image: './assets/images/socks_blue.jpg', price: 7.99, quantity: 0 }
      ],
      isActive: false,
      selectedVariant: 0,
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
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
    shipping() {
      if (this.premium) {
        return 0
      }
      return 2.99
    }
  }
})