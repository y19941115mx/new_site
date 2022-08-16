<template>
  <n-message-provider>
    <sidebar />
    <router-view></router-view>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/sidebar.vue'
export default defineComponent({
  name: 'App',
  components: { Sidebar },
})
</script>

<style></style>
