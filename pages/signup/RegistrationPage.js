const registrationPage = {
	template:
	`<div>
		<p>Finish setting up your account</p>
		<p>Netflix is personalised for you.</p><br>
		<p>Create a password to watch on any device at any time.
		<base-button external>Next</base-button>
		<p>{{ hasEmail }}</p>
	</div>`,
	computed: {
		hasEmail: function() {
			return this.$store.getters['auth/email'];
		}
}