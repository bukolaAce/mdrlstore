<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <NuxtLink to="/" aria-current="page" class="brand w-nav-brand w--current">
      <h1 class="logo">MDLR</h1>
      <h2 class="logo subhead">Online Store</h2>
    </NuxtLink>
    <nav role="navigation" class="nav-menu w-nav-menu">
      <NuxtLink to="/" aria-current="page" class="nav-link w-nav-link">Home</NuxtLink>
      <NuxtLink to="/Categories/Tops" class="nav-link w-nav-link">Tops</NuxtLink>
      <NuxtLink to="/Categories/Shorts" class="nav-link w-nav-link">Shorts</NuxtLink>
      <NuxtLink to="/Categories/Accessories" class="nav-link w-nav-link">Accessories</NuxtLink>
      <a href="#" class="nav-link w-nav-link">Contact</a>
    </nav>
    <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="rightSidebar" data-wf-cart-query="" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper cart-2">
      <a @click.prevent="toggleCart" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"
        ><img src="/images/bx-cart.svg" alt="" />
        <div class="w-commerce-commercecartopenlinkcount cart-quantity">{{ totalQuantity }}</div>
      </a>
      <div class="w-commerce-commercecartformwrapper">
        <CartInfo v-if="isCartOpen" @close="closeCart" />
      </div>
    </div>
    <div class="menu-button w-nav-button" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
      <img src="/images/bx-menu-alt-right.svg" alt="" />
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
 .router-link-exact-active {
    opacity: 0.5;
    color: #333;
  }
</style>