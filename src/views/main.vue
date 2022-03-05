<template>
    <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Image</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.title}}</td>
                    <td><img :src="product.image" :alt="product.title" width="90"></td>
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


        return {products,}
    }
}
</script>

<style>

</style>