<template>

</template>

<script>
export default {
  data() {
    return {
      verifyingEmail: false,
      message: '',
      emailResent: false
    }
  },
  methods: {
    async verifyEmail() {
      this.verifyingEmail = true;

      this.message = await this.$axios.post(this.$route.query.verify_url)
      await this.reloadUser()
    },
    async reloadUser() {
      await this.$auth.fetchUser()
      this.verifyingEmail = false;
    },
    async resendVerificationEmail() {
      await this.$axios.post('api/v1/resend')
      this.emailResent = true
    }
  },
  mounted() {
    if (this.$route.query.verify_url) {
      this.verifyEmail();
    }
  }
}
</script>
