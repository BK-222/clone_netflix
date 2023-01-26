const choosePlanPage = {
  template:
  `<div>
    Choose your plan.
    {{ hasEmail }}
    {{ hasPass }} 
    <ul>
      <li>No commitments, cancel at any time.</li>
      <li>Endless entertainment for one low price.</li>
      <li>Unlimited viewing on all your devices.</li>
    </ul>
    <base-button to="/signup/planform">Next</base-button>
  </div>`, 
  computed: {
    hasEmail: function() {
      return this.$store.getters['auth/email'];
    }, 
    hasPass: function() {
      return this.$store.getters['auth/password'];
    }
  }
} 