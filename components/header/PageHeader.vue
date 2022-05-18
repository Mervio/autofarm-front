<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<template>
  <div class="row mt-3">
    <div class="col-12">
      <div class="page-title-box d-flex align-items-center justify-content-between">
        <h4 class="mb-0 font-size-18">
          {{ title }}
        </h4>

        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0" />
        </div>
      </div>
    </div>
  </div>
</template>
