// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './vue';

new Vue({
	el: '#app',
	// store: vuex,
	router: router,
	components: {
		'mainPage': mainPage,
		'loginPage': loginPage
	}
	//render: h => (App)
})//.$mount.('#app');