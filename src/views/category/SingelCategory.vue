<template>
<div class="card" v-if="category">
  <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Category Title {{ category.Name }}</h5>
    <p class="card-text"> Description {{ category.Description }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Type {{ category.Type }}</li>
    <li class="list-group-item">Serial Number {{ category.SerialNumber }}</li>
    <li class="list-group-item">Price {{ category.Price }}</li>
    <li class="list-group-item">Quantity {{ category.Quantity }}</li>
    <li class="list-group-item">Serial Number {{ category.ExpireDate }}</li>
    <li class="list-group-item">Reciving Date {{ category.ComingDate }}</li>
  </ul>
  <div class="card-body">
    <!-- <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> -->
    <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
     <router-link :to="{name: 'EditCategory',query: {id: category._id}}"><button type="button" class="btn btn-primary">Edit</button></router-link>
  </div>
</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const  id = route.query.id
        
        // const id2 = toRef(props,'id')
        // console.log(id)
        const category = computed(() => { 
            return store.state.categories
        })

        onMounted(() => store.dispatch("getOneCategory",id))

        const handleDelete = () => {
            store.dispatch("deleteCategory",id)
            router.push('/allcategory')
        }

        return {
            category,
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