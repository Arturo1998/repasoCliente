<style scoped></style>

<template>
  <ul v-for="personaje in lista" :key="personaje.id">
    <div>
      <li>
        <div>
          <p>
            {{ personaje.name }}
          </p>
          <img :src="personaje.image" alt="" />
        </div>
        <div></div>
      </li>
    </div>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "ListaPersonajes",
  components: {},
    props:{
        lista:{
            type : Array
        }
    }
};
</script>
