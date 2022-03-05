import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'
import admin from '../views/admin/admin.vue'
import products from '../views/admin/products.vue'
import createProduct from '../views/admin/createProduct.vue'
import editProduct from '../views/admin/editProduct.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'products',
        component: products,
        name:'products',

      },
      {
        path: 'products/create',
        component: createProduct,
        name:'createProduct',

      },
      {
        path: 'products/:id/edit',
        component: editProduct,
        name:'editProduct',
        props:true
      },
      
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
