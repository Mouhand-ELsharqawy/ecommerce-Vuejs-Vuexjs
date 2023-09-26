<template>
    <form @submit.prevent="handleSubmit">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Category </label>
        <input type="text" v-model="category" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Quantity </label>
        <input type="number" v-model="quantity" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Total Price </label>
        <input type="number" v-model="totalprice" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Discount</label>
        <input type="number" v-model="discount" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Who Pay </label>
        <input type="text" v-model="towho" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Contact </label>
        <input type="text" v-model="contact" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Bank Account </label>
        <input type="text" v-model="bankaccount" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Payment Date </label>
        <input type="text" v-model="payment" class="form-control">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { ref, toRef } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        
            const category = ref("")
            const quantity = ref(0)
            const totalprice = ref(0)
            const discount = ref(0)
            const towho = ref("")
            const contact = ref("")
            const bankaccount = ref("")
            const payment = ref("")
        
        const id = route.query.id
        const handleSubmit = () => {
            const paymentData = {
                category: category.value,
                quantity: quantity.value,
                totalprice: totalprice.value,
                discount: discount.value,
                towho: towho.value,
                contact: contact.value,
                bankaccount: bankaccount.value,
                payment: payment.value
            }
            const data = {
                id: id,
                data: paymentData
            }
                store.dispatch("EditPayment",data)

  
            router.push('/allpayment')
        }

        return {
            handleSubmit,
            category, quantity,totalprice, discount, towho, contact, bankaccount, payment
        }
    }
}
</script>

<style>

</style>