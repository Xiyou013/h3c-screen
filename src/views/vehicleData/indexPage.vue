<template>
  <div class="homepageContainer" v-loading="loading">
    <div class="head">
      <div class="title"><img class="imgClass" :src="imageUrl" alt="" /></div>
      <div class="time">
        <div>{{ dateTimes }}</div>
      </div>
    </div>
    <div class="realmon_left"></div>
    <div class="realmon_right">
      <div class="realmon_screen"></div>
    </div>
    <div class="real_vehicle">
      <!-- <div class="vehicle_echarts"></div> -->
      <vehicle-echarts></vehicle-echarts>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { onMounted, onUnmounted, ref } from 'vue'
import VehicleEcharts from './vehicleEcharts.vue'

export default {
  components: {
    VehicleEcharts
  },
  setup() {
    let dateTimes = ref('')
    let timer = null
    const loading = ref(false)

    const imageUrl = require('/src/views/vehicleData/image/h3c-title.png')

    const getDataTime = () => {
      dateTimes.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }

    onMounted(() => {
      // loading.value = true
      // 先执行一次，拿到时间，再每秒变更
      // 避免初始加载，时间空白一秒
      getDataTime()
      console.log('---begin:formateDate and formateTime---', dateTimes)
      // timer = setInterval(() => {
      getDataTime()
      // }, 1000)
      // setTimeout(() => {
      //   loading.value = false
      // }, 3000)
    })
    onUnmounted(() => {
      clearInterval(timer)
      timer = null
      console.log('---end:formateDate and formateTime---')
    })
    return {
      dateTimes,
      imageUrl,
      loading
    }
  }
}
</script>
<style lang="less" scoped>
:deep(.el-loading-spinner .circular) {
  width: 4vw;
  height: 4vw;
}

.homepageContainer {
  width: 100%;
  height: 100%;
  background-image: url(./image/h3c-bg.png);
  background-size: cover;
  background-repeat: repeat;
  background-position: center center;
  text-align: left;
  display: flex;
  flex-wrap: wrap;

  .head {
    width: 100%;
    height: 8vh;
    background-image: url(./image/h3c-title-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // padding-bottom: 4.5vw;
    position: relative;
    flex-shrink: 0;

    .title {
      width: 47vw;
      height: 7vh;
      // background-color: burlywood;
      left: 50%;
      top: 60%;
      position: absolute;
      transform: translate(-50%, -50%);

      .imgClass {
        width: 100%;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
      }
    }

    .time {
      width: 15vw;
      height: 3.5vh;
      // background-color: burlywood;
      position: absolute;
      top: 84%;
      left: 88%;
      transform: translate(-50%, -50%);

      font-size: 1.3vw;
      text-align: left;
      line-height: 5vh;
      color: #02daf3;
    }
  }

  .realmon_left {
    width: 66.5vw;
    height: 43vh;
    // background-color: blanchedalmond;
    background-image: url(./image/h3c-realmon-left.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 2vw;
  }

  .realmon_right {
    width: 22.5vw;
    height: 43vh;
    // background-color: blanchedalmond;
    background-image: url(./image/h3c-realmon-right.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 4.5vw;
    position: relative;

    .realmon_screen {
      width: 21vw;
      height: 29vh;
      background-color: burlywood;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50.5%, -43%);
    }
  }

  .real_vehicle {
    width: 94vw;
    height: 30vh;
    // background-color: blanchedalmond;
    background-image: url(./image/h3c-real-vehicle.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 2vw;
    padding: 8vh 1vw 0vh 1vw;
  }
}
</style>
