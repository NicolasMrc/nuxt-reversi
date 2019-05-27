<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app class="text-xs-center" dark height="50">
      <v-container class="pa-0">
        <v-layout justify-center align-center>
          <v-flex>
            <span class="font-weight-light"
              >Made By Nico with <i class="fa fa-heart"></i> &
              <i class="fa fa-coffee"></i
            ></span>
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
      fixed: false
    }
  }
}
</script>
