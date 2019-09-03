<template>
  <el-container class="layout-default">
    <header class="el-header">
      <my-header />
    </header>
    <el-main><nuxt /></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import MyHeader from '@/components/public/header/index.vue'
  export default {
    components: {
      MyHeader
    }
  }
</script>
