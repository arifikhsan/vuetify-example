<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-title class="white--text">Bitfumes</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="#">About</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="#">Contact</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/login">Login</router-link>
      </v-btn>
      <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
    </div>
  </v-toolbar>
</template>
