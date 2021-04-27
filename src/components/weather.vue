<template>
  <div>
    <el-row>
      <h3>{{ item.name }}</h3>
      <img v-if="isRefresh(item)" :src="getsrc(item)" class="refresh" />
      <img
        v-else
        src="images/refresh.png"
        class="refresh"
        @click="refresh(item)"
      />

      <img @click="prev(item)" src="images/leftArrow.png" class="prev" />
      <img src="images/background.jpg" class="image" />
      <img @click="next(item)" src="images/rightArrow.png" class="next" />
    </el-row>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const cities = [
      {
        id: 1,
        name: "Brisbane",
        weatherType: 1,
      },
      {
        id: 2,
        name: "Melbourne",
        weatherType: 2,
      },
      {
        id: 3,
        name: "Sydney",
        weatherType: 3,
      },
    ];
    const item = ref({});
    const index = ref(0);

    item.value = cities[index.value];
    const refresh = (item) => {
      item.value = item;
    };
    const prev = () => {
      index.value--;
      index.value = index.value < 0 ? cities.length - 1 : index.value;
      item.value = cities[index.value];
    };
    const next = () => {
      index.value++;
      index.value = index.value >= cities.length ? 0 : index.value;
      item.value = cities[index.value];
    };
    const isRefresh = (item) => {
      debugger;
      if (item.value && item.value.id == item.id) {
        return true;
      } else {
        return false;
      }
    };

    const getsrc = (item) => {
      let src = weatherType.value.find((x) => x.id == item.weatherType).src;
      return `images/${src}`;
    };
    const weatherType = ref([
      {
        id: 1,
        src: "cloudy.png",
      },
      {
        id: 2,
        src: "rain.png",
      },
      {
        id: 3,
        src: "snow.png",
      },
      {
        id: 4,
        src: "sunny.png",
      },
      {
        id: 5,
        src: "thunderStorm.png",
      },
    ]);

    return {
      index,
      item,
      isRefresh,
      getsrc,
      weatherType,
      cities,
      refresh,
      prev,
      next,
    };
  },
});
</script>


<style>
.refresh {
  width: 77px;
  height: 74px;
  position: absolute;
  top: 120px;
  left: 700px;
  cursor: pointer;
}
.prev {
  width: 77px;
  height: 74px;
  position: absolute;
  top: 120px;
  left: 514px;
  cursor: pointer;
}
.next {
  width: 77px;
  height: 74px;
  position: absolute;
  top: 120px;
  right: 513px;
  cursor: pointer;
}
h3 {
  position: absolute;
  left: 700px;
}
/* .time {
  font-size: 13px;
  color: #999;
} */

/* .bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

/* .button {
  padding: 0;
  min-height: auto;
} */

.image {
  width: 500px;
  height: 300px;
  display: block;
  margin: 0 auto;
}
</style>

