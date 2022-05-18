<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <div class="navbar-brand-box">
          <NuxtLink to="/" class="logo logo-dark">
            <img
              src="@/assets/images/logo_autofarm.svg"
              alt=""
              width="150"
            >
          </NuxtLink>
        </div>
        <b-dropdown
          variant="black"
          class="dropdown-mega d-none d-lg-block ms-2"
          toggle-class="header-item"
          menu-class="dropdown-megamenu"
        >
          <template #button-content>
            Acesso rapido
            <i class="mdi mdi-chevron-down" />
          </template>
        </b-dropdown>
      </div>
      <div class="d-flex">
        <Search />
        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle toggle-right"
          >
            <i class="bx bx-cog bx-spin toggle-right" />
          </button>
        </div>
        <div class="dropdown d-none d-lg-inline-block ms-1">
          <button
            type="button"
            class="btn header-item noti-icon"
          >
            <i class="bx bx-fullscreen" />
          </button>
        </div>
        <b-dropdown
          class="d-none d-lg-inline-block noti-icon"
          menu-class="dropdown-menu-lg dropdown-menu-end"
          right
          toggle-class="header-item"
          variant="black"
        >
          <template #button-content>
            <i class="bx bx-customize" />
          </template>

          <div class="px-lg-2">
            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="" alt="Github">
                  <span>Github</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img
                    src=""
                    alt="bitbucket"
                  >
                  <span>Github</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img
                    src=""
                    alt="dribbble"
                  >
                  <span>dribbble</span>
                </a>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="" alt="dropbox">
                  <span>dropbox</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img
                    src=""
                    alt="mail_chimp"
                  >
                  <span>mail_chimp</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="" alt="slack">
                  <span>slack</span>
                </a>
              </div>
            </div>
          </div>
        </b-dropdown>
        <b-dropdown
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template #button-content>
            <i class="bx bx-bell bx-tada" />
            <span class="badge bg-danger rounded-pill">2</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">
                  Testando
                </h6>
              </div>
              <div class="col-auto">
                <a href="#" class="small">Testando</a>
              </div>
            </div>
          </div>
          <div style="max-height: 230px">
            <a href="javascript: void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title bg-primary rounded-circle font-size-16"
                  >
                    <i class="bx bx-cart" />
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    Testando
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Testando
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline" />
                      Testando
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript: void(0);" class="text-reset notification-item">
              <div class="media">
                <img
                  src=""
                  class="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                >
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    Testando
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Testando
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline" />
                      Testando
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript: void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title bg-success rounded-circle font-size-16"
                  >
                    <i class="bx bx-badge-check" />
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    Testando
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Testando
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline" />
                      Testando
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript: void(0);" class="text-reset notification-item">
              <div class="media">
                <img
                  src=""
                  class="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                >
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    Testando
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Testando
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline" />
                      Testando
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="p-2 border-top d-grid">
            <a
              class="btn btn-sm btn-link font-size-14 text-center"
              href="javascript:void(0)"
            >
              <i class="mdi mdi-arrow-right-circle me-1" />
              <span key="t-view-more">Testando</span>
            </a>
          </div>
        </b-dropdown>
        <b-dropdown right variant="black" toggle-class="header-item">
          <template #button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/avatar.png"
              alt="Header Avatar"
            >
            <span class="d-none d-xl-inline-block ms-1">Usuario 01</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </template>
          <b-dropdown-item>
            <router-link tag="span" to="/contacts/profile">
              <i class="bx bx-user font-size-16 align-middle me-1" />
              Testando
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item href="javascript: void(0);">
            <i class="bx bx-wallet font-size-16 align-middle me-1" />
            Testando
          </b-dropdown-item>
          <b-dropdown-item class="d-block" href="javascript: void(0);">
            <span class="badge bg-success float-end">11</span>
            <i class="bx bx-wrench font-size-16 align-middle me-1" />
            Testando
          </b-dropdown-item>
          <b-dropdown-item href="javascript: void(0);">
            <i class="bx bx-lock-open font-size-16 align-middle me-1" />
            Testando
          </b-dropdown-item>
          <b-dropdown-divider />

          <b-button
            class="dropdown-item text-danger"
            @click.prevent="logout"
          >
            <i
              class="bx bx-power-off font-size-16 align-middle me-1 text-danger"
            />
            Sair
          </b-button>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import Search from '../utils/Search.vue'

import AuthService from '../../services/auth/AuthService'

export default {
  name: 'HeaderComponent',
  components: {
    Search
  },
  created () {
    this.authService = new AuthService(this.$auth)
  },
  methods: {
    logout () {
      this.authService.Logout().then(() => {
        this.$router.push('/login')
      }).catch((error) => {
        // TODO: Adicionar POPUP para notificar error de logout.
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
  }
}

</script>
