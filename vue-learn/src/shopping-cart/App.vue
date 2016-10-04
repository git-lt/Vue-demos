<template>
  <div>
    <c-product></c-product>
  </div>
</template>

<script>
import Product from './components/Product.vue';

export default {
  name:'cart',
  components:{
    'c-product':Product
  }
}
</script>
