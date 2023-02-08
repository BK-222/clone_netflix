const userPage = {
  template:
  `<div>
    <div v-if="isLoggedIn">
    <base-button external @click="logOut" class="px-2.5 py-1 mr-5 lg:px-4 lg:py-1.5 lg:mr-7 text-sm lg:text-base">Sign Out</base-button>\
    <p>You're in {{ hasEmail }}!</p>
    <p>To log out, click the sign out button.</p>
    <button @click="logOut">Sign out</button>
    </div>
    <div v-else>
	  <base-button v-else to="/login" class="px-2.5 py-1 mr-5 lg:px-4 lg:py-1.5 lg:mr-7 text-sm lg:text-base">Sign In</base-button>\
	  </div>
  </div>`, 
  methods: {
    logOut() {
      this.$store.dispatch('auth/logOut');
      console.log("four");
      this.$router.replace('/');
    }
  }, 
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'] ;
    },
    hasEmail: function() {
			return this.$store.getters['auth/email'];
		} 
  }
}