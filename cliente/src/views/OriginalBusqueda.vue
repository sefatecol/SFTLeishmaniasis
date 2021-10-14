<template>
    <div>
    
    <Navbar/>

    <!-- Formulario botón consulta-->
    <form class="row row-cols-lg-auto g-4 align-items-center" style="margin: 14% 33%;">
        <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Botón consulta</label>
        <div class="input-group">
            <div class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <!-- Etiqueta paciente-->
            <label for="consulta"><b>Paciente</b></label>
            </div>
            <!-- Campo introducir número identificación de paciente-->
            <input type="number" class="form-control" id="consulta" placeholder="Número identificación">
        </div>
        </div>
        
        <!-- Botón buscar-->
        <div class="col-12">
        <a href="/consulta" >
            <input type="button" class="btn btn-primary " value="Buscar">
        </a>
        </div>
    </form>
    <!-- END Formulario botón consulta-->

    <Footer/>

    </div>
</template>

<style scoped>
  
  /*Vendor CSS Files*/
    @import '../assets/vendor/bootstrap/css/bootstrap.min.css';

        /*Template Main CSS File*/
    @import '../assets/vendor/landing/css/style.css';   

</style>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',

  data: () => ({
    // 
  }),
  components:{
      Navbar,
      Footer
  }
};
</script>