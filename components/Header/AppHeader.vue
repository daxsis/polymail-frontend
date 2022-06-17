<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    // add this to the menu
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
