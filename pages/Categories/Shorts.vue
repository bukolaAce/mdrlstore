<template>
  <div>
    <PageHeader title="Shorts" />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductsCard
            v-for="(short, index) in shorts"
            :key="index"
            :productLink="short.link"
            :productTitle="short.title"
            :productImage="short.image"
            :priceNow="short.priceNow"
            :priceWas="short.priceWas"
          />
        </div>
        <div class="w-dyn-empty" v-if="!shorts.length">
          <div>No items found.</div>
        </div>
      </div>
    </div>
    <Subscribe />
  </div>
</template>

<script setup>
import { useProducts } from "~/composables/useProducts";
const { products } = useProducts();
const shorts= products.filter((p)=>(p.category==='bottoms'))
</script>

<style lang="scss" scoped></style>
