<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="h3 pb-2">
      Fredigo Nans
    </h1>
    <h2 class="h4">Dévellopeur Web Junior</h2>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
h1,
h2 {
  white-space: nowrap;
  opacity: 0;
  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 2s ease-in-out 2s forwards;

  @keyframes reveal {
    0% {
      opacity: 1;
      background-size: 0% 0%;
    }
    80% {
      letter-spacing: 8px;
    }
    100% {
      opacity: 1;
      background-size: 300% 300%;
    }
  }
}
@media screen and(min-width: 670px) {
  h1 {
    font-size: 3rem;
  }
}
</style>
