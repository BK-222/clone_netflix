const planFormPage = {
  template:
  `<div>
    Choose the plan that's right for you.
    <ul>
      <li>Watch all you want.</li>
      <li>Recommended just for you.</li>
      <li>Change or cancel your plan at any time.</li>
    </ul>
    <ul>
      <li>Basic</li>
      <li>Standard</li>
      <li>Premium</li>
    </ul>
    <form @submit.prevent="confirmPlan">
    <base-button external>Confirm</base-button>
    </form>
  </div>`, 
  methods: {
    confirmPlan: async function() {
      console.log('one');
      const actionPayload = {
        email: this.$store.getters['auth/email'], 
        password: this.$store.getters['auth/password']
      }
      console.log(actionPayload);
      try {
				this.$store.dispatch('auth/signUp', actionPayload);
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
    }
  }
} 