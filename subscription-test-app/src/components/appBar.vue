<template>
  <div>
    <v-app-bar color="blue" dark height="50">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Subscription Testing</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="mr-3" light medium>
        <router-link :to="{name: 'Login'}">Login</router-link>
      </v-btn>
      <v-btn class="green" medium>
        <router-link :to="{name: 'SignUp'}">SignUp</router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>