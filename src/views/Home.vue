<template>
  <div class="home">
      <navbar />
      <carousel />
      <product />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Product from '@/components/Product'

export default {
    name: 'Home',
    components: { Navbar, Carousel, Product }
}
</script>

<style>

</style>