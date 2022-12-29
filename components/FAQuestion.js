Vue.component('question-section', {
	template:
	`<div class="w-full py-3 mb-2 bg-neutral-800">
	  <p class="ml-4">{{ title }}</p>
	 </div>`, 
	props: {
	  title: { type: String, required: true }, 
	  description: { type: String, required: false } 
	}
});