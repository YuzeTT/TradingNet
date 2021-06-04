<template>
  <v-app>
    <v-main class="backgroundColor">
      <router-view/>
    </v-main>
  </v-app>
  
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
</style>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
