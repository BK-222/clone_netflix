Vue.component('value-section', {
	template:
	'<div>\
		<div class="h-vh4\5 flex justify-around items-center">\
			<div class="flex flex-col w-2/5">\
			 	<p class="text-5xl font-semibold">{{ heading }}</p>\
			 	<p class="mt-8 text-2xl">{{ subheading }}</p>\
			</div>\
			<img class="w-2/5" :src="img"></img>\
		</div>\
		<section-bar></section-bar>\
	</div>',
	props: {
		heading: { type: String, required: true },
		subheading: { type: String, required: true },
		img: { type: String, required: true }
	}
});