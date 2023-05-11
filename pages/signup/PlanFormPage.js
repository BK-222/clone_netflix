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
      <li>
        <input type="radio" id="basic" value="Basic" v-model="plan"></input>
        <label for="one">Basic</label>
      </li>
      <li>
        <input type="radio" id="standard" value="Standard" v-model="plan"></input>
        <label for="standard">Standard</label> 
      </li>
      <li>
        <input type="radio" id="premium" value="Premium" v-model="plan"></input>
        <label for="premium">Premium</label>
      </li>
    </ul>
    <form @submit.prevent="confirmPlan">
    <base-button external>Confirm</base-button>
    </form>
  </div>`,
  data: function() {
    return {
      plan: null
    }
  }, 
  methods: {
    confirmPlan: async function() {
      const actionPayload = {
        email: this.$store.getters['auth/email'], 
        password: this.$store.getters['auth/password']
      }
      console.log(actionPayload);
      try {
				await this.$store.dispatch('auth/signUp', actionPayload);
				this.$router.replace('/user');
			} catch (error) {
				this.error = error.message || 'Failed to authenticate, try again later.';
			}
    }
  }
} 