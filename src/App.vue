<template>
  <v-app>
    <v-content>
      <app-toolbar></app-toolbar>
      <router-view />
      <app-footer></app-footer>
    </v-content>
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter";
import AppToolbar from "./components/AppToolbar";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>
