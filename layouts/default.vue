<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app class="text-xs-center">
      <v-container class="pa-0">
        <v-layout justify-center align-center>
          <v-flex>
            <span>Made By Nico with love & coffee</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
