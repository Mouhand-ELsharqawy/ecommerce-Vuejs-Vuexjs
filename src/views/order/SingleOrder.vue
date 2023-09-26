<template>
  <div class="card" v-if="order">
  <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Customer First Name 
      {{ order.CustomerId ? order.CustomerId.Name.FirstName : '' }}</h5>
    <h5 class="card-title"> Customer Last Name 
      {{ order.CustomerId ? order.CustomerId.Name.LastName : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Price {{ order.TotalPrice }}</li>
    <li class="list-group-item">Quantity {{ order.Quantity }}</li>
    <li class="list-group-item">Recipe Date  {{ order.RecipeDate }}</li>
  </ul>
  <div class="card-body">
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
    <router-link :to="{ name: 'EditOrder', query: { id: order._id } }"> 
      <button type="button" class="btn btn-primary"> 
              Edit 
      </button>
    </router-link> 
  </div>
</div>
</template>

<script>
import { computed, onMounted, toRef } from 'vue'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        
        const store = useStore();
        const router = useRouter();
        const route = useRoute()
        const id = route.query.id
        const order = computed(() => { return store.state.orders })
        onMounted(() => store.dispatch("getOneOrder",id))
        const handleDelete = () =>{
            store.dispatch("deleteOrder",id)
            router.push('/allorder')
        }

        return {
            order,
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