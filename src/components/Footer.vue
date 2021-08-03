<template>
  <div class="footer">
    [京ICP备2021024206号]
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
  .footer {
    width 100%
    height 40px
    line-height 40px
    position fixed
    bottom 0
    font-size 14px
    text-align center
    color: $d3d;
  }
</style>
