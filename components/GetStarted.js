Vue.component('get-started', {
	template:
	`<div>\
		<form @submit.prevent="submitForm">
		<p class="text-lg text-center">Ready to watch? Enter your email to create or restart your membership.</p>
		<div class="flex justify-center mt-5">
			<input class="w-96 h-14 pl-2 text-black" type="email" placeholder="Email address" v-model.trim="email" min="5">
			<base-button external class="px-5 py-3 ml-px rounded-r-sm rounded-l-none text-2xl" type="submit">Get Started</base-button>
		</div>
		</form>
	</div>`,
	data: function() {
		return {
			email: '',
			isFormValid: true
		}
	},
	methods: {
		submitForm: async function() {
			this.isFormValid = true;
			if (this.email === '' || !this.email.includes('@')) {
				this.isFormValid = false;
				console.log('one');
				return;
			}
			const actionPayload = {
				email: this.email
			}
			console.log('two', actionPayload.email);
			try {
				this.$store.dispatch('signUp', actionPayload);
				this.$router.push('/signup/registration');
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
		}
	}
});