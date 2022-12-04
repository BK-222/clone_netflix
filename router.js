const router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', component: mainPage },
		{ path: '/login', component: notFound },
		{ path: '/signup/registration', component: notFound }
	]
});