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
            <h4>Sucesso!</h4>
            <p>
              Seu email foi verificado com sucesso.
            </p>
            <div class="mt-4">
              <router-link
                to="/dashboard"
                class="btn btn-primary w-md"
              >
                Dashboard
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
  name: 'ConfirmEmailPage',
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
