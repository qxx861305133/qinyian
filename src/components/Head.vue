<template>
  <div class="header">
    <img class="logo" src="@/assets/image/logo.png" alt="">
    <span class="title">头部</span>
    <span>登录</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
  .header {
    position: sticky;
    left: 0;
    top: 0;
    padding 24px
    display flex
    align-items center
    justify-content space-between
    flex-shrink: 0;
    text-align: center;
    width: 100%;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #e5e5e5;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255,255,255,0.72)
    z-index 9999
    .title {
      font-size 24px
      color $4f5
      font-weight: 700
    }
    .logo {
      width 40px
      height 40px
      border-radius 4px
    }
  }
</style>
