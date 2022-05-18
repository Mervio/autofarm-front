<template>
  <MainLayout>
    <PageHeader :title="title" :items="items" />
    <div class="content">
      Projetos
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout'
import PageHeader from '~/components/header/PageHeader'

export default {
  name: 'Index',
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
          text: 'Projeto 01',
          active: true
        }
      ]
    }
  }
}
</script>
