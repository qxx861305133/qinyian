<template>
  <div class="flex flex11 full-width over-hide" v-loading="loading">
    <div class="slide flex-shrink0 full-height">
        <Menu class="full-height over-y-auto" active-name="1-2" :open-names="['1']" theme="dark">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
        </Menu>
    </div>
    <div class="over-y-auto flex11 full-height pad24">
        <Button @click="load">加载</Button>
        <div style="height: 1000px;">我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</div>
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
    methods: {
        load() {
            setTimeout(() => {
                this.loading = false
            },1000)
            this.loading = true
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