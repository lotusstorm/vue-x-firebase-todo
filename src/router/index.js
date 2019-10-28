import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '@/views/Edit.vue'
import Items from '@/views/Items.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'items',
		component: Items,
	},
	{
		path: '/:id',
		name: 'edit',
		component: Edit,
	},
	{
		path: '*',
		redirect: { name: 'items' }
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router
