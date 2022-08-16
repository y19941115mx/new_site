import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')

declare global {
  interface Window {
    $message: MessageApiInjection
    $store: any
  }
}
