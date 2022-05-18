<template>
  <MainLayout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-3 justify-content-between">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title font-size-12">
              <b>Projeto 01</b>
            </h6>
            <p class="font-size-11">
              Projeto de software
            </p>
            <div class="row">
              <div class="col-12">
                <p class="font-size-12">
                  PLANEJAMENTO
                </p>
                <div class="nav flex-column nav-pills" aria-orientation="vertical">
                  <ul class="navbar-nav">
                    <li>
                      <a class="nav-link text-dark " aria-selected="true" href="#"><b>Roadmap</b></a>
                    </li>
                    <li>
                      <a class="nav-link text-dark " aria-selected="false" href="#"><b>Backlog</b></a>
                    </li>
                    <li>
                      <a class="nav-link text-dark " aria-selected="false" href="#"><b>Board</b></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card py-3 px-3">
          <h5>
            <b>Projeto 01 board</b>
          </h5>
          <form
            class="my-4 float-sm-end d-flex align-items-center"
          >
            <div class="search-box mb-2 me-2">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control border-light rounded"
                  placeholder="Pesquisar..."
                >
              </div>
            </div>
          </form>
          <div class="drag-container">
            <div class="row drag-list">
              <div class="col-lg-4 drag-column">
                <div class="card">
                  <div class="card-body bg-light">
                    <b-dropdown
                      right
                      variant="white"
                      class="float-end"
                      menu-class="dropdown-menu-end"
                      toggle-class="p-0"
                    >
                      <template slot="button-content">
                        <i class="mdi mdi-dots-vertical m-0 text-muted h5" />
                      </template>
                      <b-dropdown-item href="javascript: void(0);">
                        Editar
                      </b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">
                        Deletar
                      </b-dropdown-item>
                    </b-dropdown>
                    <span class="drag-column-header">
                      <h6 class="card-title mb-4 pb-1">Esperando Atendimento</h6>
                    </span>
                    <draggable class="list-group" group="tasks" :list="upcomingTasks">
                      <div
                        v-for="task in upcomingTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card-body">
                          <div class="float-end ml-2">
                            <span
                              class="badge rounded-pill font-size-12"
                              :class="{
                                'badge-soft-secondary': `${task.task}` === 'Waiting',
                                'badge-soft-success': `${task.task}` === 'Complete',
                                'badge-soft-primary': `${task.task}` === 'Approved',
                                'badge-soft-warning': `${task.task}` === 'Pending',
                              }"
                            >{{ task.task }}</span>
                          </div>
                          <div>
                            <h5 class="font-size-15">
                              <a href="javascript: void(0);" class="text-dark font-size-12">{{
                                task.title
                              }}</a>
                            </h5>
                          </div>
                          <p class="text-muted mb-4">
                            {{ task.date }}
                          </p>
                          <div class="avatar-group float-start">
                            <div class="avatar-group-item" />
                            <div v-if="task.user[1]" class="avatar-group-item" />
                          </div>
                          <div class="text-end">
                            <h5 class="font-size-15 mb-1" />
                            <p class="mb-0 text-muted" />
                          </div>
                        </div>
                      </div>
                    </draggable>
                    <div class="text-center d-grid">
                      <a href="javascript: void(0);" class="btn btn-primary mt-3">
                        <i class="mdi mdi-plus me-1" /> Adicionar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 drag-column">
                <div class="card">
                  <div class="card-body bg-light">
                    <b-dropdown
                      right
                      variant="white"
                      class="float-end"
                      toggle-class="p-0"
                      menu-class="dropdown-menu-end"
                    >
                      <template slot="button-content">
                        <i class="mdi mdi-dots-vertical m-0 text-muted h5" />
                      </template>
                      <b-dropdown-item href="javascript: void(0);">
                        Editar
                      </b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">
                        Deletar
                      </b-dropdown-item>
                    </b-dropdown>
                    <span class="drag-column-header">
                      <h6 class="card-title mb-4 pb-1">Em andamento</h6>
                    </span>
                    <draggable class="list-group" group="tasks" :list="progressTasks">
                      <div
                        v-for="task in progressTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card-body">
                          <div class="float-end ml-2">
                            <span
                              class="badge rounded-pill font-size-12"
                              :class="{
                                'badge-soft-secondary': `${task.task}` === 'Waiting',
                                'badge-soft-success': `${task.task}` === 'Complete',
                                'badge-soft-primary': `${task.task}` === 'Approved',
                                'badge-soft-warning': `${task.task}` === 'Pending',
                              }"
                            >{{ task.task }}</span>
                          </div>
                          <div>
                            <h5 class="font-size-15">
                              <a href="javascript: void(0);" class="text-dark font-size-12">{{
                                task.title
                              }}</a>
                            </h5>
                          </div>
                          <p class="text-muted mb-4">
                            {{ task.date }}
                          </p>
                          <div class="avatar-group float-start">
                            <div class="avatar-group-item" />
                            <div v-if="task.user[1]" class="avatar-group-item" />
                          </div>
                          <div class="text-end">
                            <h5 class="font-size-15 mb-1" />
                            <p class="mb-0 text-muted" />
                          </div>
                        </div>
                      </div>
                    </draggable>
                    <div class="text-center d-grid">
                      <a href="javascript: void(0);" class="btn btn-primary mt-3">
                        <i class="mdi mdi-plus me-1" /> Adicionar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col-->

              <div class="col-lg-4 drag-column">
                <div class="card">
                  <div class="card-body bg-light">
                    <!-- dropdown -->
                    <b-dropdown
                      right
                      variant="white"
                      class="float-end"
                      toggle-class="p-0"
                      menu-class="dropdown-menu-end"
                    >
                      <template slot="button-content">
                        <i class="mdi mdi-dots-vertical m-0 text-muted h5" />
                      </template>
                      <b-dropdown-item href="javascript: void(0);">
                        Editar
                      </b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">
                        Deletar
                      </b-dropdown-item>
                    </b-dropdown>
                    <span class="drag-column-header">
                      <h6 class="card-title mb-4 pb-1">Finalizado</h6>
                    </span>
                    <draggable
                      class="list-group"
                      group="tasks"
                      :list="completedTasks"
                    >
                      <div
                        v-for="task in completedTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card-body">
                          <div class="float-end ml-2">
                            <span
                              class="badge rounded-pill font-size-12"
                              :class="{
                                'badge-soft-secondary': `${task.task}` === 'Waiting',
                                'badge-soft-success': `${task.task}` === 'Complete',
                                'badge-soft-primary': `${task.task}` === 'Approved',
                                'badge-soft-warning': `${task.task}` === 'Pending',
                              }"
                            >{{ task.task }}</span>
                          </div>
                          <div>
                            <h5 class="font-size-15">
                              <a href="javascript: void(0);" class="text-dark font-size-12">{{
                                task.title
                              }}</a>
                            </h5>
                          </div>
                          <p class="text-muted mb-4">
                            {{ task.date }}
                          </p>
                          <div class="avatar-group float-start">
                            <div class="avatar-group-item" />
                            <div v-if="task.user[1]" class="avatar-group-item" />
                          </div>
                          <div class="text-end">
                            <h5 class="font-size-15 mb-1" />
                            <p class="mb-0 text-muted" />
                          </div>
                        </div>
                      </div>
                    </draggable>
                    <div class="text-center d-grid">
                      <a href="javascript: void(0);" class="btn btn-primary mt-3">
                        <i class="mdi mdi-plus me-1" /> Adicionar
                      </a>
                    </div>
                  </div>
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
  name: 'Index',
  components: {
    MainLayout,
    PageHeader
  },
  middleware: ['auth'],
  data () {
    return {
      title: 'Projetos',
      items: [
        {
          text: 'Projetos',
          href: '/'
        },
        {
          text: 'Projeto 01',
          active: true
        }
      ],
      upcomingTasks: [
        {
          id: 1,
          title: 'Atividade 01',
          date: 'ABC-1',
          task: 'Waiting',
          user: [require('@/assets/images/avatar.png'), require('@/assets/images/avatar.png')],
          groupId: 1
        }
      ],
      progressTasks: [
        {
          id: 4,
          title: 'Atividade 03',
          date: 'ABC-1',
          task: 'Complete',
          user: [require('@/assets/images/avatar.png')],
          groupId: 2
        }
      ],
      completedTasks: [
        {
          id: 7,
          title: 'Atividade 02',
          date: 'ABC-1',
          task: 'Complete',
          user: [require('@/assets/images/avatar.png')],
          groupId: 3
        }
      ]
    }
  }
}
</script>
