<template>
   <div role="listitem" class="product w-dyn-item w-col w-col-3">
    <NuxtLink :to="`/product/${productTitle}`" class="link-block w-inline-block">
      <img :alt="productTitle" :src="productImage" />
      <div class="productinfo">
        <div class="productinfo_title">{{ productTitle }}</div>
        <div class="productinfo_price">
          <div class="pricenow">{{ priceNow }}</div>
          <div class="pricewas" v-if="priceWas">{{ priceWas }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    productLink: {
      type: String,
      required: true,
    },
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
    priceWas: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>

</style>