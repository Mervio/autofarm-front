<template>
  <div class="row">
    <div class="col-12">
      <div class="body-wrap card-main content-wrap">
        <div class="card-body">
          <div>
            <div class="d-block title-body">
              <h5
                class="d-flex justify-content-between"
                style="font-size: .9rem;"
              >
                <div>
                  Não visualiza essa mensagem? <span class="text-primary"> Veja no nevegador.</span>
                </div>
                <strong>18 de março de 2022</strong>
              </h5>
            </div>
            <hr>
          </div>
        </div>
        <div class="content-alert">
          <!-- fim title-->
          <div class="my-auto">
            <div class="mb-4 mb-md-5">
              <div class="d-block">
                <img
                  src="@/assets/images/logo_autofarm.svg"
                  alt=""
                  height="70"
                  class="auth-logo mx-auto"
                >
              </div>
            </div>
          </div>
          <!-- fim logo-->
          <div class="mx-auto">
            <div class="mb-4 mb-md-5">
              <div
                class="d-block
              font-size: 18px;"
              >
                <p class="text-center">
                  Olá <strong>Nome do Usuário,</strong> vamos recuperar sua senha?
                </p>
              </div>
            </div>
          </div>
          <!-- fim texto-->
          <div class="mx-auto">
            <div class="mb-4 mb-md-5">
              <div
                class="d-block
              font-size: 18px;"
              >
                <p class="text-center">
                  Para recuperar sua senha é super simples, basta clicar no botão abaixo.
                </p><p style="opacity:0.5;">
                  Lembrando que esse link irá expirar em 1 hora.
                </p>
              </div>
            </div>
          </div>
          <!-- fim texto 2-->
          <div class="mx-auto">
            <div class="mb-4 mb-md-5">
              <div
                class="d-blockim texto 3
              font-size: 18px;"
              >
                <nuxt-link to="#">
                  <button
                    class="btn btn-primary btn-block"
                    style="font-size: 1.1rem;"
                  >
                    Recuperar senha
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- fim link-->
          <div class="mx-auto">
            <div class="mb-4 mb-md-5">
              <div
                class="d-block
              font-size: 18px;"
              >
                <p class="text-center">
                  Se tiver problemas clicando no botão, copie e cole o link abaixo em outra janela do seu navegador:
                </p>
                <p class="text-center">
                  <nuxt-link class="text-primary" to="#">
                    https://www.ccdit.com.br/recover/776447?origin=app
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
          <!-- fim link 2-->
        </div>
        <div class="">
          <div>
            <div class="d-blockim ">
              <div class="card-description-alert-footer ">
                <p class="text-center">
                  <strong>Dicas para recuperar a senha: </strong>
                </p>
                <p>
                  * Busque inserir seu e-mail sempre com letras minúsculas.
                </p>
                <p>
                  * Confira se o e-mail usado é realmente o e-mail da sua conta.
                </p>
                <p>
                  * As regras para criação da sua senha são: ter 8 caracteres ou mais e ter pelo menos 1 letra minúscula, número e caracter especial %$#@.
                </p>
              </div>
              <div class="card-footer-alert-end">
                <div>
                  <div class="d-block title-body card-footer-alert">
                    <div
                      class="d-flex justify-content-between pt-3"
                      style="font-size: .9rem;"
                    >
                      <p>
                        © 2022, Autofarm.
                      </p>
                      <p>
                        Termos e Condições / Remover
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- final-->
      </div>
    <!-- end table -->
    </div>
  </div>

  <!-- end row -->
</template>

<script>
export default {
  name: 'ForgotPasswordEmail'
}
</script>

<style scoped>
.content-wrap {
    box-sizing: border-box;
    font-size: 14px;
    width: auto;
    max-width: 800px;
    height: auto;
    max-height: 700px;
    vertical-align: top;
    color: #000;
    text-align: center;
    border-radius: 7px 7px 0 0;
    background-color: #fff;
    margin: 0 auto;
}
.footer-body-alert {
  background-color: #3d4555;
  padding: 10px 20px 0;
  margin-bottom: 0;
}
.content-alert {
  padding: 20px;
}
.card-description-alert-footer {
  background-color: #F5F6F8;
  padding: 5px 20px;
  color: #000;
  text-align: left;
}
.card-footer-alert {
  background-color: #2A3042;
  padding: 0 20px;
  color: #fff;
}

</style>
