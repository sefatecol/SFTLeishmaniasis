<template>
    <div>
    <main class="form-signin">
        <center><div id="logo">
        <!-- Colocar el logo con el nombre de la empresa en el login-->
            <a class="navbar-brand" href="#">
            <figure class="figure">
                <br>
                <img src="../assets/img/logo1.jpg" alt="SEFATECOL®" width="60">
                SEFATECOL®
            </figure>
            </a>
        </div></center>
        
    <!-- ======= Inicio del formulario ======= -->
        <form name=form action="Inicio.vue" method="dialog" class="p-4 p-md-4 border rounded-3 bg-light">
        <div class="col-md-10 mx-auto col-lg-5"></div>

        <!-- ======= Campo usuario ======= -->
        <div class="form-floating">
        <input type="email" class="form-control" id="correo" placeholder="Correo" name=login required> <!--Dato requerido para no pasar de una al dar entrar-->
        <label for="floatingInput">Ingresa tu correo</label>
        </div>
        <!-- ======= End Campo usuario ======= -->

        <!-- ======= Campo contraseña ======= -->
        <div class="form-floating">
        <input type="password" class="form-control" id="contrasena" placeholder="Contraseña" name=password required> <!--Dato requerido para no pasar de una al dar entrar-->
        <label for="floatingPassword">Ingresa tu contraseña</label>
        </div>
        <!-- ======= End Campo contraseña ======= -->


        <!-- ======= Campo Checkbox ======= -->
        <center><div class="checkbox mb-3">
        <label >
            <input type="checkbox" value="remember-me" > Recordarme?
        </label>
        </div></center>
        <!-- ======= End Campo Checkbox ======= -->


        <!-- ======= Botón Entrar ======= -->
        <input class="w-100 btn btn-lg btn-primary" @click='validarLogin()' type="submit" value="Entrar"> <!--Botón de color personalziado-->
        <p></p> <!-- Un espacio debajo del botón -->
        
        <!-- ======= Link Regresar 
        <center><router-link to="/Inicio">Regresar</router-link></center> -- Esto me lo arroja cortado
        <center><button class="btn btn-block" v-on:click='regresar' >Regresar</button></center> ======= -->
        <a href="/inicio"><center>Regresar</center></a>


        <!-- ======= End Link Regresar ======= -->
        
    <!-- ======= End Botón Entrar ======= -->
    
    </form>
    <!-- ======= Fin del formulario ======= -->
        
    <!-- ======= Footer formulario ======= -->
        <center><p class="mt-5 mb-3 text-muted">&copy;Copyright <a href="mailto:safetacol@gmail.com"><strong>SEFATECOL</strong></a><br>
        Todos los derechos reservados.</p></center>
    <!-- ======= Fin Footer formulario ======= -->
    
    </main>  

    </div>
</template>

<style scoped>

  /*Vendor CSS Files*/
    @import '../assets/vendor/bootstrap/css/bootstrap.min.css';
    
      /*Template Main CSS File*/
    @import '../assets/vendor/landing/css/style.css';

       /* Custom styles for this template*/
    @import '../assets/vendor/login/signin.css';


      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>

<script>

export default ({
  methods:{
    //regresar (){
    //  this.$router.push('/Inicio')
    //},
    validarLogin(){
    if (document.form.password.value=="ANTIMONIATO" && document.form.login.value=="ftorob@unal.edu.co"){ /*Compara los datos introducidos en el form vs los definidos aquí*/
            document.form.submit(); /*Permite pasar a la siguiente página*/
            //this.$router.push('/Inicio')
            window.location.replace("/main"); /*Redirecciona al sidebar_main */
        }
        else{
             alert("Ups... Correo o contraseña incorrecta"); /*Alerta en caso de datos que no concuerdan*/
        }
    }
  }
})
</script>

