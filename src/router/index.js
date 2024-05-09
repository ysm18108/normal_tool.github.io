import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    //一级路由
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;