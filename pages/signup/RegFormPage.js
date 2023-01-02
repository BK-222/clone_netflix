const regFormPage = {
	template:
	`<div>
		<p>Create a password to start your membership</p>
		<p>Just a few more steps and you're finished!.</p><br>
		<p>We hate paperwork, too.
		<form class="text-black">
			<input type="email" v-model="hasEmail">
			<input type="password">
		</form>
		<base-button external>Next</base-button>
	</div>`,
	computed: {
		hasEmail: function() {
		  console.log(this.$store.getters['auth/email'])
			return this.$store.getters['auth/email'];
		}
	} 
}