const loginPage = {
	template:
	`<div>
		<p>This is a Login page.</p>
		<p v-if="isLoading">Authenticating...</p>
		{{ error }} 
		<form @submit.prevent="logIn" class="text-black">
		  <input type="email" id="email" v-model="email">
			<input type="password" id="password" v-model.trim="password">
			<base-button external>Sign In</base-button>
		</form>
	</div>`,
	data: function() {
	  return {
	    email: '', 
	    password: '', 
	    isLoading: false, 
	    error: null
	  }
	}, 
	methods: {
    logIn: async function() {
      this.isLoading = true;
      
      const actionPayload = {
        email: this.email, 
        password: this.password
      }
  	try {
				await this.$store.dispatch('auth/logIn', actionPayload);
				const redirectUrl = '/user';
				this.$router.replace(redirectUrl);
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
			this.isLoading = false;
	  } 
	} 
}