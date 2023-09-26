<template>
    <form @submit.prevent="handleSubmit">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Customer Phone </label>
        <input type="text" v-model="phone" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Product Name </label>
        <input type="text" v-model="productname" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Quantity </label>
        <input type="number" v-model="quantity" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Price </label>
        <input type="number" v-model="price" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> recipe Date</label>
        <input type="text" v-model="recipedate" class="form-control">
        
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();

        const phone = ref("")
        const productname = ref("")
        const quantity = ref(null)
        const price = ref(null)
        const recipedate = ref("")
        

        const handleSubmit = () =>{
            const orderdata = {
                phone: phone.value,
                productname: productname.value,
                quantity: quantity.value,
                price: price.value,
                recipedate: recipedate.value
            }
                store.dispatch("addOrder",orderdata)
            // phone.value = ""
            // productname.value = ""
            // quantity.value = null
            // price.value = null
            // recipedate.value = ""
            router.push('/allorder')
        }
        return {
            handleSubmit,
            phone, productname, quantity, price, recipedate
        }
    }
}
</script>

<style>

</style>