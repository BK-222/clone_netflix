Vue.component('get-started', {
	template:
	'<div>\
		<form>\
		<p class="text-lg text-center">Ready to watch? Enter your email to create or restart your membership.</p>\
		<div class="flex justify-center mt-5">\
			<input class="w-96 h-14 pl-2 text-black" type="email" placeholder="Email address" v-model="name" min="9">\
			<base-button to="/signup/registration" class="px-5 py-3 ml-px rounded-r-sm rounded-l-none text-2xl" type="submit">Get Started</base-button>\
		</div>\
		</form>\
	</div>'
});