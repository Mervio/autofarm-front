<template>
  <div>
    <AuthLayout>
      <div class="my-auto">
        <div class="text-center">
          <div class="avatar-md mx-auto">
            <div class="avatar-title">
              <i class="bx bxs-envelope h1 mb-0 text-primary" />
            </div>
          </div>
          <div class="p-2 mt-4">
            <h4>Verifique seu email!</h4>
            <p>
              Enviamos um email de verificação. Por favor, confira sua caixa de entrada!
            </p>
            <div class="mt-4">
              <router-link
                to="/ConfirmMail"
                class="btn btn-primary w-md"
              >
                Verificar email
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  </div>
</template>

<script>

import AuthLayout from '../layouts/AuthLayout'

export default {
  name: 'EmailVerification',
  components: { AuthLayout }

}
</script>

<style scoped>
.avatar-title {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #eff2f7;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
</style>
