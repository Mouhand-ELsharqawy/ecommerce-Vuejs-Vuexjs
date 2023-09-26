<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> Product Name </th>
        <th scope="col"> Product Price </th>
        <th scope="col"> Product Quantity </th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="products.length > 0">
    <tbody v-for="product in products" :key="product.id">
            <tr>
              <th> {{ product._id }} </th>
              <td> {{ product.ProductName }} </td>
              <td> {{ product.Price }} </td>
              <td> {{ product.Quantity }} </td>
              <td> 
                <router-link :to="{ name: 'SingleProduct', query: { id: product._id } }">
                   Read 
                </router-link> 
              </td>
            </tr>
    </tbody>
    </div> 
    <div v-else> 
        loading...
    </div>  
  </table>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const products = computed(() => store.state.products)
        onMounted(() => store.dispatch('getProduct'))

        return {
            products
        }
    }
}
</script>

<style>

</style>