<template>
  <div class="main-content-wrap">
    用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <hr />

  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import loginApi from '@/api/login'

const mainStore = useMainStore()

onMounted(() => {
  const passWord = '123456'
  const userName = 'admin'
  loginApi.login({ passWord, userName })
})

const updateName = () => {
  window.$message.success('登录成功')
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>

<style lang="less" scoped>
.test {
  color: @test-color;
}
</style>
