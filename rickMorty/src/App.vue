<style scoped></style>

<template>
<ListaPersonajes :lista=lista />
</template>

<script>
import axios from "axios";
import ListaPersonajes from "./components/ListaPersonajes.vue";
export default {
  name: "App",
  components: {
    ListaPersonajes
  },
  data() {
    return {
      lista: [],
    };
  },
  mounted() {
    this.cargarPersonajes();
  },

  methods: {
    async cargarPersonajes() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        this.lista = response.data.results;
        console.log(this.lista);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
