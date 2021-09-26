<template>
  <section
    ref="aboutSection"
    id="about"
    class="bg d-flex justify-content-center align-items-center"
  >
    <div
      ref="aboutContainer"
      class="aboutContainer bg-secondary flex-column d-flex justify-content-center align-items-center col-11 col-xl-8 mx-auto p-3"
    >
      <p ref="aboutText" class="text-white text-center ">
        Développeur web débutant, passionner par l'informatique je me forme en
        autodidacte depuis environ 1 an et j'ai aussi suivi une formation
        diplômante de développeur web full stack pendant 6 mois chez
        Openclassrooms. Je suis plutôt à l'aise avec le backend et je commence à
        bien maîtriser l'environnement de vue.js. Je suis patient, rigoureux,
        logique et autonome.
      </p>
      <a
        ref="cvButton"
        href="https://drive.google.com/file/d/126WK20-afByOMyXOkwc4BRGW1hReUO9A/view?usp=sharing"
        target="blank"
        class="btn btn-primary mt-4"
        >Voir mon CV</a
      >
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const { aboutSection, aboutContainer, aboutText, cvButton } = this.$refs;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: "-20% center",
            end: "bottom center",
            markers: true,
            toggleActions: "restart reset restart"
          }
        })
        .from(aboutContainer, {
          duration: 1.2,
          ease: "bounce.out(1, 0.3)",
          x: 500
        })
        .from(aboutText, {
          duration: 1.2,
          ease: "bounce.out(1, 0.3)",
          scale: 0
        })
        .from(cvButton, {
          duration: 1.2,
          ease: "bounce.out(1, 0.3)",
          scale: 0
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background: url("../public/img/bg2.webp") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.aboutContainer {
  border-radius: 10px;
}
</style>
