<template>
    <div>
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">

        <div id="logo">  
            <!-- Colocar el logo con el nombre de la empresa -->
            <a class="navbar-brand" href="/main">
                <figure class="figure">
                <br>
                <img src="../assets/img/logo1.png" alt="Leishmaniasis" width="60">
                Leishmaniasis
                </figure>
            </a>
        </div>

        <!-- Iconos de buscar - registrar - administrador -->
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="search" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </symbol>
            <symbol id="pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </symbol>
            <symbol id="person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </symbol>
        </svg>
            <!-- END Iconos de buscar y registrar -->
        
        <!-- =======navbar======= -->
        <nav id="navbar" class="navbar">
            <ul>
            <li><a class="nav-link scrollto align-items-center" href="/busqueda">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#search"/></svg>
                Buscar Paciente</a>
                </li>
            <li><a class="nav-link scrollto" href="/registro">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#pencil-square"/></svg>
                Registrar Paciente</a>
                </li>
            <li><div class="dropdown">
                    <a href="#" class="d-flex align-items-center link-primary text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#person-circle"/></svg>
                    Administrador
                    </a>
        
                    <!-- Opciones del desplegable del administrador-->
                    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a class="dropdown-item" href="/login">Cambiar contraseña</a></li>
                        <li><a class="dropdown-item" href="/inicio">Cerrar sesión</a></li>
                        </ul>
                    </div>
                    </li>
                </ul>
            <i class="bi bi-list mobile-nav-toggle"></i> <!--Esto en responsive hace que aparezca la lista desplegable para movil-->
        </nav>
        <!-- =======End navbar======= -->
        </div>
    </header>
    <!-- =======End Header======= -->
    </div>
</template>