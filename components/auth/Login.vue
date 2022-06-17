<template>
  <div>
    <span
      class="text-xs text-red-500"
      v-show="!validations.invalidLogin.valid"
      >{{ validations.invalidLogin.message }}</span
    >
  </div>
</template>

<script>
export default {
  middleware: 'guest', // auth alternative
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      validations: {
        email: {
          valid: true,
          message: '',
        },

        password: {
          valid: true,
          message: '',
        },

        invalidLogin: {
          valid: true,
          message: '',
        },
      },
    }
  },

  methods: {
    validateLogin() {
      if (
        this.form.email === '' ||
        !this.form.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.validations.email.valid = false
        this.validations.email.message =
          'A valid email address has to be entered to login'
      } else {
        this.validations.email.valid = true
        this.validations.email.mesage = ''
      }

      if (this.form.password === '') {
        this.validations.password.valid = false
        this.validations.password.message = 'A password must be entered'
      } else {
        this.validations.password.valid = true
        this.validations.password.message = ''
      }

      return this.validations.email.valid && this.validations.password.valid
    },
    login() {
      if (this.validateLogin()) {
        this.$auth
          .loginWith('laravelSanctum', {
            data: this.form,
          })
          .then(
            function () {
              // ... Handle successful login
            }.bind(this)
          )
          .catch(
            function (error) {
              this.validations.invalidLogin.valid = false;
              this.validations.invalidLogin.message = 'Invalid credentials, please try again!'
              this.validations.email.valid = false;
              this.validations.password.valid = false;
            }.bind(this)
          )
      }
    },
  },
}
</script>
