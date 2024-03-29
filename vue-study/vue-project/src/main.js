import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './apis/mixins'

const app = createApp(App);
app.use(router);
app.mount('#app');
app.mixin(mixins);
//전역적으로 custom directive 사용 가능
app.directive('focus', {
    mounted(el){
        el.focus()
    }
})

// 카카오 로그인
window.Kakao.init('145469a9a4c6bed59c20fe8f4b72fcbb');
