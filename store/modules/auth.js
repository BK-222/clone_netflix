const authModule = {
	namespaced: true,
	state: function() {
		return {
			email: null
		}
	},
	mutations: {
		holdEmail: function(state, payload) {
			state.email = payload.email;
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
