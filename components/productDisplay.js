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
        
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        
        <!-- ! by using the v-bind directive with key atribute. We are tying the variant's id -->
        <!-- ! assign the variant color to each circle on hover through style -->
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
        </div>

        <!-- <a :href="url">More info here</a> -->
        <!-- ! v-on listens for an event. It is equal to the method name -->
        <!-- ! Can add a class based on condition of a certain class thorough v-binding to a class and expressions -->
        <!-- // <button class="button" v-on:click="addToCart">Add to Cart</button> -->
        <p>Shipping {{ shipping }}</p>

        <button 
          class="button"
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>
        
        <button class="button" @click="removeFromCart" :disabled="isActive">Remove from Cart</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 5 }
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
        return 'Free'
      }
      return 2.99
    }
  }
})