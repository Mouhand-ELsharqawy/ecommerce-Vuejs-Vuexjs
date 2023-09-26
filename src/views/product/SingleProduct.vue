<template>
  <div class="card" v-if="product">
  <!-- <img src="https://placehold.co/600x400" class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">Category Name {{ product.CategoryId ? product.CategoryId.Name : '' }}</h5>
    <h5 class="card-title"> Category Type {{ product.CategoryId ? product.CategoryId.Type : '' }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Product Name {{ product.ProductName }}</li>
    <li class="list-group-item">Price {{ product.Price }}</li>
    <li class="list-group-item">Quantity {{ product.Quantity }}</li>
    <li class="list-group-item">Serial Number {{ product.SerialNumber }}</li>
    <li class="list-group-item">Expire Date {{ product.ExpireDate }}</li>
    <li class="list-group-item">Company Name {{ product.CompanyName }}</li>
    <li class="list-group-item">Company Phone {{ product.CompanyPhone }}</li>
    <li class="list-group-item">Company Email {{ product.CompanyEmail }}</li>
    <li class="list-group-item">Company Address:
       Square {{ product.CompanyAddress ? product.CompanyAddress.Square : '' }}, 
        Street {{ product.CompanyAddress ? product.CompanyAddress.Street : '' }}, 
        Building {{ product.CompanyAddress ? product.CompanyAddress.Building : '' }}
        , Floor {{ product.CompanyAddress ? product.CompanyAddress.floor : '' }}</li>
    <li class="list-group-item">Description {{ product.Description }}</li>
  </ul>
  <div class="card-body">
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
    <router-link :to="{name: 'EditProduct', query: { id: product._id }}">
      <button type="button" class="btn btn-primary"> 
              Edit  
      </button>
    </router-link>
  </div>
</div>
</template>

<script>
import { computed, onMounted, toRef } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const id = route.query.id
        const product = computed(() => { return store.state.products })

        onMounted(() => store.dispatch("getOneProduct",id))
        const handleDelete = () => {
            store.dispatch("deleteProduct",id)
            router.push('/allproduct')
        }
        return {
            product,
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