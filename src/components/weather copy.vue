<template>
  <div class="test">
    <el-carousel
      type="card"
      :initial-index="index"
      :autoplay="false"
      indicator-position="outside"
      :prev="prev"
      :next="next"
    >
      <el-carousel-item v-for="item in cities" :key="item">
        <i :class="item.ico" @click="refresh(item)"></i>
        <img alt="Vue logo" :src="item.src" />
        <!-- <h3>{{ item.name }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let index = 0;
    let curentCity = {};
    let id = 0;
    const cities = [
      {
        id: 1,
        name: "Brisbane",
        ico: "el-icon-refresh-left",
        src: "/images/Startup_Brisbane.png",
      },
      {
        id: 2,
        name: "Melbourne",
        ico: "el-icon-refresh-left",
        src: "/images/Startup_Melbourne.png",
      },
      {
        id: 3,
        name: "Sydney",
        ico: "el-icon-refresh-left",
        src: "/images/Startup_Sydney.png",
      },
    ];
    const refresh = (item) => {
      cities.forEach((element) => {
        if (element.id == item.id) {
          element.src = element.src.replace("Startup", "Weather");
          curentCity = element;
        } else {
          element.src = element.src.replace("Weather", "Startup");
        }
      });

      index = item.id - 1;
      console.log(cities);
    };
    const prev = () => {
      id = index - 1 <= 0 ? 0 : index - 1;
      cities.forEach((element) => {
        if (element.id == id) {
          element.src = element.src.replace("Startup", "Weather");
          curentCity = element;
        } else {
          element.src = element.src.replace("Weather", "Startup");
        }
      });
    };
    const next = () => {
      id = index + 1 > cities.length ? 0 : index + 1;
      cities.forEach((element) => {
        if (element.id == index) {
          element.src = element.src.replace("Startup", "Weather");
          curentCity = element;
        } else {
          element.src = element.src.replace("Weather", "Startup");
        }
      });
    };
    return {
      id,
      prev,
      next,
      index,
      curentCity,
      cities,
      refresh,
    };
  },
});
</script>
<style>
.test {
  width: 50%;
  margin: 200px auto;
}
.test img {
  width: 750px;
  height: 300px;
  position: relative;
  top: -75px;
}
.el-carousel__item i {
  color: #475669;
  font-size: 76px;
  opacity: 1;
  /* line-height: 0px; */
  margin: 0;
  cursor: pointer;
  position: relative;
  top: 106px;
  z-index: 1;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
