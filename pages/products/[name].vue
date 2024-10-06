<template>
  <div>
    <ProductDetails
      :productTitle="product.title"
      :productImage="`${product.image}`"
      :priceNow="product.priceNow"
      :productDescription="product.description"
      :productSize="product.size"
    />
    <Subscribe />
  </div>
</template>

<script setup>
const productName = useRoute().params.name;
const { products } = useProducts();
const product = products.find((p) => p.title === productName);
</script>

<style lang="scss" scoped></style>
