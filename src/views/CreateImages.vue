<template>
  <div>
    <Navbar/>
    <div class="pa-5">
      <div class="mx-auto" style="text-align: center;">
        <v-avatar color="imageTypeButton_s" >
          <v-icon dark>
            mdi-chart-timeline-variant 
          </v-icon>
        </v-avatar>
        <div class="mt-5">
          <span class="text-h6">图片生成</span>
        </div>
      </div>
      <v-card width="480px" class="mx-auto mt-8 rounded-t-lg" style="border-radius:5px">
        <div>
          <!-- <v-btn-toggle
            mandatory
            
            v-model="imageType"
            color="imageTypeButton_s"
            style="border-style:none"
          > -->
          <v-row class="pa-2">
            <v-col class="pt-0 pr-0">
              <v-btn 
                @click="imageType=0"
                elevation="0"
                tile
                width="100%"
                x-large 
                height="40px" 
                style="border-style:none" 
                class="rounded-l-lg"
                :class="imageType==0?'imageTypeButton_s':'imageTypeButton_us'"
              >
                <v-icon 
                  left 
                  :class="imageType==0?'imageTypeButtonText_s--text':'imageTypeButtonText_us--text'"
                >
                  mdi-arrow-top-right 
                </v-icon>
                <span 
                  :class="imageType==0?'imageTypeButtonText_s--text':'imageTypeButtonText_us--text'"
                >
                  多单
                </span>
              </v-btn>
            </v-col>
            <v-col class="pt-0 pl-0">
              <v-btn 
                @click="imageType=1"
                elevation="0"
                tile
                width="100%"
                x-large 
                height="40px" 
                class="rounded-r-lg"
                style="border-style:none" 
                :class="imageType==1?'imageTypeButton_s':'imageTypeButton_us'"
              >
                <v-icon 
                  left 
                  :class="imageType==1?'imageTypeButtonText_s--text':'imageTypeButtonText_us--text'"
                >
                  mdi-arrow-bottom-right
                </v-icon>
                <span
                  :class="imageType==1?'imageTypeButtonText_s--text':'imageTypeButtonText_us--text'"
                >
                  空单
                </span>
              </v-btn>
            </v-col>
          </v-row>
          
          <div class="pa-2">
            无数据。
          </div>
          <!-- </v-btn-toggle> -->
        </div>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data: () => ({ 
    imageType: 0,

    items: [
        {
          icon: 'mdi-wifi',
          text: 'Wifi',
        },
        {
          icon: 'mdi-bluetooth',
          text: 'Bluetooth',
        },
        {
          icon: 'mdi-chart-donut',
          text: 'Data Usage',
        },
      ],
      model: 1,
  }),
}
</script>

<style>
.v-item--active, .v-btn--active{
  
}
</style>