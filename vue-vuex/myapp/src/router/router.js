
import Vue from 'vue'
import Router from 'vue-router'
import Ex from '../components/ex.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {path: '/',component: Ex,name: 'ex'}
    ]
});

export default router;