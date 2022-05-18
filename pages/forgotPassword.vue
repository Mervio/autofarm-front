<template>
  <div>
    <AuthLayout>
      <div>
        <h5 class="text-primary">
          Redefinir Senha
        </h5>
        <p class="text-muted">
          Redefinir senha do Autofarm.
        </p>
      </div>
      <div class="mt-4">
        <div
          class="alert alert-warning text-center mb-4"
          role="alert"
        >
          Digite seu e-mail e as instruções serão enviadas para você!
        </div>
        <form>
          <b-alert
            v-model="isForgotPasswordError"
            class="mb-4"
            variant="danger"
            dismissible
          >
            {{ forgotPasswordError }}
          </b-alert>
          <b-alert
            v-model="isForgotPasswordSuccess"
            class="mb-4"
            variant="success"
            dismissible
          >
            {{ forgotPasswordSuccess }}
          </b-alert>
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Inserir Email"
              :class="{ 'is-invalid': submitted && validations.email.length}"
            >
            <div
              v-if="submitted && validations.email.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.email" :key="index">
                <span>
                  {{ error }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 d-grid">
            <b-button
              type="submit"
              variant="primary"
              class="btn-block"
              @click.prevent="sendEmail"
            >
              Enviar Email
            </b-button>
          </div>
        </form>
        <div class="mt-5 text-center">
          <p>
            Lembrou da senha?
            <router-link
              to="/login"
              class="fw-medium text-primary"
            >
              Faça login aqui.
            </router-link>
          </p>
        </div>
      </div>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout'

import AuthService from '../services/auth/AuthService'

export default {
  name: 'ForgotPasswordPage',
  components: {
    AuthLayout
  },
  middleware: ['guest'],
  data () {
    return {
      email: '',
      submitted: false,
      forgotPasswordError: null,
      isForgotPasswordError: false,
      forgotPasswordSuccess: null,
      isForgotPasswordSuccess: false,
      validations: {
        email: []
      }
    }
  },
  created () {
    this.authService = new AuthService(this.$auth)
  },
  methods: {
    validateEmailField () {
      this.validations.email = []
      if (this.email) {
        // eslint-disable-next-line no-useless-escape
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!mailFormat.test(this.email)) {
          this.validations.email.push('Insira um email válido!')
        }
      } else {
        this.validations.email.push('Campo email é obrigatório!')
      }
    },
    forgotPasswordFieldsAreValid () {
      this.validateEmailField()
      if (this.validations.email.length) {
        return false
      } else {
        return true
      }
    },
    sendEmail () {
      this.submitted = true
      if (this.forgotPasswordFieldsAreValid()) {
        this.forgotPasswordError = null
        this.isForgotPasswordError = false
        this.forgotPasswordSuccess = null
        this.isForgotPasswordSuccess = false

        this.authService.ForgotPassword({
          email: this.email
        }).then((response) => {
          this.forgotPasswordSuccess = response.data.message
          this.isForgotPasswordSuccess = true
        }).catch((error) => {
          if (error.response.status === 422) {
            if (error.response.data.errors.email) {
              this.validations.email = error.response.data.errors.email
            }

            if (error.response.data.errors.messages) {
              this.forgotPasswordError = error.response.data.errors.messages[0]
              this.isForgotPasswordError = true
            }
          } else {
            this.forgotPasswordError = 'Serviço indisponível!'
            this.isForgotPasswordError = true
          }
        })
      }
    }
  }
}
</script>
