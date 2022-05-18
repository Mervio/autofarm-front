<template>
  <MainLayout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-xl-9 col-lg-12">
        <div class="card py-5">
          <div>
            <div class="row px-4">
              <div class="col-xl-12">
                <div>
                  <div class="row align-items-center">
                    <div class="col-12">
                      <div>
                        <h5 class="mb-0">
                          Adicionar detalhes do Projeto
                        </h5>
                        <p class="pt-3">
                          Você pode alterar esses detalhes a qualquer momento nas configurações do projeto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="col-7">
                      <div class="card">
                        <div>
                          <form>
                            <div class="form-group row mb-4">
                              <label for="" class="col-form-label col-lg-2">Nome*</label>
                              <div class="col-lg-10">
                                <input
                                  id=""
                                  name=""
                                  type="text"
                                  class="form-control"
                                  placeholder="Nome do projeto"
                                >
                              </div>
                            </div>
                            <div class="form-group row mb-4">
                              <label for="" class="col-form-label col-lg-2">Acesso*</label>
                              <div class="col-lg-10">
                                <select id="" name="" class="form-control">
                                  <option>
                                    Selectione
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group row mb-4">
                              <label for="" class="col-form-label col-lg-2">Chave*</label>
                              <div class="col-lg-10">
                                <input
                                  id=""
                                  name=""
                                  type="text"
                                  class="form-control"
                                  placeholder=""
                                >
                              </div>
                            </div>
                          </form>
                          <hr class="mb-4">
                          <div class="row justify-content-start">
                            <div class="col-lg-10">
                              <button type="submit" class="btn btn-success">
                                Criar projeto
                              </button>

                              <button type="submit" class="btn btn-light">
                                Cancelar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-body p-4">
            <h5>Template</h5>
            <h5>Kanban</h5>
            <p>Visualize e avance seu projeto usando perguntas em um quadro poderoso.</p>
            <hr class="mb-4">
            <div class="row text-center">
              <div class="col-lg-12">
                <button type="submit" class="btn btn-primary">
                  Mudar template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout'
import PageHeader from '~/components/header/PageHeader'

export default {
  name: 'Novo',
  components: {
    MainLayout,
    PageHeader
  },
  middleware: ['auth'],
  data () {
    return {
      title: '',
      items: [
        {
          text: 'Projetos',
          href: '/'
        },
        {
          text: 'Criar projeto',
          href: '/'
        },
        {
          text: 'Templates',
          active: true
        }
      ]
    }
  }
}
</script>
