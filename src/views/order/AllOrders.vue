<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> Customer Name </th>
        <th scope="col"> Product Name </th>
        <th scope="col"> Product Price </th>
        <th scope="col"> Product Quantity </th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="orders.length > 0">
    <tbody v-for="order in orders" :key="order.id">
            <tr>
              <th> {{ order._id }} </th>
              <td> {{ order.CustomerId.Name.FirstName }} </td>
              <td> {{ order.ProductId ? order.ProductId.ProductName : ''}} </td>
              <td> {{ order.Price }} </td>
              <td> {{ order.Quantity }} </td>
              <td> 
                <router-link :to="{ name: 'SingleOrder', query: { id: order._id} }">
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
  <!-- {{ orders }} -->
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const orders = computed(() => store.state.orders)
        onMounted(() => store.dispatch('getOrder'))

        return {
            orders
        }
    }
}
</script>

<style>

</style>