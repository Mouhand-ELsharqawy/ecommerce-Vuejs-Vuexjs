<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Product Name</label>
            <input type="text" v-model="productname" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> FirstName</label>
            <input type="text" v-model="firstname" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> MiddleName </label>
            <input type="text" v-model="middlename" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> LastName </label>
            <input type="text" v-model="lastname" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Phone </label>
            <input type="text" v-model="phone" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> What's Up</label>
            <input type="text" v-model="whatsup" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Square </label>
            <input type="text" v-model="square" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Street </label>
            <input type="text" v-model="street" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Villa </label>
            <input type="text" v-model="villa" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Building </label>
            <input type="text" v-model="building" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Appartment </label>
            <input type="text" v-model="appartment" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Seller Email </label>
            <input type="text" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Seller Facebook </label>
            <input type="text" v-model="facebook" class="form-control">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        
        const productname = ref("")
        const firstname = ref("")
        const middlename = ref("")
        const lastname = ref("") 
        const phone = ref("")
        const whatsup = ref("")
        const square = ref("")
        const street = ref("")
        const villa = ref("")
        const building = ref("")
        const appartment = ref("")
        const email = ref("")
        const facebook = ref("")
        const id = route.query.id
        const handleSubmit = () =>{
            const sellerData = {
            productname: productname.value,
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            phone: phone.value,
            whatsup: whatsup.value,
            square: square.value,
            street: street.value,
            villa: villa.value,
            building: building.value,
            appartment: appartment.value,
            email: email.value,
            facebook: facebook.value
        }
        const data = {
            id: id,
            data: sellerData
        }
            store.dispatch("EditSeller",data)

            router.push('/allseller')
        }

        return {
            handleSubmit,
            productname, firstname, middlename, lastname, phone, whatsup, square, street, villa, building, 
            appartment, email, facebook
        }
    }
}
</script>

<style>

</style>