
<template>
  <v-app>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>        

      <v-toolbar-title>Genki's Portfolio</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn icon href="https://github.com/genki140/portfolio">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >

      <v-list dense>
        <v-list-item @click="route('home')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="route('archive')">
          <v-list-item-action>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Archive</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="route('vue')">
          <v-list-item-action>
            <v-icon>mdi-vuejs</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vue</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="route('puzzle')">
          <v-list-item-action>
            <v-icon>mdi-puzzle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Puzzle</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="route('laravel')">
          <v-list-item-action>
            <v-icon>mdi-laravel</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Laravel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-footer
      color="primary"
      app
    >
      <div class="flex-grow-1"></div>
      <span class="white--text caption">Copyright &copy; 2019 Genki All Rights Reserved.</span>
    </v-footer>

  </v-app>
</template>

<script>
import router from "@/router/index.js";

export default {
  router: router,
  name: 'App',
components: {
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),

  methods: {
    route(item) {
      router.push({
        name: item
      });
    }
  }
}
</script>