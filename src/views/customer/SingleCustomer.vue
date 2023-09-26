<template>

  <div class="card" v-if="customer">
  <div class="card-body" >
    <h5 class="card-title">Customer First Name {{  customer.Name ? customer.Name.FirstName : ''  }}</h5>
    <h5 class="card-title"> Customer Middle Name {{ customer.Name ? customer.Name.MiddleName : '' }}</h5>
    <h5 class="card-title"> Customer Last Name {{ customer.Name ? customer.Name.LastName : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"
    >Address: Square {{ customer.Address ? customer.Address.Square : '' }}, 
      Street {{ customer.Address ? customer.Address.Street : '' }},
         Villa {{ customer.Address ? customer.Address.Villa : '' }}, 
         Building {{ customer.Address ? customer.Address.Building : '' }}, 
         Appartment {{ customer.Address ? customer.Address.Appartment : '' }}</li>
    <li class="list-group-item">Phone Number {{ customer.PhoneNumber }}</li>
    <li class="list-group-item">Telephone Number {{ customer.Telephone }}</li>
    <li class="list-group-item">What's Up Number {{ customer.WhatsUp }}</li>
  </ul>
  <div class="card-body">
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
        <router-link :to="{name: 'EditCustomer', query: { id: customer._id }}">
          <button type="button" class="btn btn-primary">
              Edit
            </button>
          </router-link>

  </div>
</div>

</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute()

        const id = route.query.id

        const customer =  computed(() => { 
          return store.state.customers
        }) 
    
        onMounted(()=> store.dispatch("getOneCustomer",id))
      
        const handleDelete = () => {
            store.dispatch("deleteCustomer",id)
            router.push('/allcustomer')
        }
        return {
            customer,
            handleDelete
        }
    }
}
</script>

<style>
.card{
    width: 18rem;
}
</style>