<template>
  <header class="bg-secondary">
    <div
      class="d-flex justify-content-between justify-content-sm-around align-items-center w-100 p-2"
    >
      <b-link href="#" class="text-white order-2 d-none d-sm-block"
        >QUI SUIS-JE?</b-link
      >
      <b-link href="#" class="text-white order-3 d-none d-sm-block">
        COMPÉTENCES</b-link
      >
      <img
        class="img-fluid order-1"
        width="150px"
        src="../static/logo-tr.png"
        alt="logo société fredigo web création"
      />
      <b-link href="#" class="text-white order-4 d-none d-sm-block"
        >RÉALISATIONS</b-link
      >
      <b-link href="#" class="text-white order-5 d-none d-sm-block"
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
        <b-nav-item href="#">QUI SUIS-JE?</b-nav-item>
        <b-nav-item href="#">COMPÉTENCES</b-nav-item>
        <b-nav-item href="#">RÉALISATIONS</b-nav-item>
        <b-nav-item href="#">CONTACT</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 5;
}
</style>
