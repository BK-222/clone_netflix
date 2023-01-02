const registrationPage = {
	template:
	`<div>
		<p>Finish setting up your account</p>
		<p>Netflix is personalised for you.</p><br>
		<p>Create a password to watch on any device at any time.
		<base-button to="/signup/regform">Next</base-button>
		<p>Code:{{ hasEmail }}</p>
	</div>`,
	computed: {
		hasEmail: function() {
		  console.log(this.$store.getters['auth/email'])
			return this.$store.getters['auth/email'];
		}
	} 
}
