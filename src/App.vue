<template>
  <n-config-provider>
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
})
</script>

<style></style>
