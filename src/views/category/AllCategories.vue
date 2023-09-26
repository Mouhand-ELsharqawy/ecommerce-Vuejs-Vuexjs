<template>

  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category Name </th>
        <th scope="col">Category Type </th>
        <th scope="col">Serial Number</th>
        <th scope="col">More</th>
      </tr>
    </thead>
    <div v-if="categories.length > 0">
     <tbody v-for="category in categories" :key="category._id">
            <tr >
              <td> {{ category._id }} </td>
              <td> {{ category.Name }} </td>
              <td> {{ category.Type }} </td>
              <td> {{ category.SerialNumber }} </td>
              <td> 
                <router-link :to="{ name: 'SingleCategory', query: { id: category._id }}">
                  Read
                </router-link> 
              </td>
            </tr>
      </tbody>
    </div>
    <div v-else>
      Loading...
    </div>
  </table>

  <!-- {{ categories }} -->
 

</template>

<script>
import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        onMounted(()=> store.dispatch('getAllCategories'));
        
        const categories = computed( () => { 
         return  store.state.categories
         });
        
        return {
            categories
        }
    }
}
</script>

<style>

</style>