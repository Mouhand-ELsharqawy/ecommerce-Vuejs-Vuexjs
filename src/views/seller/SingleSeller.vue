<template>
   <div class="card" v-if="seller">
  <!-- <img src="https://placehold.co/600x400" class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">Supplier First Name {{ seller.SupplierName ? seller.SupplierName.FirstName : '' }}</h5>
    <h5 class="card-title">Supplier Middle Name {{ seller.SupplierName ? seller.SupplierName.MiddleName : '' }}</h5>
    <h5 class="card-title">Supplier Last Name {{ seller.SupplierName ? seller.SupplierName.LastName : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Supplier Phone {{ seller.SupplierPhone }}</li>
    <li class="list-group-item">Supplier What's Up {{ seller.SupplierWhatsUp }}</li>
    <li class="list-group-item">Supplier Email {{ seller.SupplierEmail }}</li>
    <li class="list-group-item">Supplier Facebook {{ seller.SupplierFacebook }}</li>
    <li class="list-group-item">Supplier Address: 
      Square  {{ seller.SupplierAddress ? seller.SupplierAddress.Square : '' }},
    Street {{ seller.SupplierAddress ? seller.SupplierAddress.Street : '' }}, 
    Villa {{ seller.SupplierAddress ? seller.SupplierAddress.Villa : '' }},
    Building {{ seller.SupplierAddress ? seller.SupplierAddress.Building : '' }}, 
    Appartment {{ seller.SupplierAddress ? seller.SupplierAddress.Appartment : '' }}</li>
  </ul>
  <div class="card-body">
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
    <router-link :to="{ name: 'EditSeller', query : { id: seller._id }}">
    <button type="button" class="btn btn-primary"> 
            Edit 
    </button>
  </router-link> 
  </div>
</div>
</template>

<script>
import { computed, onMounted, toRef } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const id = route.query.id

        const seller = computed(() => { return store.state.sellers }) 
        onMounted(() => store.dispatch("getOneSeller",id))
        const handleDelete = () => {
            store.dispatch("deleteSeller",id)
            router.push('/allseller')
        }
        return {
            seller,
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