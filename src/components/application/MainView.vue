<template>
  <RouterView>
    <template #default="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component :is="Component" v-else :key="route.fullPath" />
    </template>
  </RouterView>
</template>

<script></script>
