const c1 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/src/pages/Social.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/src/pages/Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/rh_flower/Desktop/rh-blog-backend/src/pages/Index.vue")

export default [
  {
    path: "/social/",
    component: c1
  },
  {
    path: "/project/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
