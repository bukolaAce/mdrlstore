<template>
  <div>
    <PageHeader title="Accessories" />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductsCard
            v-for="(accessory, index) in Accessories"
            :key="index"
            :productLink="accessory.link"
            :productTitle="accessory.title"
            :productImage="accessory.image"
            :priceNow="accessory.priceNow"
            :priceWas="accessory.priceWas"
          />
        </div>
        <div class="w-dyn-empty" v-if="!Accessories.length">
          <div>No items found.</div>
        </div>
      </div>
    </div>
    <Subscribe />
  </div>
</template>

<script setup>
import { useProducts } from "~/composables/useProducts";
const {products}=useProducts();
const Accessories=products.filter(p=>(p.category==="accessories"))
</script>

<style lang="scss" scoped>

</style>