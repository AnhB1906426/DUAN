import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue";
import Update from "../views/Update.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/add-post",
        name: "add-post",
        component: AddPost,
    },
    {
        path: "/post/:id",
        name: "post",
        component: Post,
    },
    {
        path: "/update-post/:id",
        name: "update-post",
        component: Update,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router