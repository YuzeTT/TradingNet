<template>
  <!-- <hello-world /> -->
  <div>
    <!-- <v-system-bar app fixed ></v-system-bar> -->
    <div class="pa-5">
      
      <v-card elevation="0">
        <v-row
          align="center"
          justify="space-around"
          class="pa-2"
        >
          <v-btn
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
        <v-row
          align="start"
          no-gutters
          style="height: 150px;"
        >
          <v-col>
            <v-card
              elevation="0"
              style="border: 2px solid #EDEFF2;border-radius:15px"
              class="pa-4"
            >
              <v-icon
                medium
                color="green lighten-1"
              >mdi-console-line</v-icon>
              <div class="py-1"></div>
              <span class="text-h4 font-weight-bold">126 ms</span>
              <br>
              <span class="text--disabled">编译耗时</span>
            </v-card>
          </v-col>
          <div class="pa-1"></div>
          <v-col>
            <v-card
              elevation="0"
              style="border: 2px solid #EDEFF2;border-radius:15px"
              class="pa-4"
            >
              <v-icon
                medium
                color="red"
              >mdi-database-alert</v-icon>
              <div class="py-1"></div>
              <span class="text-h4 font-weight-bold">0 %</span>
              <br>
              <span class="text--disabled">数据库错误率</span>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<style >
body {
  padding: 0;
  margin: 0;
}
</style>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import theme from '../plugins/theme'
  export default {
    name: 'Home',
    components: {
      // HelloWorld,
    },
    data: () => ({ value: 1 }),
    methods: {
      switchDark:function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        theme.dark = !theme.dark
      }
    }
  }
</script>
