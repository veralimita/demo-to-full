<template>
  <div id="app">
    <b-navbar class="is-dark" style="margin-bottom: 3rem">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Demo to full
        </b-navbar-item>
      </template>
    </b-navbar>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
