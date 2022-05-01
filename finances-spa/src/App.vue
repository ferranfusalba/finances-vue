<template>
  <div>
    <Navbar></Navbar>
    <div class="mt-4">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ibmPM {
  font-family: "IBM Plex Mono", monospace;
}

.ibmPS {
  font-family: "IBM Plex Sans", sans-serif;
}

.ibmPSc {
  font-family: "IBM Plex Sans Condensed", sans-serif;
}

.ibmPSf {
  font-family: "IBM Plex Serif", serif;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>