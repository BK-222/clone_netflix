Vue.component('base-button', {
	template:
	'<router-link :to=to\
	 class="inline-block border-solid bg-red-600 text-white">\
		<slot></slot>\
	</router-link>',
	props: {
		to: { type: String, required: false, default: null }
	}
});