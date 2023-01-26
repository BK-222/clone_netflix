const router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', component: mainPage },
		{ path: '/login', component: notFound },
		{ path: '/signup/registration', component: registrationPage },
		{ path: '/signup/regform', component: regFormPage },
		{ path: '/signup', component: choosePlanPage }, 
    { path: '/signup/planform', component: planFormPage} 
		// { path: '/:notFound(.*)', component: notFound }
	]
});
