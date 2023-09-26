<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Customer First Name </th>
        <th scope="col">Customer Last Name </th>
        <th scope="col">Customer Phone Number</th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="customers.length > 0">
     <tbody v-for="customer in customers" :key="customer._id">
            <tr>
              <th> {{ customer._id }} </th>
              <td> {{ customer.Name.FirstName }} </td>
              <td> {{ customer.Name.LastName }} </td>
              <td> {{ customer.PhoneNumber }} </td>
              <td> 
                <router-link :to="{ name: 'SingleCustomer', query: { id: customer._id } }"> 
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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        onMounted(()=> store.dispatch('getCustomer'))
        const customers = computed(()=> { return store.state.customers})
        
        return {
            customers
        }
    }
}
</script>

<style>

</style>