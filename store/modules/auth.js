const authModule = {
	namespaced: true,
	state: function() {
		return {
			email: null, 
			password: null, 
			userId: null, 
			token: null
		}
	},
	mutations: {
		setEmail: function(state, payload) {
			state.email = payload.email;
		}, 
		setPassword: function(state, payload) {
		  state.email = payload.user.email;
		  state.password = payload.user.password;
		}, 
		setUser: function(state, payload) {
		  state.userId = payload.userId;
		  state.token = payload.token;
		  state.email = payload.email;
		}
	},
	actions: {
		holdEmail: function(context, data) {
			context.commit('setEmail', { email: data.email })
		}, 
		holdPassword: function(context, data) {
		  context.commit('setPassword', { user: data })
		}, 
		signUp: async function(context, data) {
		  return context.dispatch('auth', Object.assign({ mode: 'signUp' }, data) );
		},
		logIn: async function(context, data) {
		  return context.dispatch('auth', Object.assign({ mode: 'logIn' }, data) );
		}, 
		auth: async function(context, data) {
		  const mode = data.mode;
		  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcGFliNNsPkJpEYfw9xEKVhEGnh5I3vTg';
		  if (mode === 'signUp') {
		    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcGFliNNsPkJpEYfw9xEKVhEGnh5I3vTg';
		  }
		  const response = await fetch(url, {
		    method: 'POST', 
		    body: JSON.stringify({
		      email: data.email, 
		      password: data.password, 
		      returnSecureToken: true
		    })
		  });
		  const responseData = await response.json();
		  if (!response.ok) {
		    const error = new Error(responseData.message || 'Failed to authenticate');
		    throw error;
		  }
		  console.log(responseData);
		  context.commit('setUser', {
		    token: responseData.idToken,
		    userId: responseData.localId, 
		    email: responseData.email
		  });
		}, 
		logOut: function(context) {
		  context.commit('setUser', {
		    token: null, 
		    userId: null
		  })
		}
	},
	getters: {
		email: function(state) {
			return state.email;
		}, 
		password: function(state) {
		  return state.password
		}, 
		token: function(state) {
		  return state.token;
		}, 
		isAuthenticated: function(state) {
		  return !!state.token;
		}
	}
}
