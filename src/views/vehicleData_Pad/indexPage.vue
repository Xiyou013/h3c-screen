<template>
  <div class="homepageContainer" v-loading="loading">
    <div class="head"></div>
    <div class="track_diagram">
      <div class="car"></div>
    </div>
    <div class="real_vehicle">
      <vehicle-echarts></vehicle-echarts>
    </div>
    <div class="operating_area">
      <div class="handle">
        <div class="btn btn_top" @click="handleClick('top')"></div>
        <div class="btn btn_right" @click="handleClick('right')"></div>
        <div class="btn btn_bottom" @click="handleClick('bottom')"></div>
        <div class="btn btn_left" @click="handleClick('left')"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import VehicleEcharts from '../vehicleData/vehicleEcharts.vue'

const loading = ref(false)

// const imageUrl = '/src/views/vehicleData_Pad/image/h3c-title.png'

const handleClick = (target) => {
  console.log(target)
}

onMounted(() => {
  // loading.value = true
})
onUnmounted(() => { })
</script>

<style lang="less" scoped>
:deep(.el-loading-spinner .circular) {
  width: 4vw;
  height: 4vw;
}

.homepageContainer {
  width: 100%;
  height: 100%;
  background-image: url(./image/h3c-bg.jpg);
  background-size: cover;
  background-repeat: repeat;
  background-position: center center;
  text-align: left;
  display: flex;
  flex-wrap: wrap;

  .head {
    width: 100%;
    // height: 1vh;
    background-image: url(./image/h3c-bigTitle.png);
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 4vw;
    position: relative;
    flex-shrink: 0;

    .title {
      width: 47vw;
      height: 7vh;
      // background-color: burlywood;
      left: 50%;
      top: 50%;
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
  }

  .track_diagram {
    width: 100vw;
    height: 40.5vh;
    // background-color: blanchedalmond;
    background-image: url(./image/h3c-realmon-top.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0 2vw;
    color: #fff;

    .car {
      width: 10vw;
      height: 7vh;
      //   background-color: darksalmon;
      background-image: url(./image/h3c-car.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  .real_vehicle {
    width: 65vw;
    height: 40vh;
    // background-color: blanchedalmond;
    background-image: url(./image/h3c-real-vehicle.png);
    background-size: 100% 100%;
    // background-size: contain;
    background-repeat: no-repeat;
    margin-left: 2vw;
    padding: 8vh 1vw 0vh 1vw;
  }

  .operating_area {
    width: 27vw;
    height: 48vh;
    // background-color: blanchedalmond;
    margin-left: 2vw;
    margin-right: 2vw;
    position: relative;

    .handle {
      width: 23.5vw;
      height: 23.5vw;
      //   background-color: rgb(255, 217, 205);
      background-image: url(./image/h3c-handle.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      opacity: 0.7;
      top: 60%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);

      .btn {
        width: 4vw;
        height: 4vw;
        // background-color: darksalmon;
        position: absolute;
        transform: translate(-50%, -50%);
      }

      .btn_top {
        top: 28%;
        left: 50%;
      }

      .btn_right {
        top: 50%;
        left: 72%;
      }

      .btn_bottom {
        top: 72%;
        left: 50%;
      }

      .btn_left {
        top: 50%;
        left: 28%;
      }
    }
  }
}
</style>
