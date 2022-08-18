<template>
  <n-loading-bar-provider>
    <loading-content />
    <n-dialog-provider>
      <dialog-content />
      <n-notification-provider>
        <n-message-provider>
          <message-content />
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts"></script>
