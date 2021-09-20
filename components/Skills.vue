<template>
  <div class="bg pt-3 d-flex flex-column justify-content-center">
    <h3 class="text-center h4 mb-3 mb-sm-5">COMPÉTENCES</h3>
    <div
      class="d-flex align-items-center justify-content-center flex-column flex-sm-row flex-sm-wrap justify-content-sm-around col-xl-8 mx-auto"
    >
      <div
        class="skillCards mb-3 py-2"
        v-for="skill in skills"
        :key="skill.name"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="d-flex justify-content-center align-items-center mb-2">
            <img
              class="mr-2"
              :src="require(`@/public/img/${skill.name}.webp`)"
              :alt="`logo ${skill.name}`"
              height="30px"
            />
            <h4 class="h6 text-capitalize m-0 text-primary">
              {{ skill.name }}
            </h4>
          </div>
          <div class="skillBar d-flex align-items-center">
            <div
              class="skillPoint"
              v-for="value in skill.value"
              :key="value++"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "html5",
          value: 9
        },
        {
          name: "css3",
          value: 9
        },
        {
          name: "javascript",
          value: 7
        },
        {
          name: "typescript",
          value: 2
        },
        {
          name: "sass",
          value: 8
        },
        {
          name: "mysql",
          value: 5
        },
        {
          name: "sequelize",
          value: 7
        },
        {
          name: "mongoDB",
          value: 5
        },
        {
          name: "nodejs",
          value: 7
        },
        {
          name: "vuejs",
          value: 7
        },
        {
          name: "nuxtjs",
          value: 7
        },
        {
          name: "bootstrap",
          value: 8
        },
        {
          name: "bootstrapVue",
          value: 7
        },
        {
          name: "git",
          value: 5
        },
        {
          name: "github",
          value: 6
        },
        {
          name: "français",
          value: 10
        },
        {
          name: "anglais",
          value: 5
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  min-height: 100vh;
  background: url("../static/bg3.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
}
.skillCards {
  background-color: $secondary;
  width: 160px;
  border-radius: 10px;
}
.skillBar {
  height: 28px;
  width: 135px;
  border: 1px solid $primary;
  border-radius: 3px;
}
.skillPoint {
  width: 10px;
  height: 20px;
  border: 1px solid $primary;
  background-color: $primary;
  margin-left: 3px;
}
</style>
