// * specific lego blocks building web page
app.component('product-display', {
  // wth props we can import data from outside the component
  props: { //props option
    premium: { //premium prop
      type: Boolean,
      required: true 
    }
  },
  //allows us to use html
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
        
        <!-- ! by using the v-bind directive with key atribute. We are tying the variant's id -->
        <!-- ! assign the variant color to each circle on hover through style -->
        <ul class="color-options">
					<li v-for="(variant, index) in variants" 
          :key="variant.id" 
          @click="updateVariant(index)"
          class="color-circle individual-element-spacing"
          :style="{ backgroundColor: variant.color }"
        	>
					</li>
        </ul>

        <!-- <a :href="url">More info here</a> -->
        <!-- ! v-on listens for an event. It is equal to the method name -->
        <!-- ! Can add a class based on condition of a certain class thorough v-binding to a class and expressions -->
        <!-- // <button class="button" v-on:click="addToCart">Add to Cart</button> -->

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
      // this.cart += 1;
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
        // this.cart -= 1;
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    addReview(review) {
      this.reviews.push(review)
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
    shipping() {
      if (this.premium) {
        return 0
      }
      return 2.99
    }
  }
})