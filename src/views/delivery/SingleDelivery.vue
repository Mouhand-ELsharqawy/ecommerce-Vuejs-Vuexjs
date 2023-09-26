<template>
  <div class="card" v-if="delivery">
    <div class="card-body">
      <h5 class="card-title">Customer First Name 
        {{ delivery.CustomerId ? delivery.CustomerId.Name.FirstName : '' }}</h5>
      <p class="card-title">Customer Last Name 
        {{ delivery.CustomerId ? delivery.CustomerId.Name.LastName : '' }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Delivery Date {{ delivery.DeliveryDate }}</li>
      <li class="list-group-item">Delivery Man Address: 
        Square {{ delivery.DeliveryManAddress ? delivery.DeliveryManAddress.Square : '' }},
        Street {{ delivery.DeliveryManAddress ? delivery.DeliveryManAddress.Street : '' }},
        Building {{ delivery.DeliveryManAddress ? delivery.DeliveryManAddress.Building : '' }},
        Appartment {{ delivery.DeliveryManAddress ? delivery.DeliveryManAddress.Appartment : '' }}</li>
      <li class="list-group-item">Delivery Man Id {{ delivery.DeliveryManNationalId }}</li>
      <li class="list-group-item">What's Up Number {{ delivery.DeliveryManPhone }}</li>
      <li class="list-group-item">Vehicle: Number {{ delivery.VehicaleNumber }} Chars {{ delivery.VehicaleChars }}</li>
    </ul>
    <div class="card-body">
      <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
      <router-link :to="{ name: 'EditDelivery', query: { id: delivery._id }}">
      <button type="button" class="btn btn-primary">
          Edit
      </button>
    </router-link>
    </div>
  </div>
  <!-- {{  delivery }} -->
  

</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const id = route.query.id;
    const delivery = computed(  () =>  { return store.state.deliveries})
    onMounted( () =>   store.dispatch("getOneDelivery", id))
  
  

    const handleDelete = () => {
      store.dispatch("deleteDelivery", id);
      router.push('/alldelivery');
    };

    return {
      delivery,
      handleDelete
    };
  }
}
</script>

<style>
.card {
  width: 18rem;
}
</style>
