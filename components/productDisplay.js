app.component('product-display', {
  template:
    /* html */
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :alt="description" :class="{ 'out-of-stock-img': !inStock }">
      </div>
      <div class="product-info">
        <h1 v-if>{{ title }}</h1>
        <p v-if="onSale">{{ saleMessage }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <!-- ! running through the array and prints out each element individually -->
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
        <ul>
          <li v-for="size in sizes">
            {{ size }}
          </li>
        </ul>
        <!-- <a :href="url">More info here</a> -->
        <!-- ! v-on listens for an event. It is equal to the method name -->
        <!-- ! Can add a class based on condition of a certain class thorough v-binding to a class and expressions -->
        <!-- // <button class="button" v-on:click="addToCart">Add to Cart</button> -->
        <button 
          class="button"
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>
        <button class="button" @click="removeFromCart" :disabled="isActive">Remove form Cart</button>
      </div>
    </div>
  </div>`
})