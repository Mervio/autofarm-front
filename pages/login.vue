<template>
  <AuthLayout>
    <div>
      <h5 class="text-primary">
        Bem Vindo!
      </h5>
      <p class="text-muted">
        Faça login para entrar no Autofarm.
      </p>
    </div>
    <b-alert
      v-model="isLoginError"
      variant="danger"
      class="mt-3"
      dismissible
    >
      {{ loginError }}
    </b-alert>
    <div class="mt-4">
      <form>
        <b-form-group
          class="mb-3"
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="credentials.email"
            type="email"
            placeholder="Inserir Email"
            :class="{
              'is-invalid': submitted && validations.email.length,
            }"
          />
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
        </b-form-group>
        <b-form-group
          class="mb-3"
          label="Password"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="credentials.password"
            type="password"
            placeholder="Inserir Senha"
            :class="{
              'is-invalid': submitted && validations.password.length,
            }"
          />
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
        </b-form-group>

        <div class="form-check">
          <input
            id="remember-check"
            v-model="credentials.remember"
            class="form-check-input"
            type="checkbox"
          >
          <label class="form-check-label" for="remember-check">
            Lembre-me
          </label>
        </div>

        <div class="mt-3 d-grid">
          <b-button
            type="submit"
            variant="primary"
            @click.prevent="login"
          >
            Entrar
          </b-button>
        </div>
      </form>
      <div class="mt-3 text-center">
        <p>
          Não tem uma conta?
          <router-link
            to="/registerUser"
            class="fw-medium text-primary"
          >
            Cadastre-se aqui.
          </router-link>
        </p>
      </div>
      <div class="mt-1 text-center">
        <p>
          Esqueceu a senha?
          <router-link
            to="/forgotPassword"
            class="fw-medium text-primary"
          >
            Redefinir senha aqui.
          </router-link>
        </p>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout'

import AuthService from '../services/auth/AuthService'

export default {
  name: 'LoginPage',
  components: {
    AuthLayout
  },
  middleware: ['guest'],
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        remember: false
      },
      submitted: false,
      loginError: null,
      isLoginError: false,
      validations: {
        email: [],
        password: []
      }
    }
  },
  created () {
    this.authService = new AuthService(this.$auth)
  },
  methods: {
    validateEmailField () {
      this.validations.email = []
      if (this.credentials.email) {
        // eslint-disable-next-line no-useless-escape
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!mailFormat.test(this.credentials.email)) {
          this.validations.email.push('Insira um email válido!')
        }
      } else {
        this.validations.email.push('Campo email é obrigatório!')
      }
    },
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
    loginFieldsAreValid () {
      this.validateEmailField()
      this.validatePasswordField()
      if (this.validations.email.length || this.validations.password.length) {
        return false
      } else {
        return true
      }
    },
    login () {
      this.submitted = true
      if (this.loginFieldsAreValid()) {
        this.loginError = null
        this.isLoginError = false

        this.authService.Login({
          data: { ...this.credentials }
        }).catch((error) => {
          if (error.response.status === 422) {
            if (error.response.data.errors.email) {
              this.validations.email = error.response.data.errors.email
            }

            if (error.response.data.errors.password) {
              this.validations.password = error.response.data.errors.password
            }

            if (error.response.data.errors.messages) {
              this.loginError = error.response.data.errors.messages[0]
              this.isLoginError = true
            }
          } else {
            this.loginError = 'Serviço indisponível!'
            this.isLoginError = true
          }
        })
      }
    }
  }
}
</script>
