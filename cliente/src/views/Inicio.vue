<template>
    <div>        
    <main>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">

        <div id="logo">  
            <!-- Colocar el logo con el nombre de la empresa -->
            <a class="navbar-brand" href="#">
                <figure class="figure">
                <br>
                <img src="../assets/img/logo1.png" alt="SEFATECOL®" width="60">
                SEFATECOL®
                </figure>
            </a>
        </div>

        <!-- =======navbar======= -->
        <nav id="navbar" class="navbar">
            <ul>
            <li><a class="nav-link scrollto" href="#leishmaniasis01">Leishmaniasis</a></li>
            <li><a class="nav-link scrollto" href="#tuberculosis01">Tuberculosis</a></li>
            <li><a class="nav-link scrollto" href="#sobrenosotros01">Sobre Nosotros</a></li>
            <!-- <li><router-link to="/Login" class="nav-link scrollto">Login</router-link></li> -->
            <li><a class="nav-link scrollto" href="/login">Login</a></li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- =======End navbar======= -->
        </div>
    </header>
    <!-- =======End Header======= -->

    <!-- ======= Sección inicio ======= -->
    <section id="about">
        <div class="container" data-aos="fade-up">
        <div class="row">
            <div class="col-lg-6 inicio.jpg">
            <img src="../assets/img/inicio.jpg" alt="" width="450" height="300">
            </div>

            <div class="col-lg-6 content">
            <h2>SEGUIMIENTO FARMACOTERAPÉUTICO</h2>
            <h3 style="text-align: justify;">Es un servicio profesional que aborda de manera global los problemas de salud y los medicamentos que utiliza el paciente, centrándose en la valoración de la necesidad, efectividad y seguridad de la farmacoterapia.</h3>

            <ul>
                <h6><li><i class="bi bi-check-circle" style="text-align: justify;"></i> Goienetxea Soto, E. (2017). Seguimiento farmacoterapéutico: competencia del farmacéutico. Farmacéuticos Comunitarios, 9(4), 14–17. <a href="https://drive.google.com/file/d/1ae16LVzvuQkKZz7Eg8tjIY22WZWsBuuD/view" target="_blanck"> https://doi.org/10.5672/fc.2173-9218</a>.(2017/vol9).004.03.</li></h6>
            </ul>

            </div>
        </div>
        </div>
    </section>
    <!-- End Sección Inicio -->

        <!-- ======= Section Leishmanisis======= -->
        <section id="leishmaniasis01">
        <section id="services">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
            <h2>Leishmaniasis</h2>
            <p style="text-align: justify;">Es una enfermedad parasitaria que se transmite al hombre por la picadura de diferentes especies de flebotomíneos conocidos en nuestro medio como mosquitos lutzomyia o palomilla. El parásito del género <em>Leishmania</em> puede afectar la piel, mucosas y órganos como el hígado y el bazo, de donde surge la clasificación de la enfermedad en leishmaniasis cutánea, mucosa y visceral.</p>

            <!-- ======= Carrusel de imagenes leishmanisis ======= -->
            <b-container fluid class="p-4 bg-white">
            <b-row>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh1.jpg')" alt="lesh1"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh2.jpg')" alt="lesh2"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh3.png')" alt="lesh3"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh4.jpeg')" alt="lesh4"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh5.jpg')" alt="lesh5"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/lesh6.jpeg')" alt="lesh6"></b-img>
                </b-col>
            </b-row>
            
            </b-container>

            <!-- ======= End carrusel de imagenes ======= -->
            <br>
            <p style="text-align: justify;">La leishmaniasis puede curarse si se diagnostica y trata oportunamente con los medicamentos incluidos en el Plan de Beneficios en Salud Colombiano (PBS) que se administran en las instituciones prestadoras de salud autorizadas.</p>
            <br>

            <!-- ======= Targetas de links a documentos ======= -->
            <div class="row gy-4">

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="box">
                <div class="icon"><i class="bi bi-info-circle-fill"></i></div>
                <h4 class="title"><a href="https://drive.google.com/file/d/1XZrJCEdCzxlCofE_kf_-KbU3_r1sYWsV/view" target="_blank">Abecé orientado a pacientes</a></h4>
                <p class="description" style="text-align: justify;">Documento elaborado por el Ministerio de Salud de Colombia con el fin de informar a la comunidad en general los aspectos más importantes que se deben conocer sobre la enfermedad.</p>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                <div class="icon"><i class="bi bi-check-circle-fill"></i></div>
                <h4 class="title"><a href="https://drive.google.com/file/d/1I_MPFXtey-b0Ewf8nEWF8CU6Hw-KK_HR/view" target="_blank">Guía de práctica clínica</a></h4>
                <p class="description" style="text-align: justify;">La audiencia principal de la presente guía son los profesionales de la salud que laboran actualmente en las Instituciones Prestadoras de Salud del territorio Nacional.</p>
                </div>
            </div>      
            </div>
            <!-- ======= End targetas de links a docuemntos ======= -->
        </div>
        </div>
        </section>
        </section>
        <!-- End Section Leishmanisis-->

        <!-- ======= Section Tuberculosis ======= -->
        <section id="tuberculosis01">
        <section id="services">
            <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h2>Tuberculosis</h2>
                <p style="text-align: justify;">Es una enfermedad bacteriana ocasionada por el microorganismo <em>Mycobacterium tuberculosis</em> que afecta usualmente el pulmón y se transmite al toser, estornudar o hablar con una persona que tenga activa la enfermedad y no esté en tratamiento.</p>
    
            <!-- ======= Carrusel de imagenes tuberculosis ======= -->
            <b-container fluid class="p-4 bg-white">
            <b-row>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub1.jpg')" alt="tub1"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub2.jpg')" alt="tub2"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub3.jpg')" alt="tub3"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub4.jpg')" alt="tub4"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub5.jpg')" alt="tub5"></b-img>
                </b-col>
                <b-col>
                <b-img thumbnail fluid :src="require('../assets/img/tub6.jpg')" alt="tub6"></b-img>
                </b-col>
            </b-row>
            
            </b-container>
                    
            <!-- ======= End carrusel de imagenes ======= -->
            <br>
                <p style="text-align: justify;">La tuberculosis se trata con esquemas de antibióticos controlados y administrados bajo supervisión diaria y continua de la ingesta, realizada por un profesional de la salud o actor comunitario entrenado.</p>
            <br>
    
            <!-- ======= Targetas de links a documentos ======= -->
            <div class="row gy-4">
    
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="box">
                    <div class="icon"><i class="bi bi-hand-index-thumb-fill"></i></div>
                    <h4 class="title"><a href="https://drive.google.com/file/d/1DTAHPCvsWL37aFhHnvtqCNw_xMCVY2ji/view" target="_blank">Abecé orientado a pacientes</a></h4>
                    <p class="description" style="text-align:justify;">Documento elaborado por el Ministerio de Salud de Colombia con el fin de informar a la comunidad en general los aspectos más importantes que se deben conocer sobre la enfermedad.</p>
                </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                    <div class="icon"><i class="bi bi-file-text-fill"></i></div>
                    <h4 class="title"><a href="https://drive.google.com/file/d/1oAijS7oKE7NhQbvXa_2sSv-Aun4jI8Ox/view" target="_blank">Resolución 227 de 2020</a></h4>
                    <p class="description" style="text-align: justify;">Por medio de la cual se adoptan los lineamientos técnicos y operativos del Programa Nacional de Prevención y Control de la Tuberculosis - PNPCT y se dictan otras disposiciones.</p>
                </div>
                </div>      
            </div>
            <!-- ======= End targetas de links a documentos ======= -->
            </div>
            </div>
        </section>
        </section>
        <!-- End Section Tuberculosis-->

        <!-- ======= Section Sobre nosotros======= -->
        <section id="sobrenosotros01">
        <section id="services">
            <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h2>Sobre Nosotros</h2>
                <p style="text-align: justify;">Somos tripulantes de la MisionTic2022🚀 cursando el ciclo 3 y pertenecientes al grupo 74 - ID 6 en la Universidad Tecnológica De Pereira. Nuestro proyecto consiste en desarrollar una aplicación web utilizando el stack MEVN, con el objetivo de llevar el seguimiento a los fármacos usados en el tratamiento de pacientes diagnosticados con leishmaniasis o tuberculosis por parte de instituciones hospitalarias autorizadas.</p>
            </div>
            </div>

        <!-- ======= Equipo ======= -->
        <section id="team">
            <div class="container" data-aos="fade-up">
                <div class="row" style="margin-left: 150px;">

        <!-- ======= Darwin ======= -->
                <div class="col-lg-2 col-md-6">
                    <div class="member">
                    <img src="../assets/img/darox47.jpg" alt="darox47" width="100" height="100">                
                    <div class="details">
                        <h4>Darwin Rodríguez</h4>
                        <span>SCRUM Master</span>
                        <span>@darox47</span>
                        <div class="social">
                        <a href="https://github.com/darox47" target="_blanck"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
    
        <!-- ======= Fernando ======= -->
                <div class="col-lg-2 col-md-6">
                    <div class="member">
                    <img src="../assets/img/ftorob.jpg" alt="ftorob" width="100" height="100">                
                    <div class="details">
                        <h4>Fernando Toro</h4>
                        <span>Product Owner</span>
                        <span>@ftorob</span>
                        <div class="social">
                        <a href="https://github.com/ftorob" target="_blanck"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

        <!-- ======= Paula ======= -->
                <div class="col-lg-2 col-md-6">
                    <div class="member">
                    <img src="../assets/img/Paulamuss.jpg" alt="Paulamuss" width="100" height="100">                
                    <div class="details">
                        <h4>Paula<br>
                        Goméz</h4>
                        <span>Developer</span>
                        <span>@Paulamuss</span>
                        <div class="social">
                        <a href="https://github.com/Paulamuss" target="_blanck"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
        
        <!-- ======= Alejandro ======= -->
                <div class="col-lg-2 col-md-6">
                    <div class="member">
                    <img src="../assets/img/Daleonro.jpg" alt="Daleonro" width="100" height="100">                
                    <div class="details">
                        <h4>Alejandro León</h4>
                        <span>Developer</span>
                        <span>@Daleonro</span>
                        <div class="social">
                        <a href="https://github.com/Daleonro" target="_blanck"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
        
        <!-- ======= Carlos ======= -->
                <div class="col-lg-2 col-md-6">
                    <div class="member">
                    <img src="../assets/img/Project-Camb.jpg" alt="Project-Camb" width="100" height="100">                
                    <div class="details">
                        <h4>Carlos<br>
                        Molina</h4>
                        <span>Developer</span>
                        <span>@Project-Camb</span>
                        <div class="social">
                        <a href="https://github.com/Project-Camb" target="_blanck"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <!-- End Team Section -->
        </section>
        </section>
        <!-- End Section Sobre Nosotros-->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="container">
        <div class="copyright">
            &copy; Copyright <a href="mailto:safetacol@gmail.com"><strong>SEFATECOL</strong></a>. Todos los derechos reservados.
        </div>
        <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </div>
    </footer>
    <!-- End Footer -->

    </div> 
</template>

<style scoped>
  /*Vendor CSS Files*/
    @import '../assets/vendor/bootstrap/css/bootstrap.min.css';
    @import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
    @import '../assets/vendor/boxicons/css/boxicons.min.css';
    @import '../assets/vendor/glightbox/css/glightbox.min.css';
    @import '../assets/vendor/swiper/swiper-bundle.min.css';
    
  /*Template Main CSS File*/
    @import '../assets/vendor/landing/css/style.css';
</style>

<script>

export default ({
    methods: {
        function1(){
        let selectHeader = document.querySelector('#header')
        if (selectHeader) {
            let headerOffset = selectHeader.offsetTop
            let nextElement = selectHeader.nextElementSibling
            const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('fixed-top')
                nextElement.classList.add('scrolled-offset')
            } else {
                selectHeader.classList.remove('fixed-top')
                nextElement.classList.remove('scrolled-offset')
            }
            }
            window.addEventListener('load', headerFixed)
            onscroll(document, headerFixed)
        }
        }
    }
})
</script>