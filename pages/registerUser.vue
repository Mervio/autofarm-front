<template>
  <div>
    <AuthLayout>
      <div>
        <h5 class="text-primary">
          Registrar Conta
        </h5>
        <p class="text-muted">
          Obtenha sua conta Autofarm.
        </p>
      </div>

      <div class="mt-4">
        <form>
          <b-alert
            v-model="isRegisterUserError"
            class="mb-4"
            variant="danger"
            dismissible
          >
            {{ registerUserError }}
          </b-alert>
          <b-alert
            v-model="isRegisterUserSuccess"
            class="mb-4"
            variant="success"
            dismissible
          >
            {{ registerUserSuccess }}
          </b-alert>
          <div class="mb-3">
            <label for="name">Nome Completo:</label>
            <input
              id="name"
              v-model="user.name"
              type="text"
              class="form-control"
              placeholder="Nome Completo"
              :class="{'is-invalid': submitted && validations.name.length}"
            >
            <div
              v-if="submitted && validations.name.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.name" :key="index">
                <span>
                  {{ error }}
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="email">Email:</label>
            <input
              id="email"
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="Email"
              :class="{'is-invalid': submitted && validations.email.length}"
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
          <div class="mb-3">
            <label for="gender">Sexo:</label>
            <b-form-select
              id="gender"
              v-model="user.gender"
              class="form-control"
              :options="genders"
              :class="{'is-invalid': submitted && validations.gender.length}"
            />
            <div
              v-if="submitted && validations.gender.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.gender" :key="index">
                <span>
                  {{ error }}
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="dateOfBirth">Data de Nascimento:</label>
            <b-form-datepicker id="dateOfBirth" v-model="user.date_of_birth" placeholder="Data de Nascimento" class="form-control" :class="{'is-invalid': submitted && validations.dateOfBirth.length}" />
            <div
              v-if="submitted && validations.dateOfBirth.length"
              class="invalid-feedback"
            >
              <div v-for="(error, index) in validations.dateOfBirth" :key="index">
                <span>
                  {{ error }}
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="password">Senha</label>
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Senha"
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
            <label for="passwordConfirmation">Confirmar Senha</label>
            <input
              id="passwordConfirmation"
              v-model="user.password_confirmation"
              type="password"
              class="form-control"
              placeholder="Confirmar Senha"
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
              @click.prevent="registerUser"
            >
              Registrar
            </b-button>
          </div>
        </form>
        <div class="mt-5 text-center">
          <p>
            Já tem uma conta ?
            <router-link
              to="/login"
              class="fw-medium text-primary"
            >
              Faça login aqui.
            </router-link>
          </p>
        </div>
      </div>
    </authlayout>
  </div>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout'

import UserService from '../services/UserService'

export default {
  name: 'RegisterUserPage',
  components: { AuthLayout },
  middleware: ['guest'],
  data () {
    return {
      genders: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' }
      ],
      user: {
        name: '',
        gender: '',
        date_of_birth: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      validations: {
        name: [],
        gender: [],
        dateOfBirth: [],
        email: [],
        password: [],
        passwordConfirmation: []
      },
      submitted: false,
      registerUserError: null,
      isRegisterUserError: false,
      registerUserSuccess: null,
      isRegisterUserSuccess: false
    }
  },
  created () {
    this.userService = new UserService()
  },
  methods: {
    validateNameField () {
      this.validations.name = []
      if (this.user.name) {
        if (this.user.name.length < 2) {
          this.validations.name.push('Insira um nome válido!')
        }
      } else {
        this.validations.name.push('Campo nome é obrigatório!')
      }
    },
    validateGenderField () {
      this.validations.gender = []
      if (this.user.gender) {
        if (!['M', 'F'].includes(this.user.gender)) {
          this.validations.gender.push('Insira um sexo válido!')
        }
      } else {
        this.validations.gender.push('Campo sexo é obrigatório!')
      }
    },
    validateDateOfBirthField () {
      this.validations.dateOfBirth = []
      if (this.user.date_of_birth) {
        // eslint-disable-next-line no-useless-escape
        const dateOfBirthFormat = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/
        if (!dateOfBirthFormat.test(this.user.date_of_birth)) {
          this.validations.dateOfBirth.push('Insira uma data de nascimento válida!')
        }
      } else {
        this.validations.dateOfBirth.push('Campo data de nascimento é obrigatória!')
      }
    },
    validateEmailField () {
      this.validations.email = []
      if (this.user.email) {
        // eslint-disable-next-line no-useless-escape
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!mailFormat.test(this.user.email)) {
          this.validations.email.push('Insira um email válido!')
        }
      } else {
        this.validations.email.push('Campo email é obrigatório!')
      }
    },
    validatePasswordField () {
      this.validations.password = []
      if (this.user.password) {
        // eslint-disable-next-line no-useless-escape
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordFormat.test(this.user.password)) {
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
      if (this.user.password_confirmation) {
        if (this.user.password_confirmation !== this.user.password) {
          this.validations.passwordConfirmation.push('Confirmação de senha diferente da senha digiada!')
        }
      } else {
        this.validations.passwordConfirmation.push('Campo confirmação de senha é obrigatório!')
      }
    },
    registerUserFieldsAreValid () {
      this.validateNameField()
      this.validateGenderField()
      this.validateDateOfBirthField()
      this.validateEmailField()
      this.validatePasswordField()
      this.validatePasswordConfirmationField()
      if (this.validations.name.length || this.validations.gender.length || this.validations.dateOfBirth.length || this.validations.email.length || this.validations.password.length || this.validations.passwordConfirmation.length) {
        return false
      } else {
        return true
      }
    },
    registerUser () {
      this.submitted = true
      if (this.registerUserFieldsAreValid()) {
        this.registerUserError = null
        this.isRegisterUserError = false
        this.registerUserSuccess = null
        this.isRegisterUserSuccess = false

        this.userService.Create({
          name: this.user.name,
          gender: this.user.gender,
          date_of_birth: this.user.date_of_birth,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation
        }).then((response) => {
          this.registerUserSuccess = response.data.message
          this.isRegisterUserSuccess = true
        }).catch((error) => {
          if (error.response.status === 422) {
            if (error.response.data.errors.name) {
              this.validations.name = error.response.data.errors.name
            }

            if (error.response.data.errors.gender) {
              this.validations.gender = error.response.data.errors.gender
            }

            if (error.response.data.errors.date_of_birth) {
              this.validations.dateOfBirth = error.response.data.errors.date_of_birth
            }

            if (error.response.data.errors.email) {
              this.validations.email = error.response.data.errors.email
            }

            if (error.response.data.errors.password) {
              this.validations.password = error.response.data.errors.password
            }

            if (error.response.data.errors.password_confirmation) {
              this.validations.passwordConfirmation = error.response.data.errors.password_confirmation
            }

            if (error.response.data.errors.message) {
              this.registerUserError = error.response.data.errors.message
              this.isRegisterUserError = true
            }
          } else {
            this.registerUserError = 'Serviço indisponível!'
            this.isRegisterUserError = true
          }
        })
      }
    }
  }
}
</script>
