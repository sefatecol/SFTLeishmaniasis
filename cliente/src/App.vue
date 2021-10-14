<template>
  <v-app>
    <!-- <Header/> Si tuviera un componente de header entonces se coloca aquí-->
    <v-main>
      <router-view />
      <!--Aquí va el cuerpo de lo que queremos que aparezca en la primera vista-->
    </v-main>
    <!-- <Footer/> Si tuviera un componente de Footer entonces se coloca aquí para que aparezca en todas las vistas-->
  </v-app>
</template>

<script>
/*
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
*/

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    //Header
    //Footer
  },
};
</script>

<script>
import axios from "axios";
export default {
  name: "Api",
  data: () => ({
    registro: JSON,
    nuevoRegistro: JSON,
  }),
  methods: {
    nuevoRegistro() {
      axios
        .post("https://sefatecol-back.herokuapp.com/api/nuevo-registro", {
          registro: this.nuevoRegistro,
        })
        .then((response) => {
          this.message = response.data;
          console.log(response.data);
          this.list();
        });
      this.nuevoRegistro = JSON;
    },
    consultaRegistro(id) {
      axios
        .get("https://sefatecol-back.herokuapp.com/api/registro/:id" + id)
        .then((response) => {
          this.message = response.data;
          console.log(response.data);
          this.list();
        });
    },
    consultaAllRegistro(id) {
      axios
        .get("https://sefatecol-back.herokuapp.com/api/registro/" + id)
        .then((response) => {
          this.message = response.data;
          console.log(response.data);
          this.list();
        });
    },
    eliminarRegistro(id) {
      axios
        .delete("https://sefatecol-back.herokuapp.com/api/registro/:id" + id)
        .then((response) => {
          this.message = response.data;
          console.log(response.data);
          this.list();
        });
    },
    actualizarRegistro(id) {
      axios
        .put("https://sefatecol-back.herokuapp.com/api/registro/:id" + id)
        .then((response) => {
          this.message = response.data;
          console.log(response.data);
          this.list();
        });
    },
  },
}
