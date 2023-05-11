Vue.component('get-started', {
	template:
	`<div>
		<form @submit.prevent="submitForm">
		<p class="text-base lg:text-lg text-center">Ready to watch? Enter your email to create or restart your membership.</p>
		<div class="flex flex-col lg:flex-row items-center lg:justify-center mt-5">
			<input class="w-80 lg:w-96 h-11 lg:h-14 pl-2 text-sm text-black" type="email" placeholder="Email address" v-model.trim="email" min="5">
			<base-button external class="w-46 px-6 py-2 lg:py-3 mt-3.5 lg:mt-0 lg:ml-px rounded-l-none rounded-r-none lg:rounded-r-sm lg:rounded-l-none text-base lg:text-2xl" type="submit">Get Started</base-button>
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
				return;
			}
			const actionPayload = {
				email: this.email
			}
			try {
				this.$store.dispatch('auth/holdEmail', actionPayload);
				this.$router.push('/signup/registration');
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
		}
	}
});
