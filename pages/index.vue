<template>
  <MainLayout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h4 class="card-title">
                Projetos
              </h4>
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length" />
              </div>
            </div>
            <div class="table-responsive">
              <b-table />
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h4 class="card-title">
                Atribuidos a mim
              </h4>
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length" />
              </div>
            </div>
            <div class="table-responsive">
              <b-table />
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination />
                  </ul>
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

export default {
  name: 'IndexPage',
  components: {
    MainLayout,
    PageHeader
  },
  middleware: ['auth'],
  data () {
    return {
      title: 'Meus Trabalhos',
      items: [
        {
          text: 'Meus Trabalhos',
          href: '/'
        },
        {
          text: 'Todos',
          active: true
        }
      ]
    }
  }
}
</script>
