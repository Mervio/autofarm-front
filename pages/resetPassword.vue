<template>
  <div>
    <AuthLayout>
      <div>
        <h5 class="text-primary">
          Redefinir Senha
        </h5>
        <p class="text-muted">
          Digite sua nova senha e confirme.
        </p>
      </div>
      <div class="mt-4">
        <form>
          <b-alert
            v-model="isResetPasswordError"
            class="mb-4"
            variant="danger"
            dismissible
          >
            {{ resetPasswordError }}
          </b-alert>
          <b-alert
            v-model="isResetPasswordSuccess"
            class="mb-4"
            variant="success"
            dismissible
          >
            {{ resetPasswordSuccess }}
          </b-alert>
          <div class="mb-3">
            <label for="password">Nova Senha</label>
            <input
              id="password"
              v-model="credentials.password"
              type="password"
              class="form-control"
              placeholder="Inserir Nova Senha"
              :class="{'is-invalid': submitted && validations.password.length}"
            >
            <div
              v-if="submitted && validations.password.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.password" :key="index">
                <span>
                  {{ error }}
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="passwordConfirmation">Confirmar Nova Senha</label>
            <input
              id="passwordConfirmation"
              v-model="credentials.password_confirmation"
              type="password"
              class="form-control"
              placeholder="Confirmar Nova Senha"
              :class="{ 'is-invalid': submitted && validations.passwordConfirmation.length}"
            >
            <div
              v-if="submitted && validations.passwordConfirmation.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.passwordConfirmation" :key="index">
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
              @click.prevent="resetPassword"
            >
              Redefinir
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
  name: 'ResetPasswordPage',
  components: {
    AuthLayout
  },
  middleware: ['guest', 'existTokenAndEmail'],
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        passwordConfirmation: '',
        token: ''
      },
      submitted: false,
      resetPasswordError: null,
      isResetPasswordError: false,
      resetPasswordSuccess: null,
      isResetPasswordSuccess: false,
      validations: {
        password: [],
        passwordConfirmation: []
      }
    }
  },
  created () {
    this.credentials.email = this.$route.query.email
    this.credentials.token = this.$route.query.token
    this.authService = new AuthService(this.$auth)
  },
  methods: {
    validatePasswordField () {
      this.validations.password = []
      if (this.credentials.password) {
        // eslint-disable-next-line no-useless-escape
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordFormat.test(this.credentials.password)) {
          this.validations.password.push('Insira uma senha válida!')
          this.validations.password.push('- Mínimo de oito caracteres.')
          this.validations.password.push('- Conter pelo menos uma letra maiúscula.')
          this.validations.password.push('- Conter pelo menos uma letra minúscula.')
          this.validations.password.push('- Conter pelo menos um números.')
          this.validations.password.push('- Conter pelo menos um caracter especial.')
        }
      } else {
        this.validations.password.push('Campo senha é obrigatório!')
      }
    },
    validatePasswordConfirmationField () {
      this.validations.passwordConfirmation = []
      if (this.credentials.password_confirmation) {
        if (this.credentials.password_confirmation !== this.credentials.password) {
          this.validations.passwordConfirmation.push('Confirmação de senha diferente da senha digiada!')
        }
      } else {
        this.validations.passwordConfirmation.push('Campo confirmação de senha é obrigatório!')
      }
    },
    resetPasswordFieldsAreValid () {
      this.validatePasswordField()
      this.validatePasswordConfirmationField()
      if (this.validations.password.length || this.validations.passwordConfirmation.length) {
        return false
      } else {
        return true
      }
    },
    resetPassword () {
      this.submitted = true
      if (this.resetPasswordFieldsAreValid()) {
        this.resetPasswordError = null
        this.isResetPasswordError = false
        this.resetPasswordSuccess = null
        this.isResetPasswordSuccess = false

        this.authService.ResetPassword({
          email: this.credentials.email,
          password: this.credentials.password,
          password_confirmation: this.credentials.password_confirmation,
          token: this.credentials.token
        }).then((response) => {
          this.resetPasswordSuccess = response.data.message
          this.isResetPasswordSuccess = true
        }).catch((error) => {
          if (error.response.status === 422) {
            if (error.response.data.errors.password) {
              this.validations.password = error.response.data.errors.password
            }

            if (error.response.data.errors.password_confirmation) {
              this.validations.passwordConfirmation = error.response.data.errors.password_confirmation
            }

            if (error.response.data.errors.message) {
              this.resetPasswordError = error.response.data.errors.message
              this.isResetPasswordError = true
            }
          } else {
            this.resetPasswordError = 'Serviço indisponível!'
            this.isResetPasswordError = true
          }
        })
      }
    }
  }
}
</script>
