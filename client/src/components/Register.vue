<template>
  <v-layout> <!-- this part is by Vuetify and I delete the column to make it normal-->
    <v-flex xs6 offset-xs3>
      <panel title="register">
          <form
          name="tab-tracker-form"
          autocomplete="off"
        >
         <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
        <br>
         <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
          </form>
        <div class="error" v-html="error"></div>
        <v-btn @click="register" class="cyan" dark>Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color:white;
}
</style>
