<template>
    <div>

    <Navbar/>

    <!-- Formato a la página del main solito-->
    <div>
       <iframe style="background: #FFFFFF;border: none;margin: 3% 26%;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="350" src="https://charts.mongodb.com/charts-project-0-gnmle/embed/charts?id=408adec1-6d7d-4be9-84bd-72111e8176d8&theme=light"></iframe>
       <!-- <img src="../assets/img/logo1.png" alt="Logo" width="250" style="margin:7.1% 40.7%; opacity: 0.3; filter: hue-rotate(180deg); transform: rotate(50deg);">-->
    </div>
    <!-- END Formato a la página del main solito-->

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

