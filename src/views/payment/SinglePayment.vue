<template>
  <div class="card" v-if="payment">
  <!-- <img src="https://placehold.co/600x400" class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">Category Name {{ payment.CategoryId ? payment.CategoryId.Name : '' }}</h5>
    <h5 class="card-title"> Category Type {{ payment.CategoryId ? payment.CategoryId.Type : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Quantity {{ payment.Quantity }}</li>
    <li class="list-group-item">Price {{ payment.TotalPrice }}</li>
    <li class="list-group-item">Discount {{ payment.discount }}</li>
    <li class="list-group-item">Payed To {{ payment.ToWho }}</li>
    <li class="list-group-item">Contact Number {{ payment.ContactNumber }}</li>
    <li class="list-group-item">Bank Account {{ payment.BankAccount }}</li>
    <li class="list-group-item">Payment Date {{ payment.PaymentDate }}</li>
  </ul>
  <div class="card-body">
    
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
    <router-link :to="{ name: 'EditPayment', query: {id: payment._id} }"> 
    <button type="button" class="btn btn-primary"> 
            Edit   
    </button>
  </router-link> 
  </div>
</div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const id = route.query.id
        const payment = computed(() => { return store.state.payments })
        onMounted(() => store.dispatch("getOnePayment",id))
        const handleDelete = () => {
            store.dispatch("deletePayment",id)
            router.push('/allpayment')
        }
        return {
            payment,
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