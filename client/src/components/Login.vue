<template>
  <v-layout> <!-- this part is by Vuetify and I delete the column to make it normal-->
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form
          autocomplete="on"
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
          ></v-text-field>
          </form>
        <div class="error" v-html="error"></div>
        <v-btn @click="login" class="cyan" dark>Login</v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
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
