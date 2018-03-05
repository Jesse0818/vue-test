import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/Home'
import User from '../pages/user/User'
import Detail from '../pages/detail/Detail'

// const Home = resolve => require(['../pages/home/Home'],resolve)
// const User = resolve => require(['../pages/user/User'],resolve)
//const Detail = resolve => require(['../pages/detail/Detail'],resolve)

Vue.use(Router)


export default new Router({
	routes: [
	{
		path:'/',
		name:'home',
		component:Home
	},
	{
		path:'/user',
		name:'user',
		component:User
	},
	{
		path:'/detail/:cid',
		name:'detail',
		component:Detail
	}
	],
	mode:"history"
})
