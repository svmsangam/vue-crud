<template>
    <div class="sidebar">
        <ul class="side-menu">
            <li><router-link :to="{ name: 'products'}">Products</router-link></li>
            <li><router-link :to="{ name: 'createProduct'}">Add Product</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sidebar'
}
</script>

<style>

</style>