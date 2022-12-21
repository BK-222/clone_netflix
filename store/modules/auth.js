const authModule = {
	namespaced: true,
	state: function() {
		return {
			email: ''
		}
	},
	mutations: {
		holdEmail: function(state, payload) {
			this.email = payload.email;
		}
	},
	actions: {
		signUp: function(context, data) {
			context.commit('holdEmail', { email: data.email })
		}
	},
	getters: {
		email: function(state) {
			return state.email;
		}
	}
}