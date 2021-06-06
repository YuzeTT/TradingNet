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
                v-for="item in this.$tdnetCfg.homeCard"
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
      <div class="ma-6"></div>
      <v-card elevation="0">
        <div class="d-flex flex-wrap pa-1">
          <v-row>
              <v-col xs="12" sm="6" md="4" lg="2" class="pa-1" 
                >
                <v-card elevation="0" class="pa-0 ma-0" min-width="200px" height="100%" style="overflow: auto;border: 2px solid #EDEFF2;border-radius:15px">
                  <tradingview-widget-container class="pb-0" />
                </v-card>
              </v-col>
          </v-row>
        </div>
      </v-card>
      <!-- <v-btn @click="test()">test</v-btn> -->
      <!-- <tradingview-widget-container/> -->
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

.tradingview-widget-container{
  width: 10px;
  height: 10px;
  padding-top:100px
}
</style>

<script>
  // import {tradingviewWidgetContainer} from '../components/tradingview'
  // import HelloWorld from '../components/HelloWorld'
  import theme from '../plugins/theme'
  import Navbar from '../components/Navbar.vue'
  export default {
    name: 'Home',
    components: {
      Navbar,
      'tradingview-widget-container': {
        render(createElement) {
          return createElement('script', 
            { 
              attrs: { 
                type: 'text/javascript', 
                src: 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js' }, 
                domProps: {innerHTML: '{"symbol": "OKEX:BTCUSDT","width": "100%","height": "100%","locale": "zh_CN","dateRange": "1D","colorTheme": "light","trendLineColor": "rgba(33, 150, 243, 1)","underLineColor": "rgba(33, 150, 243, 0.3)","underLineBottomColor": "rgba(33, 150, 243, 0.0)","isTransparent": false,"autosize": true,"largeChartUrl": ""}',
                style: this.style
              },
            }
          );
        }
      },
    },
    data: () => ({ 
      
      drawer: false,
      group: null,
    }),
    mounted() {
      
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
