<template>
  <div class="card" v-if="transaction">
  <!-- <img src="https://placehold.co/600x400" class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">Customer Name 
      {{ transaction.CustomerId ? transaction.CustomerId.Name.FirstName : '' }} 
      {{ transaction.CustomerId ? transaction.CustomerId.Name.LastName : ''}}</h5>
    <h5 class="card-title">Customer Phone 
      {{ transaction.CustomerId ? transaction.CustomerId.PhoneNumber : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Order Price 
      {{ transaction.OrderId ? transaction.OrderId.TotalPrice : '' }}</li>
    <li class="list-group-item">Order Quantity 
      {{ transaction.OrderId ? transaction.OrderId.Quantity : '' }}</li>
    <li class="list-group-item">Recipe Date 
      {{ transaction.OrderId ? transaction.OrderId.RecipeDate : '' }}</li>
    <li class="list-group-item">Product Name 
      {{ transaction.ProductId ? transaction.ProductId.ProductName : '' }}</li>
    <li class="list-group-item">Company Name 
      {{ transaction.ProductId ? transaction.ProductId.CompanyName : '' }}</li>
    <li class="list-group-item">Payed 
      {{ transaction.PaymentId ? transaction.PaymentId.TotalPrice : ''}}</li>
    <li class="list-group-item">Discount 
      {{ transaction.PaymentId ? transaction.PaymentId.discount : '' }}</li>
    <li class="list-group-item">Delivery Date 
      {{ transaction.DeliveryId ? transaction.DeliveryId.DeliveryDate : '' }}</li>
    <li class="list-group-item">DeliveryMan Name 
      {{ transaction.DeliveryId ? transaction.DeliveryId.DeliveryManName.FirstName : '' }} 
      {{ transaction.DeliveryId ? transaction.DeliveryId.DeliveryManName.LastName : '' }}</li>
  </ul>
  <div class="card-body">
    
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
    <router-link :to="{name: 'EditTransaction', query: { id: transaction._id }}">
    <button type="button" class="btn btn-primary"> 
            Edit
    </button>
  </router-link> 
  </div>
</div>
</template>

<script>
import { computed, onMounted, toRef } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(props){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const id = route.query.id
        const transaction = computed(() => store.state.transactions)
        onMounted(() => store.dispatch("getOneTransaction",id))
        const handleDelete = () => {
            store.dispatch("deleteTransaction",id)
            router.push('/allreport')
        }
        return {
            transaction,
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