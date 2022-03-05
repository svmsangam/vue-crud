<template>
<Nav/>
    <div class="wrapper">
        <div class="left-content">
                <Sidebar/>
        </div>
        <div class="right-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Nav from '@/components/nav.vue'
export default {
    name:'admin',
    components : {Nav, Sidebar}
}
</script>

<style>

</style>