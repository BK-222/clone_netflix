Vue.component('base-button', {
	template:
	'<router-link :to=to\
	 class="inline-block border-solid rounded border-red-600 bg-red-600 font-semibold text-white list-none">\
		<slot></slot>\
	</router-link>',
	props: {
		to: { type: String, required: false, default: null }
	}
});