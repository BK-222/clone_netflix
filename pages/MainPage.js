const mainPage = {
	template:
	'<div>\
		<div class="flex justify-between items-center">\
			<img class="w-44 ml-7" src="public/netflix-l.svg"></img>\
			<base-button to="/login" class="mr-7">Sign In</base-button>\
		</div>\
		<div class="flex justify-center">\
			<div class="flex flex-col items-center w-3\5">\
				<p class="text-6xl text-center">Unlimited films, TV programmes and more.</p>\
				<p class="text-2xl">Watch anytime. Cancel anytime.</p>\
				<p class="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>\
				<form>\
					<input type="email" placeholder="Email address" v-model="name" min="9">\
					<base-button to="/signup/registration" class="" type="submit">Get Started</base-button>\
				</form>\
			</div>\
		</div>\
		<div>\
			<value-section v-for="value in values"\
				:key="value.id"\
				:heading="value.heading"\
				:subheading="value.subheading"\
				:img="value.img"\
			></value-section>\
		</div>\
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