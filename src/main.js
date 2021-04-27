import { createApp } from 'vue'
import App from './App.vue'
import zhanguiVue3 from 'zhangui-vue3'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
createApp(App)
.use(ElementPlus)
.use(zhanguiVue3)
.mount('#app')
