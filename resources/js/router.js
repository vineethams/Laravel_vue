import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstpage from './components/pages/myvuepage.vue'
import newRoutePage from './components/pages/newRoutePage'

import home from './components/pages/home'
import tags from './admin/pages/tags'
import category from './admin/pages/category'

import usecom from './vuex/usecom'
//project routes
const routes =[
    {
        path:'/testvuex',
        component:usecom,
    },
    {
        path:'/',
        component:home,
    },
    {
        path:'/tags',
        component:tags,
    },
    {
        path:'/category',
        component:category,
    },
    






    {
    path:'/my-new-vue-route',
    component:firstpage
},
{
    path:'/new-route',
    component:newRoutePage
}
]
export default new Router({
    mode:"history",
routes
})