const loginPage = {
	template:
	`<div>
		<p>This is a Login page.</p>
		<form @submit.prevent="logIn" class="text-black">
		  <input type="email" v-model="email">
			<input type="password" id="password" min="6" v-model.trim="password">
			<base-button external>Sign In</base-button>
		</form>
	</div>`,
	data: function() {
	  return {
	    email: '', 
	    password: ''
	  }
	}, 
	methods: {
    logIn: async function() {
      const actionPayload = {
        email: this.email, 
        password: this.password
      }
  	try {
				await this.$store.dispatch('auth/logIn', actionPayload);
				this.$router.replace('/user');
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
	  } 
	} 
}