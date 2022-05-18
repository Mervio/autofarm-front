<template>
  <div id="layout-wrapper">
    <Header />
    <TheNav />
    <TheMain>
      <slot />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import TheNav from '~/components/nav/TheNav'
import TheMain from '~/components/main/TheMain'
import TheFooter from '~/components/footer/TheFooter'

export default {
  components: {
    Header,
    TheNav,
    TheMain,
    TheFooter
  },
  mounted () {
    document.body.setAttribute('data-layout', 'horizontal')
    // document.body.setAttribute('data-layout-size', 'boxed')
  }
}
</script>
