<template>
    <div>
    
    <Navbar/>

        <!-- Formulario botón consulta - editar - eliminar-->
        <form class="row row-cols-lg-auto g-4 align-items-center" style="margin: 0px 5px 20px 450px;">
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
        <hr>
    
        <!-- Iconos de datos de paciente -  prescripción - cronograma -->
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="emoji-smile" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
            </symbol>
            <symbol id="star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </symbol>
            <symbol id="alarm" viewBox="0 0 16 16">
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                </symbol>
        </svg>
            <!-- END Iconos de buscar y registrar -->

        
        <!-- Formulario datos de paciente-->
            <form class="row g-3" style="margin: auto;">
            <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
                <svg class="bi me-2" width="16" height="16"><use href="#emoji-smile"/></svg>
                <b>Datos del paciente</b></label>

            <!-- Campo nombres-->
            <div class="col-md-3">
            <label for="nombre" class="form-label"><b>Nombres</b></label>
            <input
                type="text"
                id="nombres"
                name="nombres"
                class="form-control"
                disabled="true"
                value="Jaime Eduardo"
            />
            </div>
    
            <!-- Campo apellidos-->
            <div class="col-md-3">
            <label for="apellidos" class="form-label"><b>Apellidos</b></label>
            <input
                type="text"
                name="apellidos"
                id="apellidos"
                class="form-control"
                disabled="true"
                value="Quevedo Rojas"
            />
            </div>
    
            <!-- Campo tipo de documento-->
            <div class="col-md-3">
            <label for="tipodocumento" class="form-label"><b>Tipo de documento</b></label>
            <input
                type="text"
                name="tipodocumento"
                id="tipodocumento"
                class="form-control"
                disabled="true"
                value="Cédula de ciudadania"
            />
            </div>
    
            <!-- Campo número de documento-->
            <div class="col-md-3">
            <label for="numeroid" class="form-label"><b>Número de documento</b></label>
            <input
                type="number"
                name="numeroid"
                id="numeroid"
                class="form-control"
                disabled="true"
                value="40685897"
            />
            </div>

            <!-- Campo edad-->
            <div class="col-md-2">
                <label for="edad" class="form-label"><b>Edad (años)</b></label>
                <input
                type="number"
                name="edad"
                id="edad"
                class="form-control"
                disabled="true"
                value="50"
                />
            </div>

            <!-- Campo sexo-->
            <div class="col-md-2">
                <label for="sexo" class="form-label"><b>Sexo</b></label>
                <input
                type="text"
                name="sexo"
                id="sexo"
                class="form-control"
                disabled="true"
                value="Masculino"
                />
            </div>
    
            <!-- Campo número de celular-->
            <div class="col-md-2">
                <label for="telefono" class="form-label"><b>Número de celular</b></label>
                <input
                type="number"
                name="telefono"
                id="telefono"
                class="form-control"
                disabled="true"
                value="3106988745"
                />
            </div>
    
            <!-- Campo municipio-->
            <div class="col-md-2">
                <label for="municipio" class="form-label"><b>Municipio</b></label>
                <input
                type="text"
                name="municipio"
                id="municipio"
                class="form-control"
                disabled="true"
                value="Nocaima"
                />
            </div>    

            <!-- Campo dirección-->
            <div class="col-md-4">
            <label for="direccion" class="form-label"><b>Dirección</b></label>
            <input
                type="text"
                name="direccion"
                id="direccion"
                class="form-control"
                disabled="true"
                value="Calle 5 No 4-6"
            />
            </div>
    
            <!-- Campo peso-->
            <div class="col-md-2">
            <label for="peso" class="form-label"> <b>Peso (Kg)</b> </label>
            <input
                type="number"
                name="peso"
                id="peso"
                class="form-control"
                disabled="true"
                value="85"
            />
            </div>  
    
            <!-- Campo CIE-11-->
            <div class="col-md-2">
            <label for="dato" class="form-label"><b>CIE-11</b></label>
            <input
                type="text"
                name="dato"
                id="dato"
                class="form-control"
                disabled="true"
                value="1F54.1"
            />
            </div>
    
            <!-- Campo DIAGNÓSTICO-->
            <div class="col-md-4">
            <label for="diagnostico" class="form-label"><b>Diagnóstico</b></label>
            <input
                type="text"
                name="diagnostico"
                id="diagnostico"
                class="form-control"
                disabled="true"
                value="Leishmaniasis cutánea"
            />
            </div>
    
            <!-- Campo Estado de actividad-->
            <div class="col-md-4">
            <label for="estado" class="form-label"><b>Estado de actividad</b></label>
            <input
                type="text"
                name="estado"
                id="estado"
                class="form-control"
                disabled="true"
                value="En proceso"
            />
            </div>
            
            <!-- Linea separadora-->
            <hr>

        <!-- Formulario prescripción del medicamento-->
            <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
                <svg class="bi me-2" width="16" height="16"><use href="#star"/></svg>
                <b>Prescripción del medicamento</b></label>

            <!-- Campo Medicamento-->
            <div class="col-md-5">
            <label for="medicamento" class="form-label"><b>Medicamento</b></label>
            <input
                type="text"
                name="medicamento"
                id="medicamento"
                class="form-control"
                disabled="true"
                value="ANTIMONIATO DE MEGLUMINA X 1.5g/5mL SOLUCIÓN INYECTABLE"
            />
            </div>
    
            <!-- Campo principio activo-->
            <div class="col-md-3">
            <label for="principio" class="form-label"><b>Principio activo</b></label>
            <input
                type="text"
                name="principio"
                id="principio"
                class="form-control"
                disabled="true"
                value="ANTIMONIATO DE MEGLUMINA"
            />
            </div>
    
            <!-- Campo concentración-->
            <div class="col-md-2">
            <label for="Concentracion" class="form-label"><b>Concentración</b></label>
            <input
                type="text"
                name="Concentracion"
                id="Concentracion"
                class="form-control"
                disabled="true"
                value="1.5g/5mL"
            />
            </div>
        
            <!-- Campo forma farmacéutica-->
            <div class="col-md-2">
            <label for="formaf" class="form-label"><b>Forma farmacéutica</b></label>
            <input
                type="text"
                name="formaf"
                id="formaf"
                class="form-control"
                disabled="true"
                value="SOLUCIÓN INYECTABLE"
            />
            </div>
    
            <!-- Campo unidad medida-->
            <div class="col-md-2">
                <label for="unidad" class="form-label"><b>Unidad de medida</b></label>
                <input
                    type="text"
                    name="unidad"
                    id="unidad"
                    class="form-control"
                    disabled="true"
                    value="AMPOLLA"
                />
                </div>
                
            <!-- Campo presentación comercial-->
            <div class="col-md-2">
            <label for="presentacom" class="form-label"><b>Presentación comercial</b></label>
            <input
                type="text"
                name="presentacom"
                id="presentacom"
                class="form-control"
                disabled="true"
                value="CAJA X 5 UNIDADES"
            />
            </div>

            <!-- Campo dosis-->
            <div class="col-md-2">
                <label for="dosis" class="form-label"><b>Dosis del medicamento</b></label>
                <input
                    type="text"
                    name="dosis"
                    id="dosis"
                    class="form-control"
                    disabled="true"
                    value="13.5 mL"
                />
                </div>
        
            <!-- Campo vía administración-->
            <div class="col-md-3">
            <label for="dosis" class="form-label"><b>Vía de administración</b></label>
            <input
                type="text"
                name="administracion"
                id="administracion"
                class="form-control"
                disabled="true"
                value="INTRAVENOSA"
            />
            </div>
    
            <!-- Campo frecuencia-->
            <div class="col-md-3">
            <label for="frecuencia" class="form-label"><b>Frecuencia (h)</b></label>
            <input
                type="number"
                name="frecuencia"
                id="frecuencia"
                class="form-control"
                disabled="true"
                value="24"
            />
            </div>
    
            <div class="form-floating">
            <textarea
                name="observaciones"
                id="observaciones"
                style="height: 80px"
                class="form-control"
                disabled="true"
            >Paciente en séptimo día de tratamiento presenta rash cutáneo y prurito generalizo posterior a la administración del medicamento con elevación del intervalo QT.
            </textarea>
            <label for="observaciones"><b>Observaciones</b></label>
            </div>

        <!-- Linea separadora-->
        <hr>

        <!-- Formulario cronograma de administración del medicamento-->
            <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
                <svg class="bi me-2" width="16" height="16"><use href="#alarm"/></svg>
                <b>Cronograma de administración</b></label>
            </form>

            <!-- Tabla cronograma de administración del medicamento-->
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <!-- Fila 1-->
                    <th scope="col">Día de tratamiento</th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    <th scope="col">4</th>
                    <th scope="col">5</th>
                    <th scope="col">6</th>
                    <th scope="col">7</th>
                    <th scope="col">8</th>
                    <th scope="col">9</th>
                    <th scope="col">10</th>
                    <th scope="col">11</th>
                    <th scope="col">12</th>
                    <th scope="col">13</th>
                    <th scope="col">14</th>
                    <th scope="col">15</th>
                    <th scope="col">16</th>
                    <th scope="col">17</th>
                    <th scope="col">18</th>
                    <th scope="col">19</th>
                    <th scope="col">20</th>
                    <th scope="col">21</th>
                </tr>
                </thead>

                <tbody>
                <!-- Fila 2-->
                <tr>
                    <th scope="row">Fecha de administración</th>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>

                <!-- Fila 3-->
                <tr>
                    <th scope="row">Unidades administradas</th>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                    <td>@fdo</td>
                </tr>

                <!-- Fila 4A -->
                <tr>
                    <th scope="row">Lote del medicamento</th>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                    <td>@ldo</td>
                </tr>

                <!-- Fila 4B -->
                <tr>
                <th scope="row">Laboratorio farmacéutico</th>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                <td>@zdo</td>
                </tr>

                <!-- Fila 5-->
                <tr>
                    <th scope="row">FV del medicamento</th>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                    <td>@vdo</td>
                </tr>

                <!-- Fila 6-->
                <tr>
                    <th scope="row">Profesional que entrega</th>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                    <td>@ado</td>
                </tr>

                <!-- Fila 7-->
                <tr>
                    <th scope="row">Profesional que recibe</th>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                    <td>@rdo</td>
                </tr>
                </tbody>
            </table>
            <!-- END Tabla cronograma de administración del medicamento-->


            <!-- Botón guardar - cancelar-->
            <div class="col-12 align-items-end">
                <a href="/edicion" >
                <input type="button" class="btn btn-warning mr-1" value="Editar Datos">
                </a>
                <a href="/busqueda" >
                <input type="button" class="btn btn-danger " value="Eliminar Paciente">
                </a>
            </div>
            <hr>

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