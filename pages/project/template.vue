<template>
  <MainLayout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-2 justify-content-between">
        <div class="card">
          <div class="card-body">
            <h4 class="font-size-14" >
              Templates de projetos
            </h4>
            <div>
              <ul class="nav flex-column nav-pills" aria-orientation="vertical">
                <li>
                  <a class="nav-link active" aria-selected="true" href="#">Desenvolvimento de software</a>
                </li>
                <li>
                  <a class="nav-link" aria-selected="false" href="#">Gerenciamento de serviços</a>
                </li>
                <li>
                  <a class="nav-link" aria-selected="false" href="#">Gerenciamento de trabalho</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-10">
        <div class="card py-3 px-3">
          <h4 class="font-size-14" >Desenvolvimento de software</h4>
          <p class="font-size-12">
            Planeje, acompanhe e crie ótimos softwares. Comece a trabalhar rapidamente com modelos
            adequados à forma como sua equipe trabalha. <br>Além disso, integrações para equipes de DevOps que
            desejam conectar o trabalho em toda a cadeia de ferramentas.
          </p>
          <div class="row">
            <div class="col-6">
              <div class="card" id="clickable" v-on:click="clickable">
                <div class="card-header">
                <img 
                  class="kanban" 
                  alt="Card image cap"
                  src="assets\images\kanban.png">
                </div>
                <div class="card-body">
                  <h5 class="font-size-14">Kanban</h5>
                  <p class="font-size-12">
                    Visualize e avance seu projeto usando perguntas em <br>um quadro poderoso.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card" v-on:click="clickable">
                <div class="card-header">
                <img 
                  class="scrum" 
                  alt="Card image cap"
                  src="assets\images\scrum.png" 
                  >
                </div>
                <div class="card-body">
                  <h5 class="font-size-14">Scrum</h5>
                  <p class="font-size-12">
                    Corra em direção aos objetivos do seu projeto com um quadro, lista de pendências e roteiro.
                  </p>
                </div>
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
require('assets/scss/cutsom/template.scss')

export default {
  name: 'Templates',
  components: {
    MainLayout,
    PageHeader
  },
  middleware: ['guest'],
  data () {
    return {
      title: 'Templates',
      items: [
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

