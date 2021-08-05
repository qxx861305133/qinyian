<template>
  <div>
    <mavon-editor v-model="value" @save="save" />
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        value: '简体中文'
      }
    },
    methods: {
      save(value, render) {
        console.log(value)
        console.log(render)
      }
    },
    mounted() {
      console.log(this.$api.user)
      this.$http.get(this.$api.user).then(res => {
        console.log(res)
      })
    }
  }
</script>