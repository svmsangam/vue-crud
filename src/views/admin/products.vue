<template>
<router-link class="btn" :to="{ name: 'createProduct'}">Add Product</router-link>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Image</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.title}}</td>
                <td><img :src="product.image" :alt="product.title" width="90"></td>
                <td>
                    <router-link class="btn" :to="{ name: 'editProduct' ,params:{id: product.id}}">Edit</router-link>
                    <button class="btn btn-del" @click="dlt(product.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    name:'products',
    setup(){
        const products = ref([]);
        onMounted(async()=>{
            const res = await fetch('http://localhost:3000/products');
            products.value = await res.json();
        })

        const  dlt = async(id) =>{
                await fetch(`http://localhost:3000/products/${id}`,{
                    method: 'DELETE'
                })

            products.value = products.value.filter(p=>p.id!==id) 
        } 

        return {products, dlt}
    }
}
</script>

<style>

</style>