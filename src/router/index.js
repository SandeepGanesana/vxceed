import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from '../views/home';
import Login from '../views/login'
import postDetail from '../views/post-detail'
// import Register from "../views/Register";
// import Posts from "../views/Posts";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: "/post/:postId",
        name: "Home",
        component: postDetail,
        meta: { requiresAuth: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { guest: true },
    },
    {
        path: '*',
        component: Login
    }
    //   {
    //     path: "/posts",
    //     name: "Posts",
    //     component: Posts,
    //     meta: { requiresAuth: true },
    //   },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/home");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router;