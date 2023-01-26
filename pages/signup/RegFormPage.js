const regFormPage = {
	template:
	`<div>
		<p>Create a password to start your membership</p>
		<p>Just a few more steps and you're finished!.</p><br>
		<p>We hate paperwork, too.
		<form @submit.prevent="submitForm" class="text-black">
			<input type="email" v-model="email">
			<input type="password" id="password" min="6" v-model.trim="password">
			"checkbox-do not email"
			<base-button external>Next</base-button>
		</form>
	</div>`,
	data: function() {
	  return {
	    email: '', 
	    password: '', 
	    isFormValid: true
	  }
	}, 
	created() {
			this.email = this.$store.getters['auth/email'];
	}, 
	methods: {
		submitForm: async function() {
			this.isFormValid = true;
			if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
				this.isFormValid = false;
				return;
			}
			const actionPayload = {
				email: this.email, 
				password: this.password
			}
			try {
				this.$store.dispatch('auth/holdPassword', actionPayload);
				this.$router.push('/signup');
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
		}
	}
}