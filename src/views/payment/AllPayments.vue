<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category Name </th>
        <th scope="col"> Quantity </th>
        <th scope="col"> Total Price </th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="payments.length > 0">
    <tbody v-for="payment in payments" :key="payment._id">
            <tr>
              <th> {{ payment._id }} </th>
              <td> {{ payment.Name }} </td>
              <td> {{ payment.Quantity }} </td>
              <td> {{ payment.TotalPrice }} </td>
              <td> 
                <router-link :to="{ name: 'SinglePayment', query: { id: payment._id } }"> 
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
  <!-- {{ payments }} -->
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
export default {
    setup(){
        const store = useStore();
        const payments = computed(() => store.state.payments)
        onMounted(() => store.dispatch("getPayment"))

        return {
            payments
        }
    }
}
</script>

<style>

</style>