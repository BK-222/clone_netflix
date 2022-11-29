Vue.component('value-section', {
	template:
	'<div class="flex justify-around items-center">\
		<div class="flex flex-col w-2/5">\
		 	<p class="text-5xl font-semibold">{{ heading }}</p>\
		 	<p class="text-2xl">{{ subheading }}</p>\
		</div>\
		<img class="w-2/5" :src="img"></img>\
	</div>',
	props: {
		heading: { type: String, required: true },
		subheading: { type: String, required: true },
		img: { type: String, required: true }
	}
});