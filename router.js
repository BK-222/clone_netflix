const router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', component: 'mainPage' },
		{ path: '/login', component: 'loginPage' }
	]
});