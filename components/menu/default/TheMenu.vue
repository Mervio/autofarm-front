<template>
  <ul class="navbar-nav">
    <li>
      <b-dropdown
        variant="black"
        class="dropdown-mega d-none d-lg-block"
        toggle-class="header-item"
        menu-class="dropdown-megamenu"
      >
        <template #button-content>
          <i class="bx bx-customize font-size-16 align-middle me-1" />
          Dashboards
          <i class="mdi mdi-chevron-down" />
        </template>

        <b-dropdown-item>
          <NuxtLink tag="span" to="">
            <i class="bx bx-user font-size-16 align-middle me-1" />
            Testando
          </NuxtLink>
        </b-dropdown-item>
      </b-dropdown>
    </li>
    <li>
      <b-dropdown
        variant="black"
        class="dropdown-mega d-none d-lg-block ms-2"
        toggle-class="header-item"
        menu-class="dropdown-megamenu"
      >
        <template #button-content>
          <i class="bx bx-file font-size-16 align-middle me-1" />
          Meus trabalhos
          <i class="mdi mdi-chevron-down" />
        </template>

        <div class="in-attendance">
          <div class="p-3">
            <div class="row align-items-center me-1">
              <div class="col">
                <h6 class="m-2">
                  EM ATENDIMENTO
                </h6>
              </div>
            </div>
          </div>

          <b-dropdown-item>
            <NuxtLink tag="span" to="/">
              <div class="media-body">
                <h6 class="mt-0 mb-1">
                  <i class="bx bx-user font-size-16 align-middle me-1" />
                  Nome do chamado
                </h6>
                <div class="font-size-12 text-muted">
                  <p class="mb-1">
                    ABC-1 • Nome cliente
                  </p>
                </div>
              </div>
            </NuxtLink>
          </b-dropdown-item>

          <b-dropdown-item>
            <NuxtLink tag="span" to="/">
              <div class="media-body">
                <h6 class="mt-0 mb-1">
                  <i class="bx bx-user font-size-16 align-middle me-1" />
                  Nome do chamado
                </h6>
                <div class="font-size-12 text-muted">
                  <p class="mb-1">
                    ABC-1 • Nome cliente
                  </p>
                </div>
              </div>
            </NuxtLink>
          </b-dropdown-item>
        </div>

        <div class="sprint-backlog">
          <div class="p-3">
            <div class="row align-items-center me-1">
              <div class="col">
                <h6 class="m-2">
                  SPRINT BACKLOG
                </h6>
              </div>
            </div>
          </div>

          <b-dropdown-item>
            <NuxtLink tag="span" to="/">
              <div class="media-body">
                <h6 class="mt-0 mb-1">
                  <i class="bx bx-user font-size-16 align-middle me-1" />
                  Nome do chamado
                </h6>
                <div class="font-size-12 text-muted">
                  <p class="mb-1">
                    ABC-1 • Nome cliente
                  </p>
                </div>
              </div>
            </NuxtLink>
          </b-dropdown-item>
        </div>

        <div class="waiting-service">
          <div class="p-3">
            <div class="row align-items-center me-1">
              <div class="col">
                <h6 class="m-2">
                  EM ESPERA
                </h6>
              </div>
            </div>
          </div>

          <b-dropdown-item>
            <NuxtLink tag="span" to="/">
              <div class="media-body">
                <h6 class="mt-0 mb-1">
                  <i class="bx bx-user font-size-16 align-middle me-1" />
                  Nome do chamado
                </h6>
                <div class="font-size-12 text-muted">
                  <p class="mb-1">
                    ABC-1 • Nome cliente
                  </p>
                </div>
              </div>
            </NuxtLink>
          </b-dropdown-item>
        </div>
      </b-dropdown>
    </li>
    <li>
      <b-dropdown
        variant="black"
        class="dropdown-mega d-none d-lg-block ms-2"
        toggle-class="header-item"
        menu-class="dropdown-megamenu"
      >
        <template #button-content>
          <i class="bx bx-customize font-size-16 align-middle me-1" />
          Projetos
          <i class="mdi mdi-chevron-down font-size-16 align-middle me-1" />
        </template>

        <b-dropdown-item>
          <NuxtLink tag="span" to="/">
            <i class="bx bx-user font-size-16 align-middle me-1" />
            Testando
          </NuxtLink>
        </b-dropdown-item>
      </b-dropdown>
    </li>
    <li>
      <b-dropdown
        variant="black"
        class="dropdown-mega d-none d-lg-block ms-2"
        toggle-class="header-item"
        menu-class="dropdown-megamenu"
      >
        <template #button-content>
          <i class="bx bx-user-plus font-size-50 align-middle me-1" />
          Equipes
          <i class="mdi mdi-chevron-down" />
        </template>

        <b-dropdown-item>
          <NuxtLink tag="span" to="/">
            <i class="bx bx-user font-size-16 align-middle me-1" />
            Testando
          </NuxtLink>
        </b-dropdown-item>
      </b-dropdown>
    </li>
    <li class="d-flex flex-column justify-content-center">
      <NuxtLink to="/project/template">
        <b-button variant="primary">
          Criar
        </b-button>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
// import { items } from '~/components/menu/horizontal-menu'

export default {
}
</script>
