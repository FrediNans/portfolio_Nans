<template>
  <header class="bg">
    <div
      class="d-flex justify-content-between justify-content-sm-around align-items-center w-100 p-2"
    >
      <b-link
        :to="{ path: '/', hash: '#about' }"
        class="text-white order-2 d-none d-sm-block"
        >QUI SUIS-JE?</b-link
      >
      <b-link
        :to="{ path: '/', hash: '#skills' }"
        class="text-white order-3 d-none d-sm-block"
      >
        COMPÉTENCES</b-link
      >
      <img
        class="img-fluid order-1"
        width="150px"
        src="../static/logo-tr.png"
        alt="logo société fredigo web création"
      />
      <b-link
        :to="{ path: '/', hash: '#realisation' }"
        class="text-white order-5 d-none d-sm-block"
        >RÉALISATIONS</b-link
      >
      <b-link
        href="#"
        class="text-white order-5 d-none d-sm-block"
        :to="{ path: '/', hash: '#contact' }"
        >CONTACT</b-link
      >
      <b-navbar-toggle
        class="order-6 text-white d-block d-sm-none"
        target="navbar-toggle-collapse"
      >
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
    </div>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-2">
        <b-nav-item :to="{ path: '/', hash: '#about' }"
          >QUI SUIS-JE?</b-nav-item
        >
        <b-nav-item :to="{ path: '/', hash: '#skills' }"
          >COMPÉTENCES</b-nav-item
        >
        <b-nav-item :to="{ path: '/', hash: '#realisation' }"
          >RÉALISATIONS</b-nav-item
        >
        <b-nav-item :to="{ path: '/', hash: '#contact' }">CONTACT</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </header>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: $tertiary;
}
</style>
