<template>
  <section
    id="realisation"
    class="bg d-flex align-items-center flex-column pt-5"
  >
    <h3 class="text-center text-white h4 mb-3 mt-5">RÉALISATIONS</h3>
    <div
      class="video d-flex justify-content-center align-items-center"
      v-if="watchVideo"
      @click="watchVideo = !watchVideo"
    >
      <div class="col-12 col-md-8">
        <b-embed type="iframe" :src="videoLink" allowfullscreen></b-embed>
      </div>
    </div>
    <article
      class="card mb-3 border-0 p-0 m-0 col-lg-5"
      v-for="projet of projets"
      :key="projet.id"
    >
      <img
        class="card-img-top"
        :src="require(`@/public/img/${projet.title}.webp`)"
        :alt="`Demo ${projet.title}`"
      />
      <div class="card-body">
        <h1 class="card-title h5">{{ projet.title }}</h1>
        <p class="card-text">{{ projet.description }}</p>
      </div>
      <div class="filter">
        <button
          v-if="projet.asDemo"
          @click="(watchVideo = true) && (videoLink = projet.videoLink)"
          class="btn btn-light"
        >
          Voir la démo
        </button>
        <a
          :href="projet.lienSite"
          target="blank"
          v-if="projet.lienSite"
          class="btn btn-light"
        >
          Voir le site
        </a>
        <a :href="projet.lienGitHub" target="blank" class="btn btn-light">
          Voir le code
        </a>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      watchVideo: false,
      videoLink: "",
      projets: [
        {
          id: 2,
          title: "Reservia",
          description:
            "Projet 2 formation Openclassrooms. Réalisation du front à partir d'une maquette, approche mobile first, site responsive full Html5 et Css3.",
          lienGitHub: "https://github.com/FrediNans/fredigonans_2_10032021",
          lienSite: "https://fredinans.github.io/fredigonans_2_10032021/",
          asDemo: true,
          videoLink: "https://www.youtube.com/embed/bGMfdy6L28s"
        },
        {
          id: 3,
          title: "Ohmyfood",
          description:
            "Projet 3 formation Openclassrooms. Réalisation du front à partir d'une maquette, approche mobile first, site responsive full Html5 et Scss (Sass).",
          lienGitHub: "https://github.com/FrediNans/FredigoNans_3_29032021",
          lienSite: "https://fredinans.github.io/FredigoNans_3_29032021/",
          asDemo: true,
          videoLink: "https://www.youtube.com/embed/RHDtHfSdzjM"
        },
        {
          id: 4,
          title: "La chouette agence",
          description:
            "Projet 4 formation Openclassrooms. Réalisation audit SEO/Accessibilité du site d'une agence web. Optimisation du site et rédaction d'un rapport d'optimisation.",
          lienGitHub: "https://github.com/FrediNans/FredigoNans_4_14042021",
          lienSite: "https://fredinans.github.io/FredigoNans_4_14042021/",
          asDemo: false
        },
        {
          id: 5,
          title: "Orinoco",
          description:
            "Projet 5 formation Openclassrooms. Réalisation du front pour un mvp d'e-commerce, en full Javascript vanilla et Scss (Sass).",
          lienGitHub: "https://github.com/FrediNans/FredigoNans_5_30042021",
          lienSite: false,
          asDemo: true,
          videoLink: "https://www.youtube.com/embed/Ujk_tCGbj08"
        },
        {
          id: 6,
          title: "So Pekocko",
          description:
            "Projet 6 formation Openclassrooms. Réalisation d'une API (CRUD) sécurisée (norme OWASP) pour un site d'avis gastronomique. NodeJs, Express, MongoDB(Mongoose)",
          lienGitHub: "https://github.com/FrediNans/FredigoNans_6_12062021",
          lienSite: false,
          asDemo: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: url("../public/img/modernBG.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
}
.video {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.884);
  z-index: 10;
  &__button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.card {
  overflow: hidden;
  width: 90%;
  border-radius: 15px;
  &:hover .filter {
    transform: translateX(0);
    opacity: 1;
  }
  .filter {
    display: block;
    position: absolute;
    top: 0;
    background-color: $secondary;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateX(-500px);
    opacity: 0;
    transition: all 0.3s;
    z-index: 3;
  }
}
</style>
