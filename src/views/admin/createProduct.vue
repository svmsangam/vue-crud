<template>
     <form @submit.prevent="createProduct()">
         <label>Title</label>
         <input type="text" name="title" v-model="title"/>

         <label>Image</label>
         <input type="text" name="title" v-model="image"/>

         <button>Add Product </button>
     </form>
</template>

<script>
import { ref } from 'vue' 
import {useRouter} from 'vue-router'
export default {
 name:'createProduct',
 setup(){
     const title = ref('');
     const image = ref('') ;
     const router = useRouter();
 
    const createProduct = async()=>{
        await fetch('http://localhost:3000/products',{
            method: 'POST',
            headers :  {"Content-type": "application/json"},
            body: JSON.stringify({
                title: title.value,
                image: image.value
            })
        });
        await router.push('/admin/products');
    }
    return {title,image,createProduct }
 }
}
</script>

<style>

</style>