<script setup>
import { useCart } from '~/composables/useCart';

  const { addToCart, cart } = useCart();
  const props = defineProps({
    productTitle: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    priceNow: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      default: '',
    },
    productSize: {
      type: Array,
      required: true,
    },
  });

  const backgroundImageStyle = computed(() => ({
    backgroundImage: `url(${props.productImage})`,
  }));

  const size = ref('');
  const quantity = ref(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    addToCart({
      title: props.productTitle,
      price: props.priceNow,
      image: props.productImage,
      size: size.value,
      quantity: quantity.value,
    });
  };

  const validateQuantity = (event) => {
    const value = event.target.value;
    quantity.value = Math.max(1, parseInt(value) || 1);
  };
</script>

<template>
  <div class="product_section">
    <div class="product_photo" :style="backgroundImageStyle"></div>
    <div class="product_content">
      <h1 class="product_title">{{ productTitle }}</h1>
      <div class="product_price">{{ priceNow }}</div>
      <p class="product_description">{{ productDescription }}</p>
      <form @submit="handleSubmit" data-node-type="commerce-add-to-cart-form" class="w-commerce-commerceaddtocartform">
        <div role="group">
          <label for="option-set">Size</label>
          <select id="option-set" v-model="size" data-node-type="commerce-add-to-cart-option-select" class="w-select" required>
            <option value="" disabled>Select Size</option>
            <option v-for="sizeOption in productSize" :key="sizeOption" :value="sizeOption">
              {{ sizeOption }}
            </option>
          </select>
        </div>
        <label for="quantity">Quantity</label>
        <input type="number" v-model="quantity" @input="validateQuantity" pattern="^[0-9]+$" inputmode="numeric" id="quantity" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput" />
        <input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart" />
      </form>
      <div v-show="false" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
        <div>This product is out of stock.</div>
      </div>
      <CartError />
    </div>
  </div>
</template>
