Vue.component('value-section', {
	template:
	`<div>
		<div class="py-16 flex flex-col lg:flex-row justify-around items-center">
			<div class="flex flex-col w-11/12 lg:w-2/5 text-center lg:text-left">
			 	<p class="text-2xl lg:text-5xl font-semibold">{{ heading }}</p>
			 	<p class="mt-3 lg:mt-8 text-base lg:text-2xl">{{ subheading }}</p>
			</div>
			<img class="mt-2 lg:mt-0 w-11/12 lg:w-2/5" :src="img"></img>
		</div>
		<section-bar></section-bar>
	</div>`,
	props: {
		heading: { type: String, required: true },
		subheading: { type: String, required: true },
		img: { type: String, required: true }
	}
});
