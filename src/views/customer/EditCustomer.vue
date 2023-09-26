<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">First Name</label>
          <input type="text" v-model="firstname" class="form-control">
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Middle Name</label>
          <input type="text" v-model="middlename" class="form-control" >
      </div>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Last Name</label>
          <input type="text" v-model="lastname" class="form-control">
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"> Square</label>
          <input type="text" v-model="square" class="form-control" >
      </div>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Street</label>
          <input type="text" v-model="street" class="form-control">
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"> Villa</label>
          <input type="text" v-model="villa" class="form-control">
      </div>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Building</label>
          <input type="text" v-model="building" class="form-control">
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Appartment</label>
          <input type="text" v-model="appartment" class="form-control">
      </div>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"> Phone </label>
          <input type="text" v-model="phone" class="form-control">
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Telephone</label>
          <input type="text" v-model="telephone" class="form-control">
      </div>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"> What's Up </label>
          <input type="text" v-model="whatsup" class="form-control">
          
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
          const store =useStore();
          const router = useRouter();
          const route = useRoute();
              const firstname = ref("")
              const middlename = ref("")
              const lastname = ref("")
              const square = ref("")
              const street = ref("")
              const villa = ref("")
              const building = ref("")
              const appartment = ref("")
              const phone = ref("")
              const telephone = ref("")
              const whatsup = ref("")
          
        const id = route.query.id
          const handleSubmit = () =>{
  
              const customerData = {
  
              firstname: firstname.value,
              middlename: middlename.value,
              lastname: lastname.value,
              square: square.value,
              street: street.value,
              villa: villa.value,
              building: building.value,
              appartment: appartment.value,
              phone: phone.value,
              telephone: telephone.value,
              whatsup: whatsup.value
                  }
              const data = {
                id: id,
                data: customerData
              }
              store.dispatch("EditCustomer",data)
              
            router.push('/allcustomer')
          }
          return {
              handleSubmit,
              firstname, middlename, lastname, square, street, villa, building, appartment, phone, telephone, whatsup
          }
      }
  }
  </script>

<style>

</style>