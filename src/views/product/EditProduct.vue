<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Category </label>
            <input type="text" v-model="category" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Product Name</label>
            <input type="text" v-model="productname" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Description</label>
            <input type="text" v-model="description" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Price </label>
            <input type="number" v-model="price" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Quantity </label>
            <input type="number" v-model="quantity" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Serial Number </label>
            <input type="text" v-model="number" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Expire Date</label>
            <input type="date" v-model="expiredate" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Company Name</label>
            <input type="text" v-model="companyname" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Company Email </label>
            <input type="text" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Company Phone</label>
            <input type="text" v-model="phone" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Square  </label>
            <input type="text" v-model="square" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Street</label>
            <input type="text" v-model="street" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Building</label>
            <input type="text" v-model="building" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Floor </label>
            <input type="text" v-model="floor" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Reciving Date</label>
            <input type="date" v-model="recivingdate" class="form-control">
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
            const productname = ref("")
            const description = ref("")
            const price = ref(0)
            const quantity = ref(0)
            const number = ref("")
            const expiredate = ref("") 
            const companyname = ref("")
            const email = ref("")
            const phone = ref("")
            const square = ref("")
            const street = ref("")
            const building = ref("")
            const floor = ref("")
            const recivingdate = ref("")
        const id  = route.query.id
        const handleSubmit = () => {
            const productData = {
            category: category.value,
            productname: productname.value,
            description: description.value,
            price: price.value,
            quantity: quantity.value,
            number: number.value,
            expiredate: expiredate.value,
            companyname: companyname.value,
            email: email.value,
            phone: phone.value,
            square: square.value,
            street: street.value,
            building: building.value,
            floor: floor.value,
            recivingdate: recivingdate.value
        }
        const data = {
            id: id,
            data: productData
        }
            store.dispatch("EditProduct",data)

            router.push('/allproduct')
        }

        return {
            handleSubmit,
            category, productname, description, price,quantity, number, expiredate, companyname,
            email, phone, square, street, building, floor, recivingdate
        }
    }
}
</script>

<style>

</style>