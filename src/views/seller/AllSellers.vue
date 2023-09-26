<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> Seller First Name </th>
        <th scope="col"> Seller Last Name </th>
        <th scope="col"> Supplier Phone</th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <tbody v-for="seller in sellers" :key="seller.id">
      <div v-if="sellers.length > 0">
         <div >
            <tr>
              <th> {{ seller._id }} </th>
              <td> {{ seller.SupplierName.FirstName }} </td>
              <td> {{ seller.SupplierName.LastName }} </td>
              <td> {{ seller.SupplierPhone }} </td>
              <td> 
                <router-link :to="{ name: 'SingleSeller', query: { id: seller._id } }"> 
                  Read 
                </router-link> 
              </td>
            </tr>
          </div>
      </div> 
  <div v-else> 
    loading...
  </div>
    </tbody>
  </table>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const sellers = computed(()=> {return store.state.sellers})

        onMounted(()=> store.dispatch('getSeller'))

        return {
            sellers
        }
    }
}
</script>

<style>

</style>