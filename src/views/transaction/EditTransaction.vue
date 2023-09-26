<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Customer Phone Number </label>
            <input type="text" v-model="phone" class="form-control">
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Product Name </label>
            <input type="text" v-model="productname" class="form-control">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import { ref, toRef } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(props){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        
        const phone = ref("")
        const productname = ref("")
        const id = route.query.id

        const handleSubmit = () => {

        const transactionData = {
            phone: phone.value,
            productname: productname.value
        }
        const data = {
            id: id,
            data: transactionData
        }
            store.dispatch("EditTransaction",data)

            router.push('/allreport')
        }

        return {
            handleSubmit,
            phone,productname
        }
    }
}
</script>

<style>

</style>