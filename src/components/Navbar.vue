<template>
  <div class="pa-5">
      <v-card elevation="0">
        <v-row
          align="center"
          justify="space-around"
          class="pa-2"
        >
          <v-btn
            @click.stop="drawer = !drawer"
            large
            elevation="0"
            icon
            outlined
            tile
            style="border: 2px solid #EDEFF2;border-radius:15px"
          >
            <v-icon large>mdi-equal</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            large
            elevation="0"
            icon
            @click="switchDark()"
          >
            <v-icon>mdi-brightness-4 </v-icon>
          </v-btn>
        </v-row>
      </v-card>

      <v-navigation-drawer
        v-model="drawer"
        absolute>
        <!-- bottom temporary -->
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              v-for="item in $tdnetCfg.navigationList"
              :key="item.id"
              :disabled="inDisabledList(item.name)"
              @click.stop="$router.replace(item.route)">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <div class="text-center">
        <v-overlay :value="overlay" opacity="1">
          <v-progress-circular
            indeterminate
            size="64"
          ></v-progress-circular>
        </v-overlay>
      </div>
  </div>
</template>

<script>
import theme from '../plugins/theme'
export default {
  name: 'Navbar',
  data: () => ({ 
    drawer: false,
    overlay: false,
    interval: {},
    value: 0,
  }),
  mounted() {
    
  },
  methods: {
    inDisabledList: function(name) {
      if (name == this.$route.name) {
          return true
      }
      return false
    },
    switchDark:function() {
      this.overlay = !this.overlay
      setTimeout(() => {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        theme.dark = !theme.dark
      }, 500)
    },
  },
  watch: {
    group () {
      this.drawer = false
    },
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 1000)
    },
  }
}
</script>

<style>

</style>