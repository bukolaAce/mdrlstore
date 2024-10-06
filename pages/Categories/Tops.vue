<template>
  <div>
    <PageHeader title="Tops" />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductsCard
            v-for="(top, index) in tops"
            :key="index"
            :productLink="top.link"
            :productTitle="top.title"
            :productImage="top.image"
            :priceNow="top.priceNow"
            :priceWas="top.priceWas"
          />
        </div>
        <div class="w-dyn-empty" v-if="!tops.length">
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
const tops = products.filter((product) => product.category === "tops");
</script>

<style lang="scss" scoped></style>
