const mainPage = {
	template:
	'<div>\
		<div class="flex flex-col">\
			<div class="flex justify-between items-center">\
				<img class="w-28 ml-3 lg:w-44 lg:ml-7" src="public/netflix-l.svg"></img>\
				<base-button to="/login" class="px-2.5 py-1 mr-5 lg:px-4 lg:py-1.5 lg:mr-7 text-sm lg:text-base">Sign In</base-button>\
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
			<p class="text-2xl font-semibold">Frequently Asked Questions</p>\
			<div class="flex flex-col text-base">\
				<div>Lorem ipsum</div>\
				<div>Lorem ipsum</div>\
				<div>Lorem ipsum</div>\
				<div>Lorem ipsum</div>\
				<div>Lorem ipsum</div>\
				<div>Lorem ipsum</div>\
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
			name: ''
		}
	}
}
