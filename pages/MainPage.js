const mainPage = {
	template:
	'<div>\
		<div class="flex flex-col">\
			<div class="flex justify-between items-center">\
				<img class="w-28 ml-3 lg:w-44 lg:ml-7" src="public/netflix-l.svg"></img>\
				<base-button v-if="isLoggedIn" external class="px-2.5 py-1 mr-5 lg:px-4 lg:py-1.5 lg:mr-7 text-sm lg:text-base">Sign Out</base-button>\
				<base-button v-else to="/login" class="px-2.5 py-1 mr-5 lg:px-4 lg:py-1.5 lg:mr-7 text-sm lg:text-base">Sign In</base-button>\
			</div>\
			<div class="flex justify-center items-center h-full mt-12 mb-28 lg:mt-28 lg:mb-56 lg:font-semibold tracking-wide">\
				<div class="flex flex-col items-center w-4/5 lg:w-3/5">\
					<p class="mb-3 lg:mb-4 text-2xl lg:text-5xl font-semibold text-center">Unlimited films, TV<br> programmes and more.</p>\
					<p class="mb-4 lg:mb-6 text-base lg:text-2xl">Watch anytime. Cancel anytime.</p>\
					<get-started></get-started>\
				</div>\
			</div>\
		</div>\
		<section-bar></section-bar>\
		<div>\
			<value-section v-for="value in values"\
				:key="value.id"\
				:heading="value.heading"\
				:subheading="value.subheading"\
				:img="value.img"\
			></value-section>\
		</div>\
		<div class="mb-12">\
			<p class="text-2xl font-semibold text-center">Frequently Asked Questions</p>\
			<div class="flex flex-col text-base">\
				<question-section v-for="question in questions"\
				  :key="question.id"\
				  :title="question.title"\
				  :description="question.description"\
			  ></question-section>\
			</div>\
			<get-started></get-started>\
		</div>\
		<section-bar></section-bar>\
	</div>',
	data: function() {
		return {
			values: [
				{ 
					id: 1,
					heading: 'Enjoy on your TV.',
					subheading: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
					img: './assets/tv.png'
				},
				{
					id: 2,
					heading: 'Download your programmes to watch offline.',
					subheading: 'Save your favourites easily and always have something to watch.',
					img: './assets/mobile-0819.jpg'
				},
				{
					id: 3,
					heading: 'Watch everywhere.',
					subheading: 'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.',
					img: './assets/device-pile.png'
				},
				{
					id: 4,
					heading: 'Create profiles for children.',
					subheading: 'Send children on adventures with their favourite characters in a space made just for them – free with your membership.',
					img: './assets/animation.png'
				}
    	],
    	questions: [
    	  {
    	    id: 1, 
    	    title: 'What is Netflix?',
    	    description:"Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices. \n You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
    	  },
    	  {
    	    id: 2,
    	    title: 'How much does Netflix cost?', 
    	    description: 'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £4.99 to £15.99 a month. No extra costs, no contracts.' 
    	  },
    	  {
    	    id: 3, 
    	    title: 'What’s different on Basic with adverts?',
    	    description: 'Basic with adverts is a great way to enjoy films and TV programmes at a lower price. You can stream your favourites on any device with limited advert breaks. This plan does not allow downloads and a limited number of films and TV programmes are not available due to licensing restrictions. Some location and device restrictions also apply. Learn more.'
    	  }, 
    	  {
    	    id: 4, 
    	    title: 'Where can I watch?',
    	    description: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    	  },
    	  {
    	    id: 5, 
    	    title: 'How do I cancel?',
    	    description: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.' 
    	  },
    	  {
    	    id: 6, 
    	    title: 'What can I watch on Netflix?',
    	    description: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.' 
    	  }, 
    	  {
    	    id: 7, 
    	    title: 'Is Netflix good for children?',
    	    description: `The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.

Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.`
    	  } 
    	], 
			name: ''
		}
	}, 
	methods: {
	  logOut: function() {
	    this.$store.dispatch('logOut');
	    this.$router.replace('/logout');
	  }
	}, 
	computed: {
	  isLoggedIn: function() {
	    return this.$store.getters['auth/isAuthenticated'] ;
	  }
	}
}
