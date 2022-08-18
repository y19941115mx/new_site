<template>
  <div class="main-content-wrap">
    用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <hr />
  <icon-ion:accessibility />
  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { userLogin } from '@/api/login'

const mainStore = useMainStore()

onMounted(() => {
  const passWord = '123456'
  const userName = 'admin'
  userLogin({ passWord, userName }).then((value) => value.token)
})

const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
  window.$message.success('成功')
}
</script>

<style lang="less" scoped>
.test {
  color: @test-color;
}
</style>
