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
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
  
  setup(){
      const store =useStore();
      const router = useRouter();
      const route = useRoute();

      const name = ref(" ")
      const type = ref(" ")
      const serialnumber = ref(" ")
      const description= ref(" ")
      const price =  ref(null)
      const quantity = ref(null)
      const expiredate = ref(" ")
      const comingdate = ref(" ")
      
      const id = route.query.id

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
          const data = {
            id: id,
            data: categoryData
          }
          console.log(data)
           store.dispatch("EditCategory",data)


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