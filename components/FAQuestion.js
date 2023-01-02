Vue.component('question-section', {
	template:
	`<div class="w-full m-auto">
	 <div @click="toggleQuestion" class="flex justify-between items-center w-full lg:w-3/5 py-3 mb-2 bg-neutral-800 cursor-pointer">
	  <p class="ml-4 lg:text-2xl">{{ title }}</p>
	  <div class="mr-4 text-2xl">
	    <p v-if="!expanded">+</p>
	    <p v-else>x</p>
	  </div>
	 </div>
	 <div v-if="expanded" class="w-full lg:w-3/5 py-3 mb-2 bg-neutral-800">
	  <p class="ml-4 mr-6 lg:text-2xl">{{ description }}</p>
	 </div>
	 </div>`, 
	props: {
	  title: { type: String, required: true }, 
	  description: { type: String, required: true } 
	},
	data: function() {
	  return {
	    expanded: false
	  }
	},
	methods: {
	  toggleQuestion: function() {
	    this.expanded = !this.expanded;
	  }
	}
});