<template>
  <div class="flex flex11 full-width over-hide" v-loading="loading">
    <div class="slide flex-shrink0 full-height">
        <Menu class="full-height over-y-auto slide-scroBar" active-name="4-1" :open-names="['4']" theme="dark">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                高阶函数
            </template>
            <MenuGroup title="函数是一等公民">
                <MenuItem name="1-1">函数作为变量</MenuItem>
                <MenuItem name="1-2">函数作为参数</MenuItem>
                <MenuItem name="1-3">函数作为返回值</MenuItem>
            </MenuGroup>
            <MenuGroup title="柯里化">
                <MenuItem name="1-4">柯里化11</MenuItem>
                <MenuItem name="1-5">柯里化22</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                ES6
            </template>
            <MenuItem name="2-1">解构</MenuItem>
            <MenuItem name="2-2">箭头函数</MenuItem>
            <Submenu name="3">
                <template slot="title">Promise</template>
                <MenuItem name="3-1">原理</MenuItem>
                <MenuItem name="3-2">静态方法</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                自动化
            </template>
            <MenuItem name="4-1" :to="{ name: 'gulp' }">gulp</MenuItem>
        </Submenu>
        </Menu>
    </div>
    <div class="over-y-auto flex11 full-height pad24 scroll-bar hover-scroll">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
          loading: true
      }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        },2000)
    }
  }
</script>
<style lang='stylus' scoped>
</style>