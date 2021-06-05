<template>
  <!-- <hello-world /> -->
  <div>
    <!-- <v-system-bar app fixed ></v-system-bar> -->
    <Navbar/>
    <div class="pa-5">
      <div class="ma-6"></div>
      <v-card elevation="0">
        <div>
          <span class="text-h3 font-weight-bold">Trading Net</span>
          <div class="py-1"/>
          <span class="text--disabled font-weight-medium">Welcome back, YuzeTT</span>
          <v-chip class="ml-2 px-2 py-1" color="IDChip-bc" label>ID 0001</v-chip>
        </div>
      </v-card>
      <div class="ma-6"></div>
      <v-card elevation="0">
        <div class="d-flex flex-wrap pa-1">
          <v-row>
              <v-col sm="6" md="4" lg="2" class="pa-1"
                v-for="item in this.homeCard"
                :key="item.text">
                <v-card
                  elevation="0"
                  style="border: 2px solid #EDEFF2;border-radius:15px"
                  class="pa-4">
                  <v-icon
                    medium
                    :color="item.leftIconColor"
                  >{{ item.leftIcon }}</v-icon>
                  <div class="py-1"></div>
                  <span class="text-h4 font-weight-bold nowrap">{{ item.text }}</span>
                  <br>
                  <span class="text--disabled nowrap">{{ item.describe }}</span>
                </v-card>
              </v-col>
          </v-row>
        </div>
      </v-card>
      <!-- <v-btn @click="test()">test</v-btn> -->
    </div>
  </div>
</template>

<style >
body {
  padding: 0;
  margin: 0;
}

.nowrap {
  white-space:nowrap
}
</style>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import theme from '../plugins/theme'
  import Navbar from '../components/Navbar.vue'
  export default {
    name: 'Home',
    components: {
      Navbar
    },
    data: () => ({ 
      homeCard: [
        {
          leftIcon: 'mdi-console-line',
          leftIconColor: 'green lighten-1',
          rightIcon: false,
          rightIconColor: false,
          text: '?ms',
          describe: '编译耗时',
          jump: false,
        },
        {
          leftIcon: 'mdi-database-alert',
          leftIconColor: 'red',
          rightIcon: false,
          rightIconColor: false,
          text: '0%',
          describe: '数据库错误率',
          jump: false,
        },
        {
          leftIcon: 'mdi-update',
          leftIconColor: 'blue lighten-1',
          rightIcon: false,
          rightIconColor: false,
          text: 'v.0.1.0',
          describe: '软件版本',
          jump: false,
        }
      ],
      drawer: false,
      group: null,
    }),
    mounted() {
      for(let item of this.$tdnetCfg.navigationList) {
        if(item.name == this.$route.name) {
          console.log("truie")
          this.group = item.id
        }
      }
      
    },
    methods: {
      switchDark:function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        theme.dark = !theme.dark
      },
      inDisabledList: function(name) {
        if (name == this.$route.name) {
            return true
        }
        return false
      },
      // test: function() {
      //   console.log(this.$tdnetCfg.navigationList)
      // }
    },
    watch: {
      // group () {
      //   this.drawer = false
      // },
      // $route: { 
      //   handler: function () {
      //     this.inBanMenuRoutes = (() => {
      //       const currentRoute = this.$route.name
      //       var i
      //       for (i of this.$ctConfig.banMenuRoutes) {
      //         if (currentRoute == i) {
      //           return true
      //         }
      //       }
      //       return false
      //     })()

      //     this.inDisabledList = ((name) => {
      //       if (name == this.$route.name) {
      //           return true
      //       }
      //       return false
      //     })
      //   },
      // }
    },
  }
</script>
