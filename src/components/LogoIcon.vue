<template>
  <div class="logo">
    <img :src="config.logo" alt="" :class="{ 'mr-2': !props.collapsed }" />
    <h2 v-show="!props.collapsed" class="title">{{ config.title }}</h2>
  </div>
</template>

<script lang="ts" setup>
import websiteConfig from '@/layout/setting'
const props = defineProps({
  collapsed: Boolean,
})
const config = reactive(websiteConfig)
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    width: auto;
    height: 32px;
  }

  .title {
    margin-bottom: 0;
  }
}
</style>
