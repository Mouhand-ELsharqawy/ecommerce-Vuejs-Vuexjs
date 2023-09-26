<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> Customer Name </th>
        <th scope="col"> Product Name </th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="transactions.length > 0">
    <tbody v-for="transaction in transactions" :key="transaction.id">
            <tr>
              <th> {{ transaction._id }} </th>
              <th> {{ transaction.CustomerId.Name.FirstName }} </th>
              <th> {{ transaction.ProductId.ProductName }} </th>
              <th>  
                <router-link :to="{ name: 'SingleTransaction', query : { id: transaction._id } }"> 
                  Read 
                </router-link> 
              </th>
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
        const transactions = computed(() => store.state.transactions)
        onMounted(() => store.dispatch('getTransaction'))

        return {
            transactions
        }
    }
}
</script>

<style>

</style>