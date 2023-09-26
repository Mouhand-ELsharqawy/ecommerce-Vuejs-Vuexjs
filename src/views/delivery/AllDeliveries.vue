<template>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> Delivery Date </th>
        <th scope="col"> Delivery Man First Name </th>
        <th scope="col"> Delivery Man Last Name </th>
        <th scope="col"> More </th>
      </tr>
    </thead>
    <div v-if="deliveries.length > 0">
    <tbody v-for="delivery in deliveries" :key="delivery.id">
            <tr>
              <th> {{ delivery._id }} </th>
              <td> {{ delivery.DeliveryDate }} </td>
              <td> {{ delivery.DeliveryManName.FirstName }} </td>
              <td> {{ delivery.DeliveryManName.LastName }} </td>
              <td> 
                <router-link :to="{ name: 'SingleDelivery', query: { id: delivery._id } }"> 
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
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';
export default {
    setup(){
        const store = useStore();

        const deliveries = computed(() => { return store.state.deliveries})
        onMounted( () => store.dispatch('getDelivery'))

        return {
            deliveries
        }
    }
}
</script>

<style>

</style>