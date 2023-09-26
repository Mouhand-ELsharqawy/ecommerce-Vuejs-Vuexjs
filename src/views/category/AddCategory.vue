<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Name </label>
                <input type="text" v-model="name" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Type </label>
                <input type="text" v-model="type" class="form-control">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Serial Number </label>
                <input type="text" v-model="serialnumber" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Description</label>
                <input type="text" v-model="description" class="form-control">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Price </label>
                <input type="number" v-model="price" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Quantity </label>
                <input type="number" v-model="quantity" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Expire Data</label>
                <input type="text" v-model="expiredate" class="form-control">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Comming Date </label>
                <input type="text" v-model="comingdate" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
    
    setup(){
        const store =useStore();
        const router = useRouter();

        const name = ref(" ")
        const type = ref(" ")
        const serialnumber = ref(" ")
        const description= ref(" ")
        const price =  ref(0)
        const quantity = ref(0)
        const expiredate = ref(" ")
        const comingdate = ref(" ")
        

        const handleSubmit = ()=>{

            const categoryData = {
                name: name.value,
                type: type.value,
                serialnumber: serialnumber.value,
                description: description.value,
                price: price.value,
                quantity: price.value,
                expiredate: expiredate.value,
                comingdate: comingdate.value
            }
        
             store.dispatch("addCategory",categoryData)


                // name.value =""
                // type.value=""
                // serialnumber.value = ""
                // description.value = ""
                // price.value = 0
                // quantity.value = 0
                // expiredate.value = ""
                // comingdate.value = ""
                router.push('/allcategory')
        }

        return {
            handleSubmit,
            name, type, serialnumber, description, price, quantity, expiredate, comingdate
        }
    }
}
</script>

<style>

</style>