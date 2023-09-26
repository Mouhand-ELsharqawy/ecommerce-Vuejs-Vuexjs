<template>
    <form @submit.prevent="handleSubmit">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Customer Phone </label>
        <input type="text" v-model="phone" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Date </label>
        <input type="text" v-model="date" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> First Name </label>
        <input type="text" v-model="firstname" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Middle Name </label>
        <input type="text" v-model="middlename" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Last Name </label>
        <input type="text" v-model="lastname" class="form-control">
        
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
        <label for="exampleInputPassword1" class="form-label"> Building </label>
        <input type="text" v-model="building" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Appartment </label>
        <input type="text" v-model="appartment" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> National ID</label>
        <input type="text" v-model="national" min="14" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Delivery Phone </label>
        <input type="text" v-model="deliveryphone" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> What's Up</label>
        <input type="text" v-model="whatsup" class="form-control">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> Motorcycle Number </label>
        <input type="text" v-model="number" class="form-control">
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Motorcycle Characters</label>
        <input type="text" v-model="chars" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
           const phone = ref("")
            const date = ref("")
            const firstname = ref("")
            const middlename = ref("")
            const lastname = ref("")
            const square = ref("")
            const street = ref("")
            const building = ref("")
            const appartment = ref("")
            const national = ref("")
            const deliveryphone = ref("")
            const whatsup = ref("")
            const number = ref("") 
            const chars = ref("")
        
        
        const handleSubmit =() => {
            const deliveryData = {
                phone: phone.value,
                date: date.value,
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                square: square.value,
                street: street.value,
                building: building.value,
                appartment: appartment.value,
                national: national.value,
                deliveryphone: deliveryphone.value,
                whatsup: whatsup.value,
                number: number.value,
                chars: chars.value
        }
                store.dispatch("addDelivery",deliveryData)
            // phone.value = ""
            // date.value = ""
            // firstname.value = ""
            // middlename.value = ""
            // lastname.value = ""
            // square.value = ""
            // street.value = ""
            // building.value = ""
            // appartment.value = ""
            // national.value = ""
            // deliveryphone.value = ""
            // whatsup.value = ""
            // number.value = ""
            // chars.value = ""
            router.push('/alldelivery')
        }

        return {
            handleSubmit,
            phone, date,firstname,middlename,lastname, square, street, building, appartment, national, deliveryphone
            ,whatsup , number, chars
        }
    }
}
</script>

<style>

</style>