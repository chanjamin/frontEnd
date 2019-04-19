<template>
  <header class="header">
    <slot name="search"></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name="login"></slot>
  </header>
</template>

<script>
  export default {
    name: "HeaderTop"
  }
</script>

<style scoped>

</style>
