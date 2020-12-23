import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const Bar = { template: '<div></div>' }

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/blank',
		component: Bar,
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
