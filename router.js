const router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', component: mainPage },
		{ path: '/login', component: loginPage },
		{ path: '/signup/registration', component: registrationPage },
		{ path: '/signup/regform', component: regFormPage },
		{ path: '/signup', component: choosePlanPage }, 
    { path: '/signup/planform', component: planFormPage},
    { path: '/user', component: userPage, meta: { requiresAuth: true } }, 
		{ path: '/:notFound(.*)', component: notFound }
	]
});
