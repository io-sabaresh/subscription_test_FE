<template>
  <v-app>
    <v-content>
      
      <notifications group="foo" />
      <router-view default="{name: 'Home'}"></router-view>

    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
};
</script>
