<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xl-9">
          <div class="auth-full-bg">
            <div class="bg-overlay w-100 h-100" />
          </div>
        </div>

        <div class="col-xl-3">
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="my-auto">
                  <div class="mb-4 mb-md-5">
                    <div class="d-block">
                      <img
                        src="@/assets/images/logo_autofarm.svg"
                        alt=""
                        height="50"
                        class="auth-logo mx-auto"
                      >
                    </div>
                  </div>
                  <slot />
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © 2022, Autofarm. Desenvolvido por Marcio Almeida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    document.body.removeAttribute('data-layout')
    document.body.classList.add('auth-body-bg')
  }
}
</script>

<style lang="scss" scoped>

$autofarm-primary: #EF6122;
$white:          #fff;
$display-block:  block;

$autofarm-auth-bg-image: "~@/assets/images/autofarm_auth_bg.jpg";

.auth-full-bg {
  background-color: rgba($autofarm-primary, 0.25);
  display: flex;

  @media (min-width: 1200px) {
    height: 100vh;
  }

  .bg-overlay {
    background: url($autofarm-auth-bg-image);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.auth-body-bg {
  background-color: $white;
}

.auth-logo {
  display: $display-block;
}

.auth-full-page-content {
  display: flex;

  @media (min-width: 1200px) {
    min-height: 100vh;
  }
}

</style>
