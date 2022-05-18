<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div id="topnav-menu-content" class="collapse navbar-collapse">
          <TheMenu />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import TheMenu from '~/components/menu/default/TheMenu'

export default {
  components: { TheMenu }
}
</script>
