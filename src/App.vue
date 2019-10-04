
<template>
  <v-app id="inspire">


    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="indigo"
      dark
    >

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
          </v-img></v-avatar>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >

      <!--
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
        -->

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
        <v-list-item @click="route('about')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019 Genki Ishimaru</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from "@/components/Header";
import router from "@/router.js";

export default {
  router: router,
  
  name: 'App',

components: {
    HelloWorld,
    Header,
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



<!--  
<template>

  <v-app>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>


  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>


</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  },
  data: () => ({
    //
  }),
};
</script>
  -->
  