<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr=4">
      TabTracker
    </v-toolbar-title>
    <!-- Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link to="register">
        <v-btn flat>
          Sign Up
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
