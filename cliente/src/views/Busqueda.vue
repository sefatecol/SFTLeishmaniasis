<template>
    <div>
    
    <Navbar/>
    
    <!-- Vista de CONSULTA -->
    <div v-if="consultar">
    <!-- Formulario botón consulta-->
    <form class="row row-cols-lg-auto g-4 align-items-center" style="margin: 1.5% 33%;">
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
            <input type="number" class="form-control" id="entrada" placeholder="Número identificación">
        </div>
        </div>
        
        <!-- Botón buscar-->
        <div class="col-12">
            <input type="button" class="btn btn-primary" value="Buscar" @click="search()">
        </div>
    </form>

    <br>

    <!-- Tabla de listado de pacientes -->
    <table id="datos" class="table table-hover table-bordered align-middle">
        <thead class="table-light">
            <tr class="text-center">
            <th scope="col" >Código</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Municipio</th>
            <th scope="col">Principio Activo</th>
            <th scope="col">Estado</th>
            <th scope="col">-</th>
            <th scope="col">-</th>
            <th scope="col">-</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center" v-for="(item, index) in registros" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.idDocumento}}</td>
                <td>{{item.nombres}}</td>
                <td>{{item.apellidos}}</td>
                <td>{{item.municipio}}</td>
                <td>{{item.principioActivo}}</td>
                <td>{{item.estadoActividad}}</td>
                <td>
                    <button @click="activarVisualizacion(item._id)" class="btn btn-primary mx-2">Visualizar</button>
                </td>
                <td>   
                    <button @click="activarEdicion(item._id)" class="btn btn-warning mx-2">Editar</button>
                </td>
                <td>    
                    <button @click="eliminarRegistro(item._id)" class="btn btn-danger mx-2">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <br>
    <br>

        <!-- Formulario EDITAR datos de paciente-->
      <form action="zconsultaBoton.html" class="row g-3 " style="margin: -30px 110px 30px 110px;" id="formulario" @submit.prevent="editarRegistro(registroEditar)" v-if="editar">
        <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
            <svg class="bi me-2" width="16" height="16"><use href="#emoji-smile"/></svg>
            <b>Datos del paciente</b></label>

        <!-- Campo nombres-->
        <div class="col-md-3" id="nombres">
          <label for="nombre" class="form-label" name='nombres'><b>Nombres</b></label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              class="form-control"
              required="true"
              pattern="[a-zA-Z\s\u00C0-\u017F]+"
              title="No se permiten nombres con números o caracteres especiales"
              v-model="registroEditar.nombres"
            />
            
        </div>
  
        <!-- Campo apellidos-->
        <div class="col-md-3">
          <label for="apellidos" class="form-label" name='apellidos' id="lastName"><b>Apellidos</b></label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten nombres con numeros o caracteres especiales"
            v-model="registroEditar.apellidos"
          />
        </div>
  
        <!-- Campo tipo de documento-->
        <div class="col-md-3">
          <label for="tipodocumento" class="form-label" name=tipo_documento id="type">
            <b>Tipo de documento</b>
          </label>
          <select name="tipodocumento" id="tipodocumento" class="form-select" required v-model="registroEditar.tipoDocumento">
            <option selected="true" disabled="true">Selecciona</option>
            <option value="CedulaC">Cédula de ciudadania</option>
            <option value="CedulaE">Cédula de extrangeria</option>
            <option value="RegistroC">Registro civil</option>
            <option value="TarjetaI">Tarjeta de identidad</option>
          </select>
          </div>
  
        <!-- Campo número de documento-->
        <div class="col-md-3">
          <label for="numeroid" class="form-label" name='numeroId' id="numberId">
            <b>Número de documento</b>
          </label>
          <input
            type="number"
            name="numeroid"
            id="numeroid"
            class="form-control"
            required="true"
            min="0"
            v-model="registroEditar.idDocumento"
          />
        </div>

        <!-- Campo fecha nacimiento-->
        <div class="col-md-2">
            <label for="nacimiento" class="form-label" name="nacimiento" id="birth">
              <b>Fecha de nacimiento</b>
            </label>
            <input
              type="date"
              name="nacimiento"
              id="nacimiento"
              class="form-control"
              required="true"
              v-model="registroEditar.fechaNacimiento"
            />
          </div>
    

        <!-- Campo edad
        <div class="col-md-2">
            <label for="edad" class="form-label" name="edad" id="age"><b>Edad (años)</b></label>
            <input
              type="number"
              name="edad"
              id="edad"
              class="form-control"
              required="true"
              min="0"
              max="120"
              />
          </div>-->

        <!-- Campo sexo-->
        <div class="col-md-2">
            <label for="sexo" class="form-label" name="sexo" id="sex"><b>Sexo</b></label>
            <select
              name="sexo"
              id="sexo"
              class="form-select"
              required="true"
              v-model="registroEditar.sexo"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
      
        <!-- Campo número de celular-->
          <div class="col-md-2">
            <label for="telefono" class="form-label" name="celular" id="movil"><b>Número de celular</b></label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              class="form-control"
              required="true"
              min="0"
              v-model="registroEditar.idCelular"
              />
          </div>
  
        <!-- Campo departamento-->
          <div class="col-md-2">
            <label for="departamento" class="form-label" name="departamento" id="department"><b>Departamento</b></label>
            <select name="departamento" id="departamento" class="form-select" required="true" v-model="registroEditar.departamento">
              <option selected="true" disabled="true">Selecciona</option>
              <option value = "Amazonas">Amazonas</option>
              <option value = "Antioquia">Antioquia</option>
              <option value = "Arauca">Arauca</option>
              <option value = "Atlántico">Atlántico</option>
              <option value = "Bolívar">Bolívar</option>
              <option value = "Boyacá">Boyacá</option>
              <option value = "Caldas">Caldas</option>
              <option value = "Caquetá">Caquetá</option>
              <option value = "Casanare">Casanare</option>
              <option value = "Cauca">Cauca</option>
              <option value = "Cesar">Cesar</option>
              <option value = "Chocó">Chocó</option>		            
              <option value = "Córdoba">Córdoba</option>
              <option value = "Cundinamarca">Cundinamarca</option>
              <option value = "Guainía">Guainía</option>
              <option value = "Guaviare">Guaviare</option>
              <option value = "Huila">Huila</option>
              <option value = "La Guajira">La Guajira</option>
              <option value = "Magdalena">Magdalena</option>
              <option value = "Meta">Meta</option>
              <option value = "Nariño">Nariño</option>
              <option value = "Norte de Santander">Norte de Santander</option>
              <option value = "Putumayo">Putumayo</option>                
              <option value = "Quindío">Quindío</option>  
              <option value = "Risaralda">Risaralda</option>
              <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
              <option value = "Santander">Santander</option>
              <option value = "Sucre">Sucre</option>
              <option value = "Tolima">Tolima</option>
              <option value = "Valle del Cauca">Valle del Cauca</option>
              <option value = "Vaupés">Vaupés</option>
              <option value = "Vichada">Vichada</option>
            </select>
          </div>

        <!-- Campo municipio-->
        <div class="col-md-2">
            <label for="municipio" class="form-label" name="municipio" id="city"><b>Municipio</b></label>
            <select name="municipio" id="municipio" class="form-select" required="true" v-model="registroEditar.municipio">
              <option selected="true" disabled="true">Selecciona</option>
                  <option value="Abejorral">Abejorral</option>
                  <option value="Abrego">Abrego</option>
                  <option value="Abriaquí">Abriaquí</option>
                  <option value="Acacías">Acacías</option>
                  <option value="Acandí">Acandí</option>
                  <option value="Acevedo">Acevedo</option>
                  <option value="Achí">Achí</option>
                  <option value="Agrado">Agrado</option>
                  <option value="Agua de Dios">Agua de Dios</option>
                  <option value="Aguachica">Aguachica</option>
                  <option value="Aguada">Aguada</option>
                  <option value="Aguadas">Aguadas</option>
                  <option value="Aguazul">Aguazul</option>
                  <option value="Agustín Codazzi">Agustín Codazzi</option>
                  <option value="Aipe">Aipe</option>
                  <option value="Albán">Albán</option>
                  <option value="Albán">Albán</option>
                  <option value="Albania">Albania</option>
                  <option value="Albania">Albania</option>
                  <option value="Albania">Albania</option>
                  <option value="Alcalá">Alcalá</option>
                  <option value="Aldana">Aldana</option>
                  <option value="Alejandría">Alejandría</option>
                  <option value="Algarrobo">Algarrobo</option>
                  <option value="Algeciras">Algeciras</option>
                  <option value="Almaguer">Almaguer</option>
                  <option value="Almeida">Almeida</option>
                  <option value="Alpujarra">Alpujarra</option>
                  <option value="Altamira">Altamira</option>
                  <option value="Alto Baudo">Alto Baudo</option>
                  <option value="Altos del Rosario">Altos del Rosario</option>
                  <option value="Alvarado">Alvarado</option>
                  <option value="Amagá">Amagá</option>
                  <option value="Amalfi">Amalfi</option>
                  <option value="Ambalema">Ambalema</option>
                  <option value="Anapoima">Anapoima</option>
                  <option value="Ancuyá">Ancuyá</option>
                  <option value="Andalucía">Andalucía</option>
                  <option value="Andes">Andes</option>
                  <option value="Angelópolis">Angelópolis</option>
                  <option value="Angostura">Angostura</option>
                  <option value="Anolaima">Anolaima</option>
                  <option value="Anorí">Anorí</option>
                  <option value="Anserma">Anserma</option>
                  <option value="Ansermanuevo">Ansermanuevo</option>
                  <option value="Anza">Anza</option>
                  <option value="Anzoátegui">Anzoátegui</option>
                  <option value="Apartadó">Apartadó</option>
                  <option value="Apía">Apía</option>
                  <option value="Apulo">Apulo</option>
                  <option value="Aquitania">Aquitania</option>
                  <option value="Aracataca">Aracataca</option>
                  <option value="Aranzazu">Aranzazu</option>
                  <option value="Aratoca">Aratoca</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Arauquita">Arauquita</option>
                  <option value="Arbeláez">Arbeláez</option>
                  <option value="Arboleda">Arboleda</option>
                  <option value="Arboledas">Arboledas</option>
                  <option value="Arboletes">Arboletes</option>
                  <option value="Arcabuco">Arcabuco</option>
                  <option value="Arenal">Arenal</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Ariguaní">Ariguaní</option>
                  <option value="Arjona">Arjona</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Armero">Armero</option>
                  <option value="Arroyohondo">Arroyohondo</option>
                  <option value="Astrea">Astrea</option>
                  <option value="Ataco">Ataco</option>
                  <option value="Atrato">Atrato</option>
                  <option value="Ayapel">Ayapel</option>
                  <option value="Bagadó">Bagadó</option>
                  <option value="Bahía Solano">Bahía Solano</option>
                  <option value="Bajo Baudó">Bajo Baudó</option>
                  <option value="Balboa">Balboa</option>
                  <option value="Balboa">Balboa</option>
                  <option value="Baranoa">Baranoa</option>
                  <option value="Baraya">Baraya</option>
                  <option value="Barbacoas">Barbacoas</option>
                  <option value="Barbosa">Barbosa</option>
                  <option value="Barbosa">Barbosa</option>
                  <option value="Barichara">Barichara</option>
                  <option value="Barranca de Upía">Barranca de Upía</option>
                  <option value="Barrancabermeja">Barrancabermeja</option>
                  <option value="Barrancas">Barrancas</option>
                  <option value="Barranco de Loba">Barranco de Loba</option>
                  <option value="Barranco Minas">Barranco Minas</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Becerril">Becerril</option>
                  <option value="Belalcázar">Belalcázar</option>
                  <option value="Belén">Belén</option>
                  <option value="Belén">Belén</option>
                  <option value="Belén de Bajirá">Belén de Bajirá</option>
                  <option value="Belén de Los Andaquies">Belén de Los Andaquies</option>
                  <option value="Belén de Umbría">Belén de Umbría</option>
                  <option value="Bello">Bello</option>
                  <option value="Belmira">Belmira</option>
                  <option value="Beltrán">Beltrán</option>
                  <option value="Berbeo">Berbeo</option>
                  <option value="Betania">Betania</option>
                  <option value="Betéitiva">Betéitiva</option>
                  <option value="Betulia">Betulia</option>
                  <option value="Betulia">Betulia</option>
                  <option value="Bituima">Bituima</option>
                  <option value="Boavita">Boavita</option>
                  <option value="Bochalema">Bochalema</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bojacá">Bojacá</option>
                  <option value="Bojaya">Bojaya</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bosconia">Bosconia</option>
                  <option value="Boyacá">Boyacá</option>
                  <option value="Briceño">Briceño</option>
                  <option value="Briceño">Briceño</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Bucarasica">Bucarasica</option>
                  <option value="Buenaventura">Buenaventura</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Buesaco">Buesaco</option>
                  <option value="Buga">Buga</option>
                  <option value="Bugalagrande">Bugalagrande</option>
                  <option value="Buriticá">Buriticá</option>
                  <option value="Busbanzá">Busbanzá</option>
                  <option value="Cabrera">Cabrera</option>
                  <option value="Cabrera">Cabrera</option>
                  <option value="Cabuyaro">Cabuyaro</option>
                  <option value="Cacahual">Cacahual</option>
                  <option value="Cáceres">Cáceres</option>
                  <option value="Cachipay">Cachipay</option>
                  <option value="Cachirá">Cachirá</option>
                  <option value="Cácota">Cácota</option>
                  <option value="Caicedo">Caicedo</option>
                  <option value="Caicedonia">Caicedonia</option>
                  <option value="Caimito">Caimito</option>
                  <option value="Cajamarca">Cajamarca</option>
                  <option value="Cajibío">Cajibío</option>
                  <option value="Cajicá">Cajicá</option>
                  <option value="Calamar">Calamar</option>
                  <option value="Calamar">Calamar</option>
                  <option value="Calarca">Calarca</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caldono">Caldono</option>
                  <option value="Cali">Cali</option>
                  <option value="California">California</option>
                  <option value="Calima">Calima</option>
                  <option value="Caloto">Caloto</option>
                  <option value="Campamento">Campamento</option>
                  <option value="Campo de la Cruz">Campo de la Cruz</option>
                  <option value="Campoalegre">Campoalegre</option>
                  <option value="Campohermoso">Campohermoso</option>
                  <option value="Canalete">Canalete</option>
                  <option value="Cañasgordas">Cañasgordas</option>
                  <option value="Candelaria">Candelaria</option>
                  <option value="Candelaria">Candelaria</option>
                  <option value="Cantagallo">Cantagallo</option>
                  <option value="Caparrapí">Caparrapí</option>
                  <option value="Capitanejo">Capitanejo</option>
                  <option value="Caqueza">Caqueza</option>
                  <option value="Caracolí">Caracolí</option>
                  <option value="Caramanta">Caramanta</option>
                  <option value="Carcasí">Carcasí</option>
                  <option value="Carepa">Carepa</option>
                  <option value="Carmen de Apicalá">Carmen de Apicalá</option>
                  <option value="Carmen de Carupa">Carmen de Carupa</option>
                  <option value="Carmen del Darien">Carmen del Darien</option>
                  <option value="Carolina">Carolina</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Cartagena del Chairá">Cartagena del Chairá</option>
                  <option value="Cartago">Cartago</option>
                  <option value="Caruru">Caruru</option>
                  <option value="Casabianca">Casabianca</option>
                  <option value="Castilla La Nueva">Castilla La Nueva</option>
                  <option value="Caucasia">Caucasia</option>
                  <option value="Cepitá">Cepitá</option>
                  <option value="Cereté">Cereté</option>
                  <option value="Cerinza">Cerinza</option>
                  <option value="Cerrito">Cerrito</option>
                  <option value="Cerro San Antonio">Cerro San Antonio</option>
                  <option value="Cértegui">Cértegui</option>
                  <option value="Chachagüí">Chachagüí</option>
                  <option value="Chaguaní">Chaguaní</option>
                  <option value="Chalán">Chalán</option>
                  <option value="Chameza">Chameza</option>
                  <option value="Chaparral">Chaparral</option>
                  <option value="Charalá">Charalá</option>
                  <option value="Charta">Charta</option>
                  <option value="Chía">Chía</option>
                  <option value="Chibolo">Chibolo</option>
                  <option value="Chigorodó">Chigorodó</option>
                  <option value="Chima">Chima</option>
                  <option value="Chimá">Chimá</option>
                  <option value="Chimichagua">Chimichagua</option>
                  <option value="Chinácota">Chinácota</option>
                  <option value="Chinavita">Chinavita</option>
                  <option value="Chinchiná">Chinchiná</option>
                  <option value="Chinú">Chinú</option>
                  <option value="Chipaque">Chipaque</option>
                  <option value="Chipatá">Chipatá</option>
                  <option value="Chiquinquirá">Chiquinquirá</option>
                  <option value="Chíquiza">Chíquiza</option>
                  <option value="Chiriguaná">Chiriguaná</option>
                  <option value="Chiscas">Chiscas</option>
                  <option value="Chita">Chita</option>
                  <option value="Chitagá">Chitagá</option>
                  <option value="Chitaraque">Chitaraque</option>
                  <option value="Chivatá">Chivatá</option>
                  <option value="Chivor">Chivor</option>
                  <option value="Choachí">Choachí</option>
                  <option value="Chocontá">Chocontá</option>
                  <option value="Cicuco">Cicuco</option>
                  <option value="Ciénaga">Ciénaga</option>
                  <option value="Ciénaga de Oro">Ciénaga de Oro</option>
                  <option value="Ciénega">Ciénega</option>
                  <option value="Cimitarra">Cimitarra</option>
                  <option value="Circasia">Circasia</option>
                  <option value="Cisneros">Cisneros</option>
                  <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                  <option value="Clemencia">Clemencia</option>
                  <option value="Cocorná">Cocorná</option>
                  <option value="Coello">Coello</option>
                  <option value="Cogua">Cogua</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Colón">Colón</option>
                  <option value="Colón">Colón</option>
                  <option value="Coloso">Coloso</option>
                  <option value="Cómbita">Cómbita</option>
                  <option value="Concepción">Concepción</option>
                  <option value="Concepción">Concepción</option>
                  <option value="Concordia">Concordia</option>
                  <option value="Concordia">Concordia</option>
                  <option value="Condoto">Condoto</option>
                  <option value="Confines">Confines</option>
                  <option value="Consaca">Consaca</option>
                  <option value="Contadero">Contadero</option>
                  <option value="Contratación">Contratación</option>
                  <option value="Convención">Convención</option>
                  <option value="Copacabana">Copacabana</option>
                  <option value="Coper">Coper</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Corinto">Corinto</option>
                  <option value="Coromoro">Coromoro</option>
                  <option value="Corozal">Corozal</option>
                  <option value="Corrales">Corrales</option>
                  <option value="Cota">Cota</option>
                  <option value="Cotorra">Cotorra</option>
                  <option value="Covarachía">Covarachía</option>
                  <option value="Coveñas">Coveñas</option>
                  <option value="Coyaima">Coyaima</option>
                  <option value="Cravo Norte">Cravo Norte</option>
                  <option value="Cuaspud">Cuaspud</option>
                  <option value="Cubará">Cubará</option>
                  <option value="Cubarral">Cubarral</option>
                  <option value="Cucaita">Cucaita</option>
                  <option value="Cucunubá">Cucunubá</option>
                  <option value="Cúcuta">Cúcuta</option>
                  <option value="Cucutilla">Cucutilla</option>
                  <option value="Cuítiva">Cuítiva</option>
                  <option value="Cumaral">Cumaral</option>
                  <option value="Cumaribo">Cumaribo</option>
                  <option value="Cumbal">Cumbal</option>
                  <option value="Cumbitara">Cumbitara</option>
                  <option value="Cunday">Cunday</option>
                  <option value="Curillo">Curillo</option>
                  <option value="Curití">Curití</option>
                  <option value="Curumaní">Curumaní</option>
                  <option value="Dabeiba">Dabeiba</option>
                  <option value="Dagua">Dagua</option>
                  <option value="Dibulla">Dibulla</option>
                  <option value="Distracción">Distracción</option>
                  <option value="Dolores">Dolores</option>
                  <option value="Don Matías">Don Matías</option>
                  <option value="Dosquebradas">Dosquebradas</option>
                  <option value="Duitama">Duitama</option>
                  <option value="Durania">Durania</option>
                  <option value="Ebéjico">Ebéjico</option>
                  <option value="El Águila">El Águila</option>
                  <option value="El Bagre">El Bagre</option>
                  <option value="El Banco">El Banco</option>
                  <option value="El Cairo">El Cairo</option>
                  <option value="El Calvario">El Calvario</option>
                  <option value="El Cantón del San Pablo">El Cantón del San Pablo</option>
                  <option value="El Carmen">El Carmen</option>
                  <option value="El Carmen de Atrato">El Carmen de Atrato</option>
                  <option value="El Carmen de Bolívar">El Carmen de Bolívar</option>
                  <option value="El Carmen de Chucurí">El Carmen de Chucurí</option>
                  <option value="El Carmen de Viboral">El Carmen de Viboral</option>
                  <option value="El Castillo">El Castillo</option>
                  <option value="El Cerrito">El Cerrito</option>
                  <option value="El Charco">El Charco</option>
                  <option value="El Cocuy">El Cocuy</option>
                  <option value="El Colegio">El Colegio</option>
                  <option value="El Copey">El Copey</option>
                  <option value="El Doncello">El Doncello</option>
                  <option value="El Dorado">El Dorado</option>
                  <option value="El Dovio">El Dovio</option>
                  <option value="El encanto">El encanto</option>
                  <option value="El Espino">El Espino</option>
                  <option value="El Guacamayo">El Guacamayo</option>
                  <option value="El Guamo">El Guamo</option>
                  <option value="El Litoral del San Juan">El Litoral del San Juan</option>
                  <option value="El Molino">El Molino</option>
                  <option value="El Paso">El Paso</option>
                  <option value="El Paujil">El Paujil</option>
                  <option value="El Peñol">El Peñol</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Piñon">El Piñon</option>
                  <option value="El Playón">El Playón</option>
                  <option value="El Retén">El Retén</option>
                  <option value="El Retorno">El Retorno</option>
                  <option value="El Roble">El Roble</option>
                  <option value="El Rosal">El Rosal</option>
                  <option value="El Rosario">El Rosario</option>
                  <option value="El Santuario">El Santuario</option>
                  <option value="El Tablón de Gómez">El Tablón de Gómez</option>
                  <option value="El Tambo">El Tambo</option>
                  <option value="El Tambo">El Tambo</option>
                  <option value="El Tarra">El Tarra</option>
                  <option value="El Zulia">El Zulia</option>
                  <option value="Elías">Elías</option>
                  <option value="Encino">Encino</option>
                  <option value="Enciso">Enciso</option>
                  <option value="Entrerrios">Entrerrios</option>
                  <option value="Envigado">Envigado</option>
                  <option value="Espinal">Espinal</option>
                  <option value="Facatativá">Facatativá</option>
                  <option value="Falan">Falan</option>
                  <option value="Filadelfia">Filadelfia</option>
                  <option value="Filandia">Filandia</option>
                  <option value="Firavitoba">Firavitoba</option>
                  <option value="Flandes">Flandes</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Floresta">Floresta</option>
                  <option value="Florián">Florián</option>
                  <option value="Florida">Florida</option>
                  <option value="Floridablanca">Floridablanca</option>
                  <option value="Fomeque">Fomeque</option>
                  <option value="Fonseca">Fonseca</option>
                  <option value="Fortul">Fortul</option>
                  <option value="Fosca">Fosca</option>
                  <option value="Francisco Pizarro">Francisco Pizarro</option>
                  <option value="Fredonia">Fredonia</option>
                  <option value="Fresno">Fresno</option>
                  <option value="Frontino">Frontino</option>
                  <option value="Fuente de Oro">Fuente de Oro</option>
                  <option value="Fundación">Fundación</option>
                  <option value="Funes">Funes</option>
                  <option value="Funza">Funza</option>
                  <option value="Fúquene">Fúquene</option>
                  <option value="Fusagasugá">Fusagasugá</option>
                  <option value="Gachala">Gachala</option>
                  <option value="Gachancipá">Gachancipá</option>
                  <option value="Gachantivá">Gachantivá</option>
                  <option value="Gachetá">Gachetá</option>
                  <option value="Galán">Galán</option>
                  <option value="Galapa">Galapa</option>
                  <option value="Galeras">Galeras</option>
                  <option value="Gama">Gama</option>
                  <option value="Gamarra">Gamarra</option>
                  <option value="Gambita">Gambita</option>
                  <option value="Gameza">Gameza</option>
                  <option value="Garagoa">Garagoa</option>
                  <option value="Garzón">Garzón</option>
                  <option value="Génova">Génova</option>
                  <option value="Gigante">Gigante</option>
                  <option value="Ginebra">Ginebra</option>
                  <option value="Giraldo">Giraldo</option>
                  <option value="Girardot">Girardot</option>
                  <option value="Girardota">Girardota</option>
                  <option value="Girón">Girón</option>
                  <option value="Gómez Plata">Gómez Plata</option>
                  <option value="González">González</option>
                  <option value="Gramalote">Gramalote</option>
                  <option value="Granada">Granada</option>
                  <option value="Granada">Granada</option>
                  <option value="Granada">Granada</option>
                  <option value="Guaca">Guaca</option>
                  <option value="Guacamayas">Guacamayas</option>
                  <option value="Guacarí">Guacarí</option>
                  <option value="Guachetá">Guachetá</option>
                  <option value="Guachucal">Guachucal</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guaduas">Guaduas</option>
                  <option value="Guaitarilla">Guaitarilla</option>
                  <option value="Gualmatán">Gualmatán</option>
                  <option value="Guamal">Guamal</option>
                  <option value="Guamal">Guamal</option>
                  <option value="Guamo">Guamo</option>
                  <option value="Guapi">Guapi</option>
                  <option value="Guapotá">Guapotá</option>
                  <option value="Guaranda">Guaranda</option>
                  <option value="Guarne">Guarne</option>
                  <option value="Guasca">Guasca</option>
                  <option value="Guatape">Guatape</option>
                  <option value="Guataquí">Guataquí</option>
                  <option value="Guatavita">Guatavita</option>
                  <option value="Guateque">Guateque</option>
                  <option value="Guática">Guática</option>
                  <option value="Guavatá">Guavatá</option>
                  <option value="Guayabal de Siquima">Guayabal de Siquima</option>
                  <option value="Guayabetal">Guayabetal</option>
                  <option value="Guayatá">Guayatá</option>
                  <option value="Güepsa">Güepsa</option>
                  <option value="Güicán">Güicán</option>
                  <option value="Gutiérrez">Gutiérrez</option>
                  <option value="Hacarí">Hacarí</option>
                  <option value="Hatillo de Loba">Hatillo de Loba</option>
                  <option value="Hato">Hato</option>
                  <option value="Hato Corozal">Hato Corozal</option>
                  <option value="Hatonuevo">Hatonuevo</option>
                  <option value="Heliconia">Heliconia</option>
                  <option value="Herrán">Herrán</option>
                  <option value="Herveo">Herveo</option>
                  <option value="Hispania">Hispania</option>
                  <option value="Hobo">Hobo</option>
                  <option value="Honda">Honda</option>
                  <option value="Ibagué">Ibagué</option>
                  <option value="Icononzo">Icononzo</option>
                  <option value="Iles">Iles</option>
                  <option value="Imués">Imués</option>
                  <option value="Inírida">Inírida</option>
                  <option value="Inzá">Inzá</option>
                  <option value="Ipiales">Ipiales</option>
                  <option value="Iquira">Iquira</option>
                  <option value="Isnos">Isnos</option>
                  <option value="Istmina">Istmina</option>
                  <option value="Itagui">Itagui</option>
                  <option value="Ituango">Ituango</option>
                  <option value="Iza">Iza</option>
                  <option value="Jambaló">Jambaló</option>
                  <option value="Jamundí">Jamundí</option>
                  <option value="Jardín">Jardín</option>
                  <option value="Jenesano">Jenesano</option>
                  <option value="Jericó">Jericó</option>
                  <option value="Jericó">Jericó</option>
                  <option value="Jerusalén">Jerusalén</option>
                  <option value="Jesús María">Jesús María</option>
                  <option value="Jordán">Jordán</option>
                  <option value="Juan de Acosta">Juan de Acosta</option>
                  <option value="Junín">Junín</option>
                  <option value="Juradó">Juradó</option>
                  <option value="La Apartada">La Apartada</option>
                  <option value="La Argentina">La Argentina</option>
                  <option value="La Belleza">La Belleza</option>
                  <option value="La Calera">La Calera</option>
                  <option value="La Capilla">La Capilla</option>
                  <option value="La Ceja">La Ceja</option>
                  <option value="La Celia">La Celia</option>
                  <option value="La chorrera">La chorrera</option>
                  <option value="La Cruz">La Cruz</option>
                  <option value="La Cumbre">La Cumbre</option>
                  <option value="La Dorada">La Dorada</option>
                  <option value="La Esperanza">La Esperanza</option>
                  <option value="La Estrella">La Estrella</option>
                  <option value="La Florida">La Florida</option>
                  <option value="La Gloria">La Gloria</option>
                  <option value="La Guadalupe">La Guadalupe</option>
                  <option value="La Jagua de Ibirico">La Jagua de Ibirico</option>
                  <option value="La Jagua del Pilar">La Jagua del Pilar</option>
                  <option value="La Llanada">La Llanada</option>
                  <option value="La Macarena">La Macarena</option>
                  <option value="La Merced">La Merced</option>
                  <option value="La Mesa">La Mesa</option>
                  <option value="La Montañita">La Montañita</option>
                  <option value="La Palma">La Palma</option>
                  <option value="La Paz">La Paz</option>
                  <option value="La Paz">La Paz</option>
                  <option value="La pedrera">La pedrera</option>
                  <option value="La Peña">La Peña</option>
                  <option value="La Pintada">La Pintada</option>
                  <option value="La Plata">La Plata</option>
                  <option value="La Playa">La Playa</option>
                  <option value="La Primavera">La Primavera</option>
                  <option value="La Salina">La Salina</option>
                  <option value="La Sierra">La Sierra</option>
                  <option value="La Tebaida">La Tebaida</option>
                  <option value="La Tola">La Tola</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Uvita">La Uvita</option>
                  <option value="La Vega">La Vega</option>
                  <option value="La Vega">La Vega</option>
                  <option value="La Victoria">La Victoria</option>
                  <option value="La Victoria">La Victoria</option>
                  <option value="La victoria">La victoria</option>
                  <option value="La Virginia">La Virginia</option>
                  <option value="Labateca">Labateca</option>
                  <option value="Labranzagrande">Labranzagrande</option>
                  <option value="Landázuri">Landázuri</option>
                  <option value="Lebríja">Lebríja</option>
                  <option value="Leguízamo">Leguízamo</option>
                  <option value="Leiva">Leiva</option>
                  <option value="Lejanías">Lejanías</option>
                  <option value="Lenguazaque">Lenguazaque</option>
                  <option value="Lérida">Lérida</option>
                  <option value="Leticia">Leticia</option>
                  <option value="Líbano">Líbano</option>
                  <option value="Liborina">Liborina</option>
                  <option value="Linares">Linares</option>
                  <option value="Lloró">Lloró</option>
                  <option value="López">López</option>
                  <option value="Lorica">Lorica</option>
                  <option value="Los Andes">Los Andes</option>
                  <option value="Los Córdobas">Los Córdobas</option>
                  <option value="Los Palmitos">Los Palmitos</option>
                  <option value="Los Patios">Los Patios</option>
                  <option value="Los Santos">Los Santos</option>
                  <option value="Lourdes">Lourdes</option>
                  <option value="Luruaco">Luruaco</option>
                  <option value="Macanal">Macanal</option>
                  <option value="Macaravita">Macaravita</option>
                  <option value="Maceo">Maceo</option>
                  <option value="Macheta">Macheta</option>
                  <option value="Madrid">Madrid</option>
                  <option value="Magangué">Magangué</option>
                  <option value="Magüi">Magüi</option>
                  <option value="Mahates">Mahates</option>
                  <option value="Maicao">Maicao</option>
                  <option value="Majagual">Majagual</option>
                  <option value="Málaga">Málaga</option>
                  <option value="Malambo">Malambo</option>
                  <option value="Mallama">Mallama</option>
                  <option value="Manatí">Manatí</option>
                  <option value="Manaure">Manaure</option>
                  <option value="Manaure">Manaure</option>
                  <option value="Maní">Maní</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Manta">Manta</option>
                  <option value="Manzanares">Manzanares</option>
                  <option value="Mapiripán">Mapiripán</option>
                  <option value="Mapiripana">Mapiripana</option>
                  <option value="Margarita">Margarita</option>
                  <option value="María La Baja">María La Baja</option>
                  <option value="Marinilla">Marinilla</option>
                  <option value="Maripí">Maripí</option>
                  <option value="Mariquita">Mariquita</option>
                  <option value="Marmato">Marmato</option>
                  <option value="Marquetalia">Marquetalia</option>
                  <option value="Marsella">Marsella</option>
                  <option value="Marulanda">Marulanda</option>
                  <option value="Matanza">Matanza</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Medina">Medina</option>
                  <option value="Medio Atrato">Medio Atrato</option>
                  <option value="Medio Baudó">Medio Baudó</option>
                  <option value="Medio San Juan">Medio San Juan</option>
                  <option value="Melgar">Melgar</option>
                  <option value="Mercaderes">Mercaderes</option>
                  <option value="Mesetas">Mesetas</option>
                  <option value="Milán">Milán</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="Miranda">Miranda</option>
                  <option value="Miriti Paraná">Miriti Paraná</option>
                  <option value="Mistrató">Mistrató</option>
                  <option value="Mitú">Mitú</option>
                  <option value="Mocoa">Mocoa</option>
                  <option value="Mogotes">Mogotes</option>
                  <option value="Molagavita">Molagavita</option>
                  <option value="Momil">Momil</option>
                  <option value="Mompós">Mompós</option>
                  <option value="Mongua">Mongua</option>
                  <option value="Monguí">Monguí</option>
                  <option value="Moniquirá">Moniquirá</option>
                  <option value="Moñitos">Moñitos</option>
                  <option value="Montebello">Montebello</option>
                  <option value="Montecristo">Montecristo</option>
                  <option value="Montelíbano">Montelíbano</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montería">Montería</option>
                  <option value="Monterrey">Monterrey</option>
                  <option value="Morales">Morales</option>
                  <option value="Morales">Morales</option>
                  <option value="Morelia">Morelia</option>
                  <option value="Morichal">Morichal</option>
                  <option value="Morroa">Morroa</option>
                  <option value="Mosquera">Mosquera</option>
                  <option value="Mosquera">Mosquera</option>
                  <option value="Motavita">Motavita</option>
                  <option value="Murillo">Murillo</option>
                  <option value="Murindó">Murindó</option>
                  <option value="Mutatá">Mutatá</option>
                  <option value="Mutiscua">Mutiscua</option>
                  <option value="Muzo">Muzo</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nátaga">Nátaga</option>
                  <option value="Natagaima">Natagaima</option>
                  <option value="Nechí">Nechí</option>
                  <option value="Necoclí">Necoclí</option>
                  <option value="Neira">Neira</option>
                  <option value="Neiva">Neiva</option>
                  <option value="Nemocón">Nemocón</option>
                  <option value="Nilo">Nilo</option>
                  <option value="Nimaima">Nimaima</option>
                  <option value="Nobsa">Nobsa</option>
                  <option value="Nocaima">Nocaima</option>
                  <option value="Norcasia">Norcasia</option>
                  <option value="Nóvita">Nóvita</option>
                  <option value="Nueva Granada">Nueva Granada</option>
                  <option value="Nuevo Colón">Nuevo Colón</option>
                  <option value="Nunchía">Nunchía</option>
                  <option value="Nuquí">Nuquí</option>
                  <option value="Obando">Obando</option>
                  <option value="Ocamonte">Ocamonte</option>
                  <option value="Ocaña">Ocaña</option>
                  <option value="Oiba">Oiba</option>
                  <option value="Oicatá">Oicatá</option>
                  <option value="Olaya">Olaya</option>
                  <option value="Olaya Herrera">Olaya Herrera</option>
                  <option value="Onzaga">Onzaga</option>
                  <option value="Oporapa">Oporapa</option>
                  <option value="Orito">Orito</option>
                  <option value="Orocué">Orocué</option>
                  <option value="Ortega">Ortega</option>
                  <option value="Ospina">Ospina</option>
                  <option value="Otanche">Otanche</option>
                  <option value="Ovejas">Ovejas</option>
                  <option value="Pachavita">Pachavita</option>
                  <option value="Pacho">Pacho</option>
                  <option value="Pacoa">Pacoa</option>
                  <option value="Pácora">Pácora</option>
                  <option value="Padilla">Padilla</option>
                  <option value="Paez">Paez</option>
                  <option value="Páez">Páez</option>
                  <option value="Paicol">Paicol</option>
                  <option value="Pailitas">Pailitas</option>
                  <option value="Paime">Paime</option>
                  <option value="Paipa">Paipa</option>
                  <option value="Pajarito">Pajarito</option>
                  <option value="Palermo">Palermo</option>
                  <option value="Palestina">Palestina</option>
                  <option value="Palestina">Palestina</option>
                  <option value="Palmar">Palmar</option>
                  <option value="Palmar de Varela">Palmar de Varela</option>
                  <option value="Palmas del Socorro">Palmas del Socorro</option>
                  <option value="Palmira">Palmira</option>
                  <option value="Palmito">Palmito</option>
                  <option value="Palocabildo">Palocabildo</option>
                  <option value="Pamplona">Pamplona</option>
                  <option value="Pamplonita">Pamplonita</option>
                  <option value="Pana Pana">Pana Pana</option>
                  <option value="Pandi">Pandi</option>
                  <option value="Panqueba">Panqueba</option>
                  <option value="Papunaua">Papunaua</option>
                  <option value="Páramo">Páramo</option>
                  <option value="Paratebueno">Paratebueno</option>
                  <option value="Pasca">Pasca</option>
                  <option value="Pasto">Pasto</option>
                  <option value="Patía">Patía</option>
                  <option value="Pauna">Pauna</option>
                  <option value="Paya">Paya</option>
                  <option value="Paz de Ariporo">Paz de Ariporo</option>
                  <option value="Paz de Río">Paz de Río</option>
                  <option value="Pedraza">Pedraza</option>
                  <option value="Pelaya">Pelaya</option>
                  <option value="Peñol">Peñol</option>
                  <option value="Pensilvania">Pensilvania</option>
                  <option value="Peque">Peque</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Pesca">Pesca</option>
                  <option value="Piamonte">Piamonte</option>
                  <option value="Piedecuesta">Piedecuesta</option>
                  <option value="Piedras">Piedras</option>
                  <option value="Piendamó">Piendamó</option>
                  <option value="Pijao">Pijao</option>
                  <option value="Pijiño del Carmen">Pijiño del Carmen</option>
                  <option value="Pinchote">Pinchote</option>
                  <option value="Pinillos">Pinillos</option>
                  <option value="Piojó">Piojó</option>
                  <option value="Pisba">Pisba</option>
                  <option value="Pital">Pital</option>
                  <option value="Pitalito">Pitalito</option>
                  <option value="Pivijay">Pivijay</option>
                  <option value="Planadas">Planadas</option>
                  <option value="Planeta Rica">Planeta Rica</option>
                  <option value="Plato">Plato</option>
                  <option value="Policarpa">Policarpa</option>
                  <option value="Polonuevo">Polonuevo</option>
                  <option value="Ponedera">Ponedera</option>
                  <option value="Popayán">Popayán</option>
                  <option value="Pore">Pore</option>
                  <option value="Potosí">Potosí</option>
                  <option value="Pradera">Pradera</option>
                  <option value="Prado">Prado</option>
                  <option value="Providencia">Providencia</option>
                  <option value="Providencia">Providencia</option>
                  <option value="Pueblo Bello">Pueblo Bello</option>
                  <option value="Pueblo Nuevo">Pueblo Nuevo</option>
                  <option value="Pueblo Rico">Pueblo Rico</option>
                  <option value="Pueblorrico">Pueblorrico</option>
                  <option value="Puebloviejo">Puebloviejo</option>
                  <option value="Puente Nacional">Puente Nacional</option>
                  <option value="Puerres">Puerres</option>
                  <option value="Puerto Alegría">Puerto Alegría</option>
                  <option value="Puerto Arica">Puerto Arica</option>
                  <option value="Puerto Asís">Puerto Asís</option>
                  <option value="Puerto Berrío">Puerto Berrío</option>
                  <option value="Puerto Boyacá">Puerto Boyacá</option>
                  <option value="Puerto Caicedo">Puerto Caicedo</option>
                  <option value="Puerto Carreño">Puerto Carreño</option>
                  <option value="Puerto Colombia">Puerto Colombia</option>
                  <option value="Puerto Colombia">Puerto Colombia</option>
                  <option value="Puerto Concordia">Puerto Concordia</option>
                  <option value="Puerto Escondido">Puerto Escondido</option>
                  <option value="Puerto Gaitán">Puerto Gaitán</option>
                  <option value="Puerto Guzmán">Puerto Guzmán</option>
                  <option value="Puerto Libertador">Puerto Libertador</option>
                  <option value="Puerto Lleras">Puerto Lleras</option>
                  <option value="Puerto López">Puerto López</option>
                  <option value="Puerto Nare">Puerto Nare</option>
                  <option value="Puerto Nariño">Puerto Nariño</option>
                  <option value="Puerto Parra">Puerto Parra</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Puerto Rondón">Puerto Rondón</option>
                  <option value="Puerto Salgar">Puerto Salgar</option>
                  <option value="Puerto Santander">Puerto Santander</option>
                  <option value="Puerto Santander">Puerto Santander</option>
                  <option value="Puerto Tejada">Puerto Tejada</option>
                  <option value="Puerto Triunfo">Puerto Triunfo</option>
                  <option value="Puerto Wilches">Puerto Wilches</option>
                  <option value="Pulí">Pulí</option>
                  <option value="Pupiales">Pupiales</option>
                  <option value="Puracé">Puracé</option>
                  <option value="Purificación">Purificación</option>
                  <option value="Purísima">Purísima</option>
                  <option value="Quebradanegra">Quebradanegra</option>
                  <option value="Quetame">Quetame</option>
                  <option value="Quibdó">Quibdó</option>
                  <option value="Quimbaya">Quimbaya</option>
                  <option value="Quinchía">Quinchía</option>
                  <option value="Quípama">Quípama</option>
                  <option value="Quipile">Quipile</option>
                  <option value="Ragonvalia">Ragonvalia</option>
                  <option value="Ramiriquí">Ramiriquí</option>
                  <option value="Ráquira">Ráquira</option>
                  <option value="Recetor">Recetor</option>
                  <option value="Regidor">Regidor</option>
                  <option value="Remedios">Remedios</option>
                  <option value="Remolino">Remolino</option>
                  <option value="Repelón">Repelón</option>
                  <option value="Restrepo">Restrepo</option>
                  <option value="Restrepo">Restrepo</option>
                  <option value="Retiro">Retiro</option>
                  <option value="Ricaurte">Ricaurte</option>
                  <option value="Ricaurte">Ricaurte</option>
                  <option value="Río de Oro">Río de Oro</option>
                  <option value="Río Iro">Río Iro</option>
                  <option value="Río Quito">Río Quito</option>
                  <option value="Río Viejo">Río Viejo</option>
                  <option value="Rioblanco">Rioblanco</option>
                  <option value="Riofrío">Riofrío</option>
                  <option value="Riohacha">Riohacha</option>
                  <option value="Rionegro">Rionegro</option>
                  <option value="Rionegro">Rionegro</option>
                  <option value="Riosucio">Riosucio</option>
                  <option value="Riosucio">Riosucio</option>
                  <option value="Risaralda">Risaralda</option>
                  <option value="Rivera">Rivera</option>
                  <option value="Roberto Payán">Roberto Payán</option>
                  <option value="Roldanillo">Roldanillo</option>
                  <option value="Roncesvalles">Roncesvalles</option>
                  <option value="Rondón">Rondón</option>
                  <option value="Rosas">Rosas</option>
                  <option value="Rovira">Rovira</option>
                  <option value="Sabana de Torres">Sabana de Torres</option>
                  <option value="Sabanagrande">Sabanagrande</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanas de San Angel">Sabanas de San Angel</option>
                  <option value="Sabaneta">Sabaneta</option>
                  <option value="Saboyá">Saboyá</option>
                  <option value="Sácama">Sácama</option>
                  <option value="Sáchica">Sáchica</option>
                  <option value="Sahagún">Sahagún</option>
                  <option value="Saladoblanco">Saladoblanco</option>
                  <option value="Salamina">Salamina</option>
                  <option value="Salamina">Salamina</option>
                  <option value="Salazar">Salazar</option>
                  <option value="Saldaña">Saldaña</option>
                  <option value="Salento">Salento</option>
                  <option value="Salgar">Salgar</option>
                  <option value="Samacá">Samacá</option>
                  <option value="Samaná">Samaná</option>
                  <option value="Samaniego">Samaniego</option>
                  <option value="Sampués">Sampués</option>
                  <option value="San Agustín">San Agustín</option>
                  <option value="San Alberto">San Alberto</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés Sotavento">San Andrés Sotavento</option>
                  <option value="San Antero">San Antero</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="San Antonio del Tequendama">San Antonio del Tequendama</option>
                  <option value="San Benito">San Benito</option>
                  <option value="San Benito Abad">San Benito Abad</option>
                  <option value="San Bernardo">San Bernardo</option>
                  <option value="San Bernardo">San Bernardo</option>
                  <option value="San Bernardo del Viento">San Bernardo del Viento</option>
                  <option value="San Calixto">San Calixto</option>
                  <option value="San Carlos">San Carlos</option>
                  <option value="San Carlos">San Carlos</option>
                  <option value="San Carlos de Guaroa">San Carlos de Guaroa</option>
                  <option value="San Cayetano">San Cayetano</option>
                  <option value="San Cayetano">San Cayetano</option>
                  <option value="San Cristóbal">San Cristóbal</option>
                  <option value="San Diego">San Diego</option>
                  <option value="San Eduardo">San Eduardo</option>
                  <option value="San Estanislao">San Estanislao</option>
                  <option value="San Felipe">San Felipe</option>
                  <option value="San Fernando">San Fernando</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Gil">San Gil</option>
                  <option value="San Jacinto">San Jacinto</option>
                  <option value="San Jacinto del Cauca">San Jacinto del Cauca</option>
                  <option value="San Jerónimo">San Jerónimo</option>
                  <option value="San Joaquín">San Joaquín</option>
                  <option value="San José">San José</option>
                  <option value="San José de la Montaña">San José de la Montaña</option>
                  <option value="San José de Miranda">San José de Miranda</option>
                  <option value="San José de Pare">San José de Pare</option>
                  <option value="San José del Fragua">San José del Fragua</option>
                  <option value="San José del Guaviare">San José del Guaviare</option>
                  <option value="San José del Palmar">San José del Palmar</option>
                  <option value="San Juan de Arama">San Juan de Arama</option>
                  <option value="San Juan de Betulia">San Juan de Betulia</option>
                  <option value="San Juan de Río Seco">San Juan de Río Seco</option>
                  <option value="San Juan de Urabá">San Juan de Urabá</option>
                  <option value="San Juan del Cesar">San Juan del Cesar</option>
                  <option value="San Juan Nepomuceno">San Juan Nepomuceno</option>
                  <option value="San Juanito">San Juanito</option>
                  <option value="San Lorenzo">San Lorenzo</option>
                  <option value="San Luis">San Luis</option>
                  <option value="San Luis">San Luis</option>
                  <option value="San Luis de Gaceno">San Luis de Gaceno</option>
                  <option value="San Luis de Palenque">San Luis de Palenque</option>
                  <option value="San Marcos">San Marcos</option>
                  <option value="San Martín">San Martín</option>
                  <option value="San Martín">San Martín</option>
                  <option value="San Martín de Loba">San Martín de Loba</option>
                  <option value="San Mateo">San Mateo</option>
                  <option value="San Miguel">San Miguel</option>
                  <option value="San Miguel">San Miguel</option>
                  <option value="San Miguel de Sema">San Miguel de Sema</option>
                  <option value="San Onofre">San Onofre</option>
                  <option value="San Pablo">San Pablo</option>
                  <option value="San Pablo">San Pablo</option>
                  <option value="San Pablo de Borbur">San Pablo de Borbur</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro de Cartago">San Pedro de Cartago</option>
                  <option value="San Pedro de Uraba">San Pedro de Uraba</option>
                  <option value="San Pelayo">San Pelayo</option>
                  <option value="San Rafael">San Rafael</option>
                  <option value="San Roque">San Roque</option>
                  <option value="San Sebastián">San Sebastián</option>
                  <option value="San Sebastián de Buenavista">San Sebastián de Buenavista</option>
                  <option value="San Vicente">San Vicente</option>
                  <option value="San Vicente de Chucurí">San Vicente de Chucurí</option>
                  <option value="San Vicente del Caguán">San Vicente del Caguán</option>
                  <option value="San Zenón">San Zenón</option>
                  <option value="Sandoná">Sandoná</option>
                  <option value="Santa Ana">Santa Ana</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara de Pinto">Santa Bárbara de Pinto</option>
                  <option value="Santa Catalina">Santa Catalina</option>
                  <option value="Santa Helena del Opón">Santa Helena del Opón</option>
                  <option value="Santa Isabel">Santa Isabel</option>
                  <option value="Santa Lucía">Santa Lucía</option>
                  <option value="Santa María">Santa María</option>
                  <option value="Santa María">Santa María</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Santa Rosa">Santa Rosa</option>
                  <option value="Santa Rosa">Santa Rosa</option>
                  <option value="Santa Rosa de Cabal">Santa Rosa de Cabal</option>
                  <option value="Santa Rosa de Osos">Santa Rosa de Osos</option>
                  <option value="Santa Rosa de Viterbo">Santa Rosa de Viterbo</option>
                  <option value="Santa Rosa del Sur">Santa Rosa del Sur</option>
                  <option value="Santa Rosalía">Santa Rosalía</option>
                  <option value="Santa Sofía">Santa Sofía</option>
                  <option value="Santacruz">Santacruz</option>
                  <option value="Santafé de Antioquia">Santafé de Antioquia</option>
                  <option value="Santana">Santana</option>
                  <option value="Santander de Quilichao">Santander de Quilichao</option>
                  <option value="Santiago">Santiago</option>
                  <option value="Santiago">Santiago</option>
                  <option value="Santiago de Tolú">Santiago de Tolú</option>
                  <option value="Santo Domingo">Santo Domingo</option>
                  <option value="Santo Tomás">Santo Tomás</option>
                  <option value="Santuario">Santuario</option>
                  <option value="Sapuyes">Sapuyes</option>
                  <option value="Saravena">Saravena</option>
                  <option value="Sardinata">Sardinata</option>
                  <option value="Sasaima">Sasaima</option>
                  <option value="Sativanorte">Sativanorte</option>
                  <option value="Sativasur">Sativasur</option>
                  <option value="Segovia">Segovia</option>
                  <option value="Sesquilé">Sesquilé</option>
                  <option value="Sevilla">Sevilla</option>
                  <option value="Siachoque">Siachoque</option>
                  <option value="Sibaté">Sibaté</option>
                  <option value="Sibundoy">Sibundoy</option>
                  <option value="Silos">Silos</option>
                  <option value="Silvania">Silvania</option>
                  <option value="Silvia">Silvia</option>
                  <option value="Simacota">Simacota</option>
                  <option value="Simijaca">Simijaca</option>
                  <option value="Simití">Simití</option>
                  <option value="Sincé">Sincé</option>
                  <option value="Sincelejo">Sincelejo</option>
                  <option value="Sipí">Sipí</option>
                  <option value="Sitionuevo">Sitionuevo</option>
                  <option value="Soacha">Soacha</option>
                  <option value="Soatá">Soatá</option>
                  <option value="Socha">Socha</option>
                  <option value="Socorro">Socorro</option>
                  <option value="Socotá">Socotá</option>
                  <option value="Sogamoso">Sogamoso</option>
                  <option value="Solano">Solano</option>
                  <option value="Soledad">Soledad</option>
                  <option value="Solita">Solita</option>
                  <option value="Somondoco">Somondoco</option>
                  <option value="Sonson">Sonson</option>
                  <option value="Sopetrán">Sopetrán</option>
                  <option value="Soplaviento">Soplaviento</option>
                  <option value="Sopó">Sopó</option>
                  <option value="Sora">Sora</option>
                  <option value="Soracá">Soracá</option>
                  <option value="Sotaquirá">Sotaquirá</option>
                  <option value="Sotara">Sotara</option>
                  <option value="Suaita">Suaita</option>
                  <option value="Suan">Suan</option>
                  <option value="Suárez">Suárez</option>
                  <option value="Suárez">Suárez</option>
                  <option value="Suaza">Suaza</option>
                  <option value="Subachoque">Subachoque</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Suesca">Suesca</option>
                  <option value="Supatá">Supatá</option>
                  <option value="Supía">Supía</option>
                  <option value="Suratá">Suratá</option>
                  <option value="Susa">Susa</option>
                  <option value="Susacón">Susacón</option>
                  <option value="Sutamarchán">Sutamarchán</option>
                  <option value="Sutatausa">Sutatausa</option>
                  <option value="Sutatenza">Sutatenza</option>
                  <option value="Tabio">Tabio</option>
                  <option value="Tadó">Tadó</option>
                  <option value="Talaigua Nuevo">Talaigua Nuevo</option>
                  <option value="Tamalameque">Tamalameque</option>
                  <option value="Támara">Támara</option>
                  <option value="Tame">Tame</option>
                  <option value="Támesis">Támesis</option>
                  <option value="Taminango">Taminango</option>
                  <option value="Tangua">Tangua</option>
                  <option value="Taraira">Taraira</option>
                  <option value="Tarapacá">Tarapacá</option>
                  <option value="Tarazá">Tarazá</option>
                  <option value="Tarqui">Tarqui</option>
                  <option value="Tarso">Tarso</option>
                  <option value="Tasco">Tasco</option>
                  <option value="Tauramena">Tauramena</option>
                  <option value="Tausa">Tausa</option>
                  <option value="Tello">Tello</option>
                  <option value="Tena">Tena</option>
                  <option value="Tenerife">Tenerife</option>
                  <option value="Tenjo">Tenjo</option>
                  <option value="Tenza">Tenza</option>
                  <option value="Teorama">Teorama</option>
                  <option value="Teruel">Teruel</option>
                  <option value="Tesalia">Tesalia</option>
                  <option value="Tibacuy">Tibacuy</option>
                  <option value="Tibaná">Tibaná</option>
                  <option value="Tibasosa">Tibasosa</option>
                  <option value="Tibirita">Tibirita</option>
                  <option value="Tibú">Tibú</option>
                  <option value="Tierralta">Tierralta</option>
                  <option value="Timaná">Timaná</option>
                  <option value="Timbío">Timbío</option>
                  <option value="Timbiquí">Timbiquí</option>
                  <option value="Tinjacá">Tinjacá</option>
                  <option value="Tipacoque">Tipacoque</option>
                  <option value="Tiquisio">Tiquisio</option>
                  <option value="Titiribí">Titiribí</option>
                  <option value="Toca">Toca</option>
                  <option value="Tocaima">Tocaima</option>
                  <option value="Tocancipá">Tocancipá</option>
                  <option value="Togüí">Togüí</option>
                  <option value="Toledo">Toledo</option>
                  <option value="Toledo">Toledo</option>
                  <option value="Tolú Viejo">Tolú Viejo</option>
                  <option value="Tona">Tona</option>
                  <option value="Tópaga">Tópaga</option>
                  <option value="Topaipí">Topaipí</option>
                  <option value="Toribio">Toribio</option>
                  <option value="Toro">Toro</option>
                  <option value="Tota">Tota</option>
                  <option value="Totoró">Totoró</option>
                  <option value="Trinidad">Trinidad</option>
                  <option value="Trujillo">Trujillo</option>
                  <option value="Tubará">Tubará</option>
                  <option value="Tuluá">Tuluá</option>
                  <option value="Tumaco">Tumaco</option>
                  <option value="Tunja">Tunja</option>
                  <option value="Tununguá">Tununguá</option>
                  <option value="Túquerres">Túquerres</option>
                  <option value="Turbaco">Turbaco</option>
                  <option value="Turbaná">Turbaná</option>
                  <option value="Turbo">Turbo</option>
                  <option value="Turmequé">Turmequé</option>
                  <option value="Tuta">Tuta</option>
                  <option value="Tutazá">Tutazá</option>
                  <option value="Ubalá">Ubalá</option>
                  <option value="Ubaque">Ubaque</option>
                  <option value="Ulloa">Ulloa</option>
                  <option value="Umbita">Umbita</option>
                  <option value="Une">Une</option>
                  <option value="Unguía">Unguía</option>
                  <option value="Unión Panamericana">Unión Panamericana</option>
                  <option value="Uramita">Uramita</option>
                  <option value="Uribe">Uribe</option>
                  <option value="Uribia">Uribia</option>
                  <option value="Urrao">Urrao</option>
                  <option value="Urumita">Urumita</option>
                  <option value="Usiacurí">Usiacurí</option>
                  <option value="Útica">Útica</option>
                  <option value="Valdivia">Valdivia</option>
                  <option value="Valencia">Valencia</option>
                  <option value="Valle de San José">Valle de San José</option>
                  <option value="Valle de San Juan">Valle de San Juan</option>
                  <option value="Valle del Guamuez">Valle del Guamuez</option>
                  <option value="Valledupar">Valledupar</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Vegachí">Vegachí</option>
                  <option value="Vélez">Vélez</option>
                  <option value="Venadillo">Venadillo</option>
                  <option value="Venecia">Venecia</option>
                  <option value="Venecia">Venecia</option>
                  <option value="Ventaquemada">Ventaquemada</option>
                  <option value="Vergara">Vergara</option>
                  <option value="Versalles">Versalles</option>
                  <option value="Vetas">Vetas</option>
                  <option value="Vianí">Vianí</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Vigía del Fuerte">Vigía del Fuerte</option>
                  <option value="Vijes">Vijes</option>
                  <option value="Villa Caro">Villa Caro</option>
                  <option value="Villa de Leyva">Villa de Leyva</option>
                  <option value="Villa de San Diego de Ubate">Villa de San Diego de Ubate</option>
                  <option value="Villa del Rosario">Villa del Rosario</option>
                  <option value="Villa Rica">Villa Rica</option>
                  <option value="Villagarzón">Villagarzón</option>
                  <option value="Villagómez">Villagómez</option>
                  <option value="Villahermosa">Villahermosa</option>
                  <option value="Villamaría">Villamaría</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villapinzón">Villapinzón</option>
                  <option value="Villarrica">Villarrica</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Villavieja">Villavieja</option>
                  <option value="Villeta">Villeta</option>
                  <option value="Viotá">Viotá</option>
                  <option value="Viracachá">Viracachá</option>
                  <option value="Vistahermosa">Vistahermosa</option>
                  <option value="Viterbo">Viterbo</option>
                  <option value="Yacopí">Yacopí</option>
                  <option value="Yacuanquer">Yacuanquer</option>
                  <option value="Yaguará">Yaguará</option>
                  <option value="Yalí">Yalí</option>
                  <option value="Yarumal">Yarumal</option>
                  <option value="Yavaraté">Yavaraté</option>
                  <option value="Yolombó">Yolombó</option>
                  <option value="Yondó">Yondó</option>
                  <option value="Yopal">Yopal</option>
                  <option value="Yotoco">Yotoco</option>
                  <option value="Yumbo">Yumbo</option>
                  <option value="Zambrano">Zambrano</option>
                  <option value="Zapatoca">Zapatoca</option>
                  <option value="Zapayán">Zapayán</option>
                  <option value="Zaragoza">Zaragoza</option>
                  <option value="Zarzal">Zarzal</option>
                  <option value="Zetaquira">Zetaquira</option>
                  <option value="Zipacón">Zipacón</option>
                  <option value="Zipaquirá">Zipaquirá</option>
                  <option value="Zona Bananera">Zona Bananera</option>
              </select>
          </div>

        <!-- Campo barrio-->
        <div class="col-md-2">
            <label for="barrio" class="form-label" name="barrio" id="neighborhood"><b>Barrio</b></label>
            <input
              type="text"
              name="barrio"
              id="barrio"
              class="form-control"
              required="true"
              pattern="[a-zA-Z0-9\s\u00C0-\u017F]+"
              title="No se permiten caracteres especiales"
              v-model="registroEditar.barrio"
            />
          </div>

        <!-- Campo dirección-->
        <div class="col-md-6">
          <label for="direccion" class="form-label" name="direccion" id="address"><b>Dirección</b></label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            class="form-control"
            required="true"
            v-model="registroEditar.direccion"
            />
        </div>
  
        <!-- Campo peso-->
        <div class="col-md-2">
          <label for="peso" class="form-label" name="peso" id="weight"> <b>Peso (Kg)</b> </label>
          <input
            type="number"
            name="peso"
            id="peso"
            class="form-control"
            required="true"
            min="1"
            v-model="registroEditar.peso"
          />
        </div>

        <!-- Campo tipo de sangre-->
        <div class="col-md-2">
            <label for="sangre" class="form-label" name="sangre" id="blood"><b>Tipo de sangre</b></label>
            <select
              name="sangre"
              id="sangre"
              class="form-select"
              aria-label="Default select example"
              required="true"
              v-model="registroEditar.tipoSangre"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
  
        <!-- Campo CIE-11-->
        <div class="col-md-4">
          <label for="dato" class="form-label" name="cie11" id="cie11"><b>CIE-11</b></label>
          <select  class="form-select" name="codigoEnfermedades" id="codigoEnfermedades" required v-model="registroEditar.cie">
              <option selected="true" disabled="true">Selecciona</option>
              <option value="1F54.0">1F54.0</option>
              <option value="1F54.1">1F54.1</option>
              <option value="1F54.2">1F54.2</option>
              <option value="1F54.3">1F54.3</option>
          </select>
        </div>
  
        <!-- Campo DIAGNÓSTICO-->
        <div class="col-md-4">
            <label for="diagnostico" class="form-label" name="diagnostico" id="diagnostic"><b>Diagnóstico</b></label>
            <select
              name="diagnostico"
              id="diagnostico"
              class="form-select"
              required="true"
              v-model="registroEditar.diagnostico"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="D1">Leishmaniasis visceral</option>
              <option value="D2">Leishmaniasis cutánea</option>
              <option value="D3">Leishmaniasis mucocutánea</option>
              <option value="D4">Leishmaniasis, no especificada</option>
            </select>
          </div>
      
        <!-- Campo Estado de actividad-->
        <div class="col-md-4">
            <label for="estado"  class="form-label" name="estado" id="state"><b>Estado de actividad</b></label>
            <select
              name="estado"
              id="estado"
              class="form-select"
              required="true"
              v-model="registroEditar.estadoActividad"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="en espera">En espera</option>
              <option value="en proceso">En proceso</option>
              <option value="terminado">Terminado</option>
              <option value="suspendido">Incompleto</option>
            </select>
          </div>

        <!-- Campo Nombre Acudiente
            <div class="col-md-3">
              <label for="acudiente" class="form-label" name="acudiente" id="parent"><b>Nombre del acudiente</b></label>
              <input
                type="text"
                name="acudiente"
                id="acudiente"
                class="form-control"
                placeholder="Menor de 18 años"
                disabled="true"
              />
            </div>-->
      
        <!-- Campo tipo de documento acudiente
        <div class="col-md-3">
            <label for="tipodocumentoacu" class="form-label"><b>Tipo de documento</b></label>
            <select name="tipodocumentoacu" id="tipodocumentoacu" class="form-select" required="true" disabled="true">
              <option selected="true" disabled="true">Selecciona</option>
              <option value="CedulaCacu">Cédula de ciudadania</option>
              <option value="CedulaEacu">Cédula de extrangeria</option>
            </select>
            </div>-->
    
          <!-- Campo número de documento acudiente
          <div class="col-md-2">
            <label for="numeroidacu" class="form-label"><b>Número de documento</b></label>
            <input
              type="number"
              name="numeroidacu"
              id="numeroidacu"
              class="form-control"
              required="true"
              placeholder="Menor de 18 años"
              disabled="true"
            />
          </div>-->
  
        <!-- Campo de parentezco acudiente
        <div class="col-md-2">
            <label for="parentezcoacu" class="form-label"><b>Parentezco</b></label>
            <input
              type="text"
              name="parentezcoacu"
              id="parentezcoacu"
              class="form-control"
              placeholder="Menor de 18 años"
              disabled="true" 
            />
          </div>-->

        <!-- Campo teléfono acudiente
            <div class="col-md-2">
              <label for="telefonoacu" class="form-label"><b>Número de celular</b></label>
              <input
                type="number"
                name="telefonoacu"
                id="telefonoacu"
                class="form-control"
                placeholder="Menor de 18 años"
                disabled="true"  
              />
            </div>-->
       
        <!-- Linea separadora-->
        <hr>

    <!-- prescripción del medicamento-->
        <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
            <svg class="bi me-2" width="16" height="16"><use href="#star"/></svg>
            <b>Prescripción del medicamento</b></label>

        <!-- Campo Medicamento-->
        <div class="col-md-5">
        <label for="medicamento" class="form-label" name="medicamento" id="drug"><b>Medicamento</b></label>
          <input
            type="text"
            name="medicamento"
            id="medicamento"
            class="form-control"
            required="true"
            v-model="registroEditar.medicamento"
            />
        </div>
  
        <!-- Campo principio activo-->
        <div class="col-md-3">
        <label for="principio" class="form-label" name="principioActivo" id="main_substance"><b>Principio activo</b></label>
          <input
            type="text"
            name="principio"
            id="principio"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroEditar.principioActivo"
            />
        </div>
  
        <!-- Campo concentración-->
        <div class="col-md-2">
        <label for="Concentracion" class="form-label" name="concentracion" id="concentration"><b>Concentración</b></label>
          <input
            type="text"
            name="Concentracion"
            id="Concentracion"
            class="form-control"
            required="true"
            v-model="registroEditar.concentracion"
            />
        </div>
    
        <!-- Campo forma farmacéutica-->
        <div class="col-md-2">
        <label for="formaf" class="form-label" name="formaFarmaceutica" id="pharmaceuticalForm"><b>Forma farmacéutica</b></label>
          <input
            type="text"
            name="formaf"
            id="formaf"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroEditar.formaFarmaceutica"
            />
        </div>
  
        <!-- Campo unidad medida-->
        <div class="col-md-2">
            <label for="unidad" class="form-label" name="unidadMedida" id="unity"><b>Unidad de medida</b></label>
              <input
                type="text"
                name="unidad"
                id="unidad"
                class="form-control"
                required="true"
                v-model="registroEditar.unidadMedida"
                />
            </div>
            
        <!-- Campo presentación comercial-->
        <div class="col-md-2">
        <label for="presentacom" class="form-label" name="presentacion" id="marketPresentation"><b>Presentación comercial</b></label>
          <input
            type="text"
            name="presentacom"
            id="presentacom"
            class="form-control"
            required="true"
            v-model="registroEditar.presentacionComercial"
            />
        </div>

        <!-- Campo dosis-->
        <div class="col-md-2">
            <label for="dosis" class="form-label" name="dosis" id="dose"><b>Dosis del medicamento</b></label>
              <input
                type="text"
                name="dosis"
                id="dosis"
                class="form-control"
                required="true"
                v-model="registroEditar.dosisMedicamento"
                />
            </div>
    
        <!-- Campo vía administración-->
        <div class="col-md-3">
        <label for="dosis" class="form-label" name="administracion" id="admin"><b>Vía de administración</b></label>
          <input
            type="text"
            name="administracion"
            id="administracion"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroEditar.víaAdministracion"
            />
        </div>
  
        <!-- Campo frecuencia-->
        <div class="col-md-3">
        <label for="frecuencia" class="form-label" name="frecuencia" id="freq"><b>Frecuencia (h)</b></label>
          <input
            type="number"
            name="frecuencia"
            id="frecuencia"
            class="form-control"
            required="true"
            min="1"
            v-model="registroEditar.frecuencia"
            />
        </div>
  
        <!-- Campo observaciones-->
        <div class="form-floating">
          <textarea
            name="observaciones"
            id="observaciones"
            style="height: 80px"
            class="form-control"
            v-model="registroEditar.observaciones"
            >
          </textarea>
          <label for="observaciones"><b>Observaciones</b></label>
        </div>
    <!-- END prescripción del medicamento-->

    <!-- Botón guardar/cancelar-->
    <div class="col-12 align-items-end">
          <input type="submit" class="btn btn-success mr-1" value="Guardar">

          <input type="button" class="btn btn-danger" @click="editar=false, consultar=true, ver=false" value="Cancelar">

      </div>
      </form>
    <!-- END Formulario EDITAR datos de paciente-->

      <!-- Formulario VISUALIZAR datos de paciente-->
      <form action="zconsultaBoton.html" class="row g-3 " style="margin: -30px 110px 30px 110px;" id="formulario" v-if="ver">
        <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
            <svg class="bi me-2" width="16" height="16"><use href="#emoji-smile"/></svg>
            <b>Datos del paciente</b></label>

        <!-- Campo nombres-->
        <div class="col-md-3" id="nombres">
          <label for="nombre" class="form-label" name='nombres'><b>Nombres</b></label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              class="form-control"
              required="true"
              pattern="[a-zA-Z\s\u00C0-\u017F]+"
              title="No se permiten nombres con números o caracteres especiales"
              v-model="registroVisualizar.nombres"
              disabled= "true"
            />
            
        </div>
  
        <!-- Campo apellidos-->
        <div class="col-md-3">
          <label for="apellidos" class="form-label" name='apellidos' id="lastName"><b>Apellidos</b></label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten nombres con numeros o caracteres especiales"
            v-model="registroVisualizar.apellidos"
            disabled= "true"
          />
        </div>
  
        <!-- Campo tipo de documento-->
        <div class="col-md-3">
          <label for="tipodocumento" class="form-label" name=tipo_documento id="type">
            <b>Tipo de documento</b>
          </label>
          <select
          name="tipodocumento"
          id="tipodocumento"
          class="form-select"
          required
          v-model="registroVisualizar.tipoDocumento"
          disabled= "true"
          >
            <option selected="true" disabled="true">Selecciona</option>
            <option value="CedulaC">Cédula de ciudadania</option>
            <option value="CedulaE">Cédula de extrangeria</option>
            <option value="RegistroC">Registro civil</option>
            <option value="TarjetaI">Tarjeta de identidad</option>
          </select>
          </div>
  
        <!-- Campo número de documento-->
        <div class="col-md-3">
          <label for="numeroid" class="form-label" name='numeroId' id="numberId">
            <b>Número de documento</b>
          </label>
          <input
            type="number"
            name="numeroid"
            id="numeroid"
            class="form-control"
            required="true"
            min="0"
            v-model="registroVisualizar.idDocumento"
            disabled= "true"
          />
        </div>

        <!-- Campo fecha nacimiento-->
        <div class="col-md-2">
            <label for="nacimiento" class="form-label" name="nacimiento" id="birth">
              <b>Fecha de nacimiento</b>
            </label>
            <input
              type="date"
              name="nacimiento"
              id="nacimiento"
              class="form-control"
              required="true"
              v-model="registroVisualizar.fechaNacimiento"
              disabled= "true"
            />
          </div>
    

        <!-- Campo edad
        <div class="col-md-2">
            <label for="edad" class="form-label" name="edad" id="age"><b>Edad (años)</b></label>
            <input
              type="number"
              name="edad"
              id="edad"
              class="form-control"
              required="true"
              min="0"
              max="120"
              />
          </div>-->

        <!-- Campo sexo-->
        <div class="col-md-2">
            <label for="sexo" class="form-label" name="sexo" id="sex"><b>Sexo</b></label>
            <select
              name="sexo"
              id="sexo"
              class="form-select"
              required="true"
              v-model="registroVisualizar.sexo"
              disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
      
        <!-- Campo número de celular-->
          <div class="col-md-2">
            <label for="telefono" class="form-label" name="celular" id="movil"><b>Número de celular</b></label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              class="form-control"
              required="true"
              min="0"
              v-model="registroVisualizar.idCelular"
              disabled= "true"
              />
          </div>
  
        <!-- Campo departamento-->
          <div class="col-md-2">
            <label for="departamento" class="form-label" name="departamento" id="department"><b>Departamento</b></label>
            <select
            name="departamento"
            id="departamento"
            class="form-select"
            required="true"
            v-model="registroVisualizar.departamento"
            disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value = "Amazonas">Amazonas</option>
              <option value = "Antioquia">Antioquia</option>
              <option value = "Arauca">Arauca</option>
              <option value = "Atlántico">Atlántico</option>
              <option value = "Bolívar">Bolívar</option>
              <option value = "Boyacá">Boyacá</option>
              <option value = "Caldas">Caldas</option>
              <option value = "Caquetá">Caquetá</option>
              <option value = "Casanare">Casanare</option>
              <option value = "Cauca">Cauca</option>
              <option value = "Cesar">Cesar</option>
              <option value = "Chocó">Chocó</option>		            
              <option value = "Córdoba">Córdoba</option>
              <option value = "Cundinamarca">Cundinamarca</option>
              <option value = "Guainía">Guainía</option>
              <option value = "Guaviare">Guaviare</option>
              <option value = "Huila">Huila</option>
              <option value = "La Guajira">La Guajira</option>
              <option value = "Magdalena">Magdalena</option>
              <option value = "Meta">Meta</option>
              <option value = "Nariño">Nariño</option>
              <option value = "Norte de Santander">Norte de Santander</option>
              <option value = "Putumayo">Putumayo</option>                
              <option value = "Quindío">Quindío</option>  
              <option value = "Risaralda">Risaralda</option>
              <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
              <option value = "Santander">Santander</option>
              <option value = "Sucre">Sucre</option>
              <option value = "Tolima">Tolima</option>
              <option value = "Valle del Cauca">Valle del Cauca</option>
              <option value = "Vaupés">Vaupés</option>
              <option value = "Vichada">Vichada</option>
            </select>
          </div>

        <!-- Campo municipio-->
        <div class="col-md-2">
            <label for="municipio" class="form-label" name="municipio" id="city"><b>Municipio</b></label>
            <select
            name="municipio"
            id="municipio"
            class="form-select"
            required="true"
            v-model="registroVisualizar.municipio"
            disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
                  <option value="Abejorral">Abejorral</option>
                  <option value="Abrego">Abrego</option>
                  <option value="Abriaquí">Abriaquí</option>
                  <option value="Acacías">Acacías</option>
                  <option value="Acandí">Acandí</option>
                  <option value="Acevedo">Acevedo</option>
                  <option value="Achí">Achí</option>
                  <option value="Agrado">Agrado</option>
                  <option value="Agua de Dios">Agua de Dios</option>
                  <option value="Aguachica">Aguachica</option>
                  <option value="Aguada">Aguada</option>
                  <option value="Aguadas">Aguadas</option>
                  <option value="Aguazul">Aguazul</option>
                  <option value="Agustín Codazzi">Agustín Codazzi</option>
                  <option value="Aipe">Aipe</option>
                  <option value="Albán">Albán</option>
                  <option value="Albán">Albán</option>
                  <option value="Albania">Albania</option>
                  <option value="Albania">Albania</option>
                  <option value="Albania">Albania</option>
                  <option value="Alcalá">Alcalá</option>
                  <option value="Aldana">Aldana</option>
                  <option value="Alejandría">Alejandría</option>
                  <option value="Algarrobo">Algarrobo</option>
                  <option value="Algeciras">Algeciras</option>
                  <option value="Almaguer">Almaguer</option>
                  <option value="Almeida">Almeida</option>
                  <option value="Alpujarra">Alpujarra</option>
                  <option value="Altamira">Altamira</option>
                  <option value="Alto Baudo">Alto Baudo</option>
                  <option value="Altos del Rosario">Altos del Rosario</option>
                  <option value="Alvarado">Alvarado</option>
                  <option value="Amagá">Amagá</option>
                  <option value="Amalfi">Amalfi</option>
                  <option value="Ambalema">Ambalema</option>
                  <option value="Anapoima">Anapoima</option>
                  <option value="Ancuyá">Ancuyá</option>
                  <option value="Andalucía">Andalucía</option>
                  <option value="Andes">Andes</option>
                  <option value="Angelópolis">Angelópolis</option>
                  <option value="Angostura">Angostura</option>
                  <option value="Anolaima">Anolaima</option>
                  <option value="Anorí">Anorí</option>
                  <option value="Anserma">Anserma</option>
                  <option value="Ansermanuevo">Ansermanuevo</option>
                  <option value="Anza">Anza</option>
                  <option value="Anzoátegui">Anzoátegui</option>
                  <option value="Apartadó">Apartadó</option>
                  <option value="Apía">Apía</option>
                  <option value="Apulo">Apulo</option>
                  <option value="Aquitania">Aquitania</option>
                  <option value="Aracataca">Aracataca</option>
                  <option value="Aranzazu">Aranzazu</option>
                  <option value="Aratoca">Aratoca</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Arauquita">Arauquita</option>
                  <option value="Arbeláez">Arbeláez</option>
                  <option value="Arboleda">Arboleda</option>
                  <option value="Arboledas">Arboledas</option>
                  <option value="Arboletes">Arboletes</option>
                  <option value="Arcabuco">Arcabuco</option>
                  <option value="Arenal">Arenal</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Ariguaní">Ariguaní</option>
                  <option value="Arjona">Arjona</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Armero">Armero</option>
                  <option value="Arroyohondo">Arroyohondo</option>
                  <option value="Astrea">Astrea</option>
                  <option value="Ataco">Ataco</option>
                  <option value="Atrato">Atrato</option>
                  <option value="Ayapel">Ayapel</option>
                  <option value="Bagadó">Bagadó</option>
                  <option value="Bahía Solano">Bahía Solano</option>
                  <option value="Bajo Baudó">Bajo Baudó</option>
                  <option value="Balboa">Balboa</option>
                  <option value="Balboa">Balboa</option>
                  <option value="Baranoa">Baranoa</option>
                  <option value="Baraya">Baraya</option>
                  <option value="Barbacoas">Barbacoas</option>
                  <option value="Barbosa">Barbosa</option>
                  <option value="Barbosa">Barbosa</option>
                  <option value="Barichara">Barichara</option>
                  <option value="Barranca de Upía">Barranca de Upía</option>
                  <option value="Barrancabermeja">Barrancabermeja</option>
                  <option value="Barrancas">Barrancas</option>
                  <option value="Barranco de Loba">Barranco de Loba</option>
                  <option value="Barranco Minas">Barranco Minas</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Becerril">Becerril</option>
                  <option value="Belalcázar">Belalcázar</option>
                  <option value="Belén">Belén</option>
                  <option value="Belén">Belén</option>
                  <option value="Belén de Bajirá">Belén de Bajirá</option>
                  <option value="Belén de Los Andaquies">Belén de Los Andaquies</option>
                  <option value="Belén de Umbría">Belén de Umbría</option>
                  <option value="Bello">Bello</option>
                  <option value="Belmira">Belmira</option>
                  <option value="Beltrán">Beltrán</option>
                  <option value="Berbeo">Berbeo</option>
                  <option value="Betania">Betania</option>
                  <option value="Betéitiva">Betéitiva</option>
                  <option value="Betulia">Betulia</option>
                  <option value="Betulia">Betulia</option>
                  <option value="Bituima">Bituima</option>
                  <option value="Boavita">Boavita</option>
                  <option value="Bochalema">Bochalema</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bojacá">Bojacá</option>
                  <option value="Bojaya">Bojaya</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Bosconia">Bosconia</option>
                  <option value="Boyacá">Boyacá</option>
                  <option value="Briceño">Briceño</option>
                  <option value="Briceño">Briceño</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Bucarasica">Bucarasica</option>
                  <option value="Buenaventura">Buenaventura</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenavista">Buenavista</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Buesaco">Buesaco</option>
                  <option value="Buga">Buga</option>
                  <option value="Bugalagrande">Bugalagrande</option>
                  <option value="Buriticá">Buriticá</option>
                  <option value="Busbanzá">Busbanzá</option>
                  <option value="Cabrera">Cabrera</option>
                  <option value="Cabrera">Cabrera</option>
                  <option value="Cabuyaro">Cabuyaro</option>
                  <option value="Cacahual">Cacahual</option>
                  <option value="Cáceres">Cáceres</option>
                  <option value="Cachipay">Cachipay</option>
                  <option value="Cachirá">Cachirá</option>
                  <option value="Cácota">Cácota</option>
                  <option value="Caicedo">Caicedo</option>
                  <option value="Caicedonia">Caicedonia</option>
                  <option value="Caimito">Caimito</option>
                  <option value="Cajamarca">Cajamarca</option>
                  <option value="Cajibío">Cajibío</option>
                  <option value="Cajicá">Cajicá</option>
                  <option value="Calamar">Calamar</option>
                  <option value="Calamar">Calamar</option>
                  <option value="Calarca">Calarca</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caldono">Caldono</option>
                  <option value="Cali">Cali</option>
                  <option value="California">California</option>
                  <option value="Calima">Calima</option>
                  <option value="Caloto">Caloto</option>
                  <option value="Campamento">Campamento</option>
                  <option value="Campo de la Cruz">Campo de la Cruz</option>
                  <option value="Campoalegre">Campoalegre</option>
                  <option value="Campohermoso">Campohermoso</option>
                  <option value="Canalete">Canalete</option>
                  <option value="Cañasgordas">Cañasgordas</option>
                  <option value="Candelaria">Candelaria</option>
                  <option value="Candelaria">Candelaria</option>
                  <option value="Cantagallo">Cantagallo</option>
                  <option value="Caparrapí">Caparrapí</option>
                  <option value="Capitanejo">Capitanejo</option>
                  <option value="Caqueza">Caqueza</option>
                  <option value="Caracolí">Caracolí</option>
                  <option value="Caramanta">Caramanta</option>
                  <option value="Carcasí">Carcasí</option>
                  <option value="Carepa">Carepa</option>
                  <option value="Carmen de Apicalá">Carmen de Apicalá</option>
                  <option value="Carmen de Carupa">Carmen de Carupa</option>
                  <option value="Carmen del Darien">Carmen del Darien</option>
                  <option value="Carolina">Carolina</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Cartagena del Chairá">Cartagena del Chairá</option>
                  <option value="Cartago">Cartago</option>
                  <option value="Caruru">Caruru</option>
                  <option value="Casabianca">Casabianca</option>
                  <option value="Castilla La Nueva">Castilla La Nueva</option>
                  <option value="Caucasia">Caucasia</option>
                  <option value="Cepitá">Cepitá</option>
                  <option value="Cereté">Cereté</option>
                  <option value="Cerinza">Cerinza</option>
                  <option value="Cerrito">Cerrito</option>
                  <option value="Cerro San Antonio">Cerro San Antonio</option>
                  <option value="Cértegui">Cértegui</option>
                  <option value="Chachagüí">Chachagüí</option>
                  <option value="Chaguaní">Chaguaní</option>
                  <option value="Chalán">Chalán</option>
                  <option value="Chameza">Chameza</option>
                  <option value="Chaparral">Chaparral</option>
                  <option value="Charalá">Charalá</option>
                  <option value="Charta">Charta</option>
                  <option value="Chía">Chía</option>
                  <option value="Chibolo">Chibolo</option>
                  <option value="Chigorodó">Chigorodó</option>
                  <option value="Chima">Chima</option>
                  <option value="Chimá">Chimá</option>
                  <option value="Chimichagua">Chimichagua</option>
                  <option value="Chinácota">Chinácota</option>
                  <option value="Chinavita">Chinavita</option>
                  <option value="Chinchiná">Chinchiná</option>
                  <option value="Chinú">Chinú</option>
                  <option value="Chipaque">Chipaque</option>
                  <option value="Chipatá">Chipatá</option>
                  <option value="Chiquinquirá">Chiquinquirá</option>
                  <option value="Chíquiza">Chíquiza</option>
                  <option value="Chiriguaná">Chiriguaná</option>
                  <option value="Chiscas">Chiscas</option>
                  <option value="Chita">Chita</option>
                  <option value="Chitagá">Chitagá</option>
                  <option value="Chitaraque">Chitaraque</option>
                  <option value="Chivatá">Chivatá</option>
                  <option value="Chivor">Chivor</option>
                  <option value="Choachí">Choachí</option>
                  <option value="Chocontá">Chocontá</option>
                  <option value="Cicuco">Cicuco</option>
                  <option value="Ciénaga">Ciénaga</option>
                  <option value="Ciénaga de Oro">Ciénaga de Oro</option>
                  <option value="Ciénega">Ciénega</option>
                  <option value="Cimitarra">Cimitarra</option>
                  <option value="Circasia">Circasia</option>
                  <option value="Cisneros">Cisneros</option>
                  <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                  <option value="Clemencia">Clemencia</option>
                  <option value="Cocorná">Cocorná</option>
                  <option value="Coello">Coello</option>
                  <option value="Cogua">Cogua</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Colón">Colón</option>
                  <option value="Colón">Colón</option>
                  <option value="Coloso">Coloso</option>
                  <option value="Cómbita">Cómbita</option>
                  <option value="Concepción">Concepción</option>
                  <option value="Concepción">Concepción</option>
                  <option value="Concordia">Concordia</option>
                  <option value="Concordia">Concordia</option>
                  <option value="Condoto">Condoto</option>
                  <option value="Confines">Confines</option>
                  <option value="Consaca">Consaca</option>
                  <option value="Contadero">Contadero</option>
                  <option value="Contratación">Contratación</option>
                  <option value="Convención">Convención</option>
                  <option value="Copacabana">Copacabana</option>
                  <option value="Coper">Coper</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Corinto">Corinto</option>
                  <option value="Coromoro">Coromoro</option>
                  <option value="Corozal">Corozal</option>
                  <option value="Corrales">Corrales</option>
                  <option value="Cota">Cota</option>
                  <option value="Cotorra">Cotorra</option>
                  <option value="Covarachía">Covarachía</option>
                  <option value="Coveñas">Coveñas</option>
                  <option value="Coyaima">Coyaima</option>
                  <option value="Cravo Norte">Cravo Norte</option>
                  <option value="Cuaspud">Cuaspud</option>
                  <option value="Cubará">Cubará</option>
                  <option value="Cubarral">Cubarral</option>
                  <option value="Cucaita">Cucaita</option>
                  <option value="Cucunubá">Cucunubá</option>
                  <option value="Cúcuta">Cúcuta</option>
                  <option value="Cucutilla">Cucutilla</option>
                  <option value="Cuítiva">Cuítiva</option>
                  <option value="Cumaral">Cumaral</option>
                  <option value="Cumaribo">Cumaribo</option>
                  <option value="Cumbal">Cumbal</option>
                  <option value="Cumbitara">Cumbitara</option>
                  <option value="Cunday">Cunday</option>
                  <option value="Curillo">Curillo</option>
                  <option value="Curití">Curití</option>
                  <option value="Curumaní">Curumaní</option>
                  <option value="Dabeiba">Dabeiba</option>
                  <option value="Dagua">Dagua</option>
                  <option value="Dibulla">Dibulla</option>
                  <option value="Distracción">Distracción</option>
                  <option value="Dolores">Dolores</option>
                  <option value="Don Matías">Don Matías</option>
                  <option value="Dosquebradas">Dosquebradas</option>
                  <option value="Duitama">Duitama</option>
                  <option value="Durania">Durania</option>
                  <option value="Ebéjico">Ebéjico</option>
                  <option value="El Águila">El Águila</option>
                  <option value="El Bagre">El Bagre</option>
                  <option value="El Banco">El Banco</option>
                  <option value="El Cairo">El Cairo</option>
                  <option value="El Calvario">El Calvario</option>
                  <option value="El Cantón del San Pablo">El Cantón del San Pablo</option>
                  <option value="El Carmen">El Carmen</option>
                  <option value="El Carmen de Atrato">El Carmen de Atrato</option>
                  <option value="El Carmen de Bolívar">El Carmen de Bolívar</option>
                  <option value="El Carmen de Chucurí">El Carmen de Chucurí</option>
                  <option value="El Carmen de Viboral">El Carmen de Viboral</option>
                  <option value="El Castillo">El Castillo</option>
                  <option value="El Cerrito">El Cerrito</option>
                  <option value="El Charco">El Charco</option>
                  <option value="El Cocuy">El Cocuy</option>
                  <option value="El Colegio">El Colegio</option>
                  <option value="El Copey">El Copey</option>
                  <option value="El Doncello">El Doncello</option>
                  <option value="El Dorado">El Dorado</option>
                  <option value="El Dovio">El Dovio</option>
                  <option value="El encanto">El encanto</option>
                  <option value="El Espino">El Espino</option>
                  <option value="El Guacamayo">El Guacamayo</option>
                  <option value="El Guamo">El Guamo</option>
                  <option value="El Litoral del San Juan">El Litoral del San Juan</option>
                  <option value="El Molino">El Molino</option>
                  <option value="El Paso">El Paso</option>
                  <option value="El Paujil">El Paujil</option>
                  <option value="El Peñol">El Peñol</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Peñón">El Peñón</option>
                  <option value="El Piñon">El Piñon</option>
                  <option value="El Playón">El Playón</option>
                  <option value="El Retén">El Retén</option>
                  <option value="El Retorno">El Retorno</option>
                  <option value="El Roble">El Roble</option>
                  <option value="El Rosal">El Rosal</option>
                  <option value="El Rosario">El Rosario</option>
                  <option value="El Santuario">El Santuario</option>
                  <option value="El Tablón de Gómez">El Tablón de Gómez</option>
                  <option value="El Tambo">El Tambo</option>
                  <option value="El Tambo">El Tambo</option>
                  <option value="El Tarra">El Tarra</option>
                  <option value="El Zulia">El Zulia</option>
                  <option value="Elías">Elías</option>
                  <option value="Encino">Encino</option>
                  <option value="Enciso">Enciso</option>
                  <option value="Entrerrios">Entrerrios</option>
                  <option value="Envigado">Envigado</option>
                  <option value="Espinal">Espinal</option>
                  <option value="Facatativá">Facatativá</option>
                  <option value="Falan">Falan</option>
                  <option value="Filadelfia">Filadelfia</option>
                  <option value="Filandia">Filandia</option>
                  <option value="Firavitoba">Firavitoba</option>
                  <option value="Flandes">Flandes</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Floresta">Floresta</option>
                  <option value="Florián">Florián</option>
                  <option value="Florida">Florida</option>
                  <option value="Floridablanca">Floridablanca</option>
                  <option value="Fomeque">Fomeque</option>
                  <option value="Fonseca">Fonseca</option>
                  <option value="Fortul">Fortul</option>
                  <option value="Fosca">Fosca</option>
                  <option value="Francisco Pizarro">Francisco Pizarro</option>
                  <option value="Fredonia">Fredonia</option>
                  <option value="Fresno">Fresno</option>
                  <option value="Frontino">Frontino</option>
                  <option value="Fuente de Oro">Fuente de Oro</option>
                  <option value="Fundación">Fundación</option>
                  <option value="Funes">Funes</option>
                  <option value="Funza">Funza</option>
                  <option value="Fúquene">Fúquene</option>
                  <option value="Fusagasugá">Fusagasugá</option>
                  <option value="Gachala">Gachala</option>
                  <option value="Gachancipá">Gachancipá</option>
                  <option value="Gachantivá">Gachantivá</option>
                  <option value="Gachetá">Gachetá</option>
                  <option value="Galán">Galán</option>
                  <option value="Galapa">Galapa</option>
                  <option value="Galeras">Galeras</option>
                  <option value="Gama">Gama</option>
                  <option value="Gamarra">Gamarra</option>
                  <option value="Gambita">Gambita</option>
                  <option value="Gameza">Gameza</option>
                  <option value="Garagoa">Garagoa</option>
                  <option value="Garzón">Garzón</option>
                  <option value="Génova">Génova</option>
                  <option value="Gigante">Gigante</option>
                  <option value="Ginebra">Ginebra</option>
                  <option value="Giraldo">Giraldo</option>
                  <option value="Girardot">Girardot</option>
                  <option value="Girardota">Girardota</option>
                  <option value="Girón">Girón</option>
                  <option value="Gómez Plata">Gómez Plata</option>
                  <option value="González">González</option>
                  <option value="Gramalote">Gramalote</option>
                  <option value="Granada">Granada</option>
                  <option value="Granada">Granada</option>
                  <option value="Granada">Granada</option>
                  <option value="Guaca">Guaca</option>
                  <option value="Guacamayas">Guacamayas</option>
                  <option value="Guacarí">Guacarí</option>
                  <option value="Guachetá">Guachetá</option>
                  <option value="Guachucal">Guachucal</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guaduas">Guaduas</option>
                  <option value="Guaitarilla">Guaitarilla</option>
                  <option value="Gualmatán">Gualmatán</option>
                  <option value="Guamal">Guamal</option>
                  <option value="Guamal">Guamal</option>
                  <option value="Guamo">Guamo</option>
                  <option value="Guapi">Guapi</option>
                  <option value="Guapotá">Guapotá</option>
                  <option value="Guaranda">Guaranda</option>
                  <option value="Guarne">Guarne</option>
                  <option value="Guasca">Guasca</option>
                  <option value="Guatape">Guatape</option>
                  <option value="Guataquí">Guataquí</option>
                  <option value="Guatavita">Guatavita</option>
                  <option value="Guateque">Guateque</option>
                  <option value="Guática">Guática</option>
                  <option value="Guavatá">Guavatá</option>
                  <option value="Guayabal de Siquima">Guayabal de Siquima</option>
                  <option value="Guayabetal">Guayabetal</option>
                  <option value="Guayatá">Guayatá</option>
                  <option value="Güepsa">Güepsa</option>
                  <option value="Güicán">Güicán</option>
                  <option value="Gutiérrez">Gutiérrez</option>
                  <option value="Hacarí">Hacarí</option>
                  <option value="Hatillo de Loba">Hatillo de Loba</option>
                  <option value="Hato">Hato</option>
                  <option value="Hato Corozal">Hato Corozal</option>
                  <option value="Hatonuevo">Hatonuevo</option>
                  <option value="Heliconia">Heliconia</option>
                  <option value="Herrán">Herrán</option>
                  <option value="Herveo">Herveo</option>
                  <option value="Hispania">Hispania</option>
                  <option value="Hobo">Hobo</option>
                  <option value="Honda">Honda</option>
                  <option value="Ibagué">Ibagué</option>
                  <option value="Icononzo">Icononzo</option>
                  <option value="Iles">Iles</option>
                  <option value="Imués">Imués</option>
                  <option value="Inírida">Inírida</option>
                  <option value="Inzá">Inzá</option>
                  <option value="Ipiales">Ipiales</option>
                  <option value="Iquira">Iquira</option>
                  <option value="Isnos">Isnos</option>
                  <option value="Istmina">Istmina</option>
                  <option value="Itagui">Itagui</option>
                  <option value="Ituango">Ituango</option>
                  <option value="Iza">Iza</option>
                  <option value="Jambaló">Jambaló</option>
                  <option value="Jamundí">Jamundí</option>
                  <option value="Jardín">Jardín</option>
                  <option value="Jenesano">Jenesano</option>
                  <option value="Jericó">Jericó</option>
                  <option value="Jericó">Jericó</option>
                  <option value="Jerusalén">Jerusalén</option>
                  <option value="Jesús María">Jesús María</option>
                  <option value="Jordán">Jordán</option>
                  <option value="Juan de Acosta">Juan de Acosta</option>
                  <option value="Junín">Junín</option>
                  <option value="Juradó">Juradó</option>
                  <option value="La Apartada">La Apartada</option>
                  <option value="La Argentina">La Argentina</option>
                  <option value="La Belleza">La Belleza</option>
                  <option value="La Calera">La Calera</option>
                  <option value="La Capilla">La Capilla</option>
                  <option value="La Ceja">La Ceja</option>
                  <option value="La Celia">La Celia</option>
                  <option value="La chorrera">La chorrera</option>
                  <option value="La Cruz">La Cruz</option>
                  <option value="La Cumbre">La Cumbre</option>
                  <option value="La Dorada">La Dorada</option>
                  <option value="La Esperanza">La Esperanza</option>
                  <option value="La Estrella">La Estrella</option>
                  <option value="La Florida">La Florida</option>
                  <option value="La Gloria">La Gloria</option>
                  <option value="La Guadalupe">La Guadalupe</option>
                  <option value="La Jagua de Ibirico">La Jagua de Ibirico</option>
                  <option value="La Jagua del Pilar">La Jagua del Pilar</option>
                  <option value="La Llanada">La Llanada</option>
                  <option value="La Macarena">La Macarena</option>
                  <option value="La Merced">La Merced</option>
                  <option value="La Mesa">La Mesa</option>
                  <option value="La Montañita">La Montañita</option>
                  <option value="La Palma">La Palma</option>
                  <option value="La Paz">La Paz</option>
                  <option value="La Paz">La Paz</option>
                  <option value="La pedrera">La pedrera</option>
                  <option value="La Peña">La Peña</option>
                  <option value="La Pintada">La Pintada</option>
                  <option value="La Plata">La Plata</option>
                  <option value="La Playa">La Playa</option>
                  <option value="La Primavera">La Primavera</option>
                  <option value="La Salina">La Salina</option>
                  <option value="La Sierra">La Sierra</option>
                  <option value="La Tebaida">La Tebaida</option>
                  <option value="La Tola">La Tola</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Unión">La Unión</option>
                  <option value="La Uvita">La Uvita</option>
                  <option value="La Vega">La Vega</option>
                  <option value="La Vega">La Vega</option>
                  <option value="La Victoria">La Victoria</option>
                  <option value="La Victoria">La Victoria</option>
                  <option value="La victoria">La victoria</option>
                  <option value="La Virginia">La Virginia</option>
                  <option value="Labateca">Labateca</option>
                  <option value="Labranzagrande">Labranzagrande</option>
                  <option value="Landázuri">Landázuri</option>
                  <option value="Lebríja">Lebríja</option>
                  <option value="Leguízamo">Leguízamo</option>
                  <option value="Leiva">Leiva</option>
                  <option value="Lejanías">Lejanías</option>
                  <option value="Lenguazaque">Lenguazaque</option>
                  <option value="Lérida">Lérida</option>
                  <option value="Leticia">Leticia</option>
                  <option value="Líbano">Líbano</option>
                  <option value="Liborina">Liborina</option>
                  <option value="Linares">Linares</option>
                  <option value="Lloró">Lloró</option>
                  <option value="López">López</option>
                  <option value="Lorica">Lorica</option>
                  <option value="Los Andes">Los Andes</option>
                  <option value="Los Córdobas">Los Córdobas</option>
                  <option value="Los Palmitos">Los Palmitos</option>
                  <option value="Los Patios">Los Patios</option>
                  <option value="Los Santos">Los Santos</option>
                  <option value="Lourdes">Lourdes</option>
                  <option value="Luruaco">Luruaco</option>
                  <option value="Macanal">Macanal</option>
                  <option value="Macaravita">Macaravita</option>
                  <option value="Maceo">Maceo</option>
                  <option value="Macheta">Macheta</option>
                  <option value="Madrid">Madrid</option>
                  <option value="Magangué">Magangué</option>
                  <option value="Magüi">Magüi</option>
                  <option value="Mahates">Mahates</option>
                  <option value="Maicao">Maicao</option>
                  <option value="Majagual">Majagual</option>
                  <option value="Málaga">Málaga</option>
                  <option value="Malambo">Malambo</option>
                  <option value="Mallama">Mallama</option>
                  <option value="Manatí">Manatí</option>
                  <option value="Manaure">Manaure</option>
                  <option value="Manaure">Manaure</option>
                  <option value="Maní">Maní</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Manta">Manta</option>
                  <option value="Manzanares">Manzanares</option>
                  <option value="Mapiripán">Mapiripán</option>
                  <option value="Mapiripana">Mapiripana</option>
                  <option value="Margarita">Margarita</option>
                  <option value="María La Baja">María La Baja</option>
                  <option value="Marinilla">Marinilla</option>
                  <option value="Maripí">Maripí</option>
                  <option value="Mariquita">Mariquita</option>
                  <option value="Marmato">Marmato</option>
                  <option value="Marquetalia">Marquetalia</option>
                  <option value="Marsella">Marsella</option>
                  <option value="Marulanda">Marulanda</option>
                  <option value="Matanza">Matanza</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Medina">Medina</option>
                  <option value="Medio Atrato">Medio Atrato</option>
                  <option value="Medio Baudó">Medio Baudó</option>
                  <option value="Medio San Juan">Medio San Juan</option>
                  <option value="Melgar">Melgar</option>
                  <option value="Mercaderes">Mercaderes</option>
                  <option value="Mesetas">Mesetas</option>
                  <option value="Milán">Milán</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="Miranda">Miranda</option>
                  <option value="Miriti Paraná">Miriti Paraná</option>
                  <option value="Mistrató">Mistrató</option>
                  <option value="Mitú">Mitú</option>
                  <option value="Mocoa">Mocoa</option>
                  <option value="Mogotes">Mogotes</option>
                  <option value="Molagavita">Molagavita</option>
                  <option value="Momil">Momil</option>
                  <option value="Mompós">Mompós</option>
                  <option value="Mongua">Mongua</option>
                  <option value="Monguí">Monguí</option>
                  <option value="Moniquirá">Moniquirá</option>
                  <option value="Moñitos">Moñitos</option>
                  <option value="Montebello">Montebello</option>
                  <option value="Montecristo">Montecristo</option>
                  <option value="Montelíbano">Montelíbano</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montería">Montería</option>
                  <option value="Monterrey">Monterrey</option>
                  <option value="Morales">Morales</option>
                  <option value="Morales">Morales</option>
                  <option value="Morelia">Morelia</option>
                  <option value="Morichal">Morichal</option>
                  <option value="Morroa">Morroa</option>
                  <option value="Mosquera">Mosquera</option>
                  <option value="Mosquera">Mosquera</option>
                  <option value="Motavita">Motavita</option>
                  <option value="Murillo">Murillo</option>
                  <option value="Murindó">Murindó</option>
                  <option value="Mutatá">Mutatá</option>
                  <option value="Mutiscua">Mutiscua</option>
                  <option value="Muzo">Muzo</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Nátaga">Nátaga</option>
                  <option value="Natagaima">Natagaima</option>
                  <option value="Nechí">Nechí</option>
                  <option value="Necoclí">Necoclí</option>
                  <option value="Neira">Neira</option>
                  <option value="Neiva">Neiva</option>
                  <option value="Nemocón">Nemocón</option>
                  <option value="Nilo">Nilo</option>
                  <option value="Nimaima">Nimaima</option>
                  <option value="Nobsa">Nobsa</option>
                  <option value="Nocaima">Nocaima</option>
                  <option value="Norcasia">Norcasia</option>
                  <option value="Nóvita">Nóvita</option>
                  <option value="Nueva Granada">Nueva Granada</option>
                  <option value="Nuevo Colón">Nuevo Colón</option>
                  <option value="Nunchía">Nunchía</option>
                  <option value="Nuquí">Nuquí</option>
                  <option value="Obando">Obando</option>
                  <option value="Ocamonte">Ocamonte</option>
                  <option value="Ocaña">Ocaña</option>
                  <option value="Oiba">Oiba</option>
                  <option value="Oicatá">Oicatá</option>
                  <option value="Olaya">Olaya</option>
                  <option value="Olaya Herrera">Olaya Herrera</option>
                  <option value="Onzaga">Onzaga</option>
                  <option value="Oporapa">Oporapa</option>
                  <option value="Orito">Orito</option>
                  <option value="Orocué">Orocué</option>
                  <option value="Ortega">Ortega</option>
                  <option value="Ospina">Ospina</option>
                  <option value="Otanche">Otanche</option>
                  <option value="Ovejas">Ovejas</option>
                  <option value="Pachavita">Pachavita</option>
                  <option value="Pacho">Pacho</option>
                  <option value="Pacoa">Pacoa</option>
                  <option value="Pácora">Pácora</option>
                  <option value="Padilla">Padilla</option>
                  <option value="Paez">Paez</option>
                  <option value="Páez">Páez</option>
                  <option value="Paicol">Paicol</option>
                  <option value="Pailitas">Pailitas</option>
                  <option value="Paime">Paime</option>
                  <option value="Paipa">Paipa</option>
                  <option value="Pajarito">Pajarito</option>
                  <option value="Palermo">Palermo</option>
                  <option value="Palestina">Palestina</option>
                  <option value="Palestina">Palestina</option>
                  <option value="Palmar">Palmar</option>
                  <option value="Palmar de Varela">Palmar de Varela</option>
                  <option value="Palmas del Socorro">Palmas del Socorro</option>
                  <option value="Palmira">Palmira</option>
                  <option value="Palmito">Palmito</option>
                  <option value="Palocabildo">Palocabildo</option>
                  <option value="Pamplona">Pamplona</option>
                  <option value="Pamplonita">Pamplonita</option>
                  <option value="Pana Pana">Pana Pana</option>
                  <option value="Pandi">Pandi</option>
                  <option value="Panqueba">Panqueba</option>
                  <option value="Papunaua">Papunaua</option>
                  <option value="Páramo">Páramo</option>
                  <option value="Paratebueno">Paratebueno</option>
                  <option value="Pasca">Pasca</option>
                  <option value="Pasto">Pasto</option>
                  <option value="Patía">Patía</option>
                  <option value="Pauna">Pauna</option>
                  <option value="Paya">Paya</option>
                  <option value="Paz de Ariporo">Paz de Ariporo</option>
                  <option value="Paz de Río">Paz de Río</option>
                  <option value="Pedraza">Pedraza</option>
                  <option value="Pelaya">Pelaya</option>
                  <option value="Peñol">Peñol</option>
                  <option value="Pensilvania">Pensilvania</option>
                  <option value="Peque">Peque</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Pesca">Pesca</option>
                  <option value="Piamonte">Piamonte</option>
                  <option value="Piedecuesta">Piedecuesta</option>
                  <option value="Piedras">Piedras</option>
                  <option value="Piendamó">Piendamó</option>
                  <option value="Pijao">Pijao</option>
                  <option value="Pijiño del Carmen">Pijiño del Carmen</option>
                  <option value="Pinchote">Pinchote</option>
                  <option value="Pinillos">Pinillos</option>
                  <option value="Piojó">Piojó</option>
                  <option value="Pisba">Pisba</option>
                  <option value="Pital">Pital</option>
                  <option value="Pitalito">Pitalito</option>
                  <option value="Pivijay">Pivijay</option>
                  <option value="Planadas">Planadas</option>
                  <option value="Planeta Rica">Planeta Rica</option>
                  <option value="Plato">Plato</option>
                  <option value="Policarpa">Policarpa</option>
                  <option value="Polonuevo">Polonuevo</option>
                  <option value="Ponedera">Ponedera</option>
                  <option value="Popayán">Popayán</option>
                  <option value="Pore">Pore</option>
                  <option value="Potosí">Potosí</option>
                  <option value="Pradera">Pradera</option>
                  <option value="Prado">Prado</option>
                  <option value="Providencia">Providencia</option>
                  <option value="Providencia">Providencia</option>
                  <option value="Pueblo Bello">Pueblo Bello</option>
                  <option value="Pueblo Nuevo">Pueblo Nuevo</option>
                  <option value="Pueblo Rico">Pueblo Rico</option>
                  <option value="Pueblorrico">Pueblorrico</option>
                  <option value="Puebloviejo">Puebloviejo</option>
                  <option value="Puente Nacional">Puente Nacional</option>
                  <option value="Puerres">Puerres</option>
                  <option value="Puerto Alegría">Puerto Alegría</option>
                  <option value="Puerto Arica">Puerto Arica</option>
                  <option value="Puerto Asís">Puerto Asís</option>
                  <option value="Puerto Berrío">Puerto Berrío</option>
                  <option value="Puerto Boyacá">Puerto Boyacá</option>
                  <option value="Puerto Caicedo">Puerto Caicedo</option>
                  <option value="Puerto Carreño">Puerto Carreño</option>
                  <option value="Puerto Colombia">Puerto Colombia</option>
                  <option value="Puerto Colombia">Puerto Colombia</option>
                  <option value="Puerto Concordia">Puerto Concordia</option>
                  <option value="Puerto Escondido">Puerto Escondido</option>
                  <option value="Puerto Gaitán">Puerto Gaitán</option>
                  <option value="Puerto Guzmán">Puerto Guzmán</option>
                  <option value="Puerto Libertador">Puerto Libertador</option>
                  <option value="Puerto Lleras">Puerto Lleras</option>
                  <option value="Puerto López">Puerto López</option>
                  <option value="Puerto Nare">Puerto Nare</option>
                  <option value="Puerto Nariño">Puerto Nariño</option>
                  <option value="Puerto Parra">Puerto Parra</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Puerto Rondón">Puerto Rondón</option>
                  <option value="Puerto Salgar">Puerto Salgar</option>
                  <option value="Puerto Santander">Puerto Santander</option>
                  <option value="Puerto Santander">Puerto Santander</option>
                  <option value="Puerto Tejada">Puerto Tejada</option>
                  <option value="Puerto Triunfo">Puerto Triunfo</option>
                  <option value="Puerto Wilches">Puerto Wilches</option>
                  <option value="Pulí">Pulí</option>
                  <option value="Pupiales">Pupiales</option>
                  <option value="Puracé">Puracé</option>
                  <option value="Purificación">Purificación</option>
                  <option value="Purísima">Purísima</option>
                  <option value="Quebradanegra">Quebradanegra</option>
                  <option value="Quetame">Quetame</option>
                  <option value="Quibdó">Quibdó</option>
                  <option value="Quimbaya">Quimbaya</option>
                  <option value="Quinchía">Quinchía</option>
                  <option value="Quípama">Quípama</option>
                  <option value="Quipile">Quipile</option>
                  <option value="Ragonvalia">Ragonvalia</option>
                  <option value="Ramiriquí">Ramiriquí</option>
                  <option value="Ráquira">Ráquira</option>
                  <option value="Recetor">Recetor</option>
                  <option value="Regidor">Regidor</option>
                  <option value="Remedios">Remedios</option>
                  <option value="Remolino">Remolino</option>
                  <option value="Repelón">Repelón</option>
                  <option value="Restrepo">Restrepo</option>
                  <option value="Restrepo">Restrepo</option>
                  <option value="Retiro">Retiro</option>
                  <option value="Ricaurte">Ricaurte</option>
                  <option value="Ricaurte">Ricaurte</option>
                  <option value="Río de Oro">Río de Oro</option>
                  <option value="Río Iro">Río Iro</option>
                  <option value="Río Quito">Río Quito</option>
                  <option value="Río Viejo">Río Viejo</option>
                  <option value="Rioblanco">Rioblanco</option>
                  <option value="Riofrío">Riofrío</option>
                  <option value="Riohacha">Riohacha</option>
                  <option value="Rionegro">Rionegro</option>
                  <option value="Rionegro">Rionegro</option>
                  <option value="Riosucio">Riosucio</option>
                  <option value="Riosucio">Riosucio</option>
                  <option value="Risaralda">Risaralda</option>
                  <option value="Rivera">Rivera</option>
                  <option value="Roberto Payán">Roberto Payán</option>
                  <option value="Roldanillo">Roldanillo</option>
                  <option value="Roncesvalles">Roncesvalles</option>
                  <option value="Rondón">Rondón</option>
                  <option value="Rosas">Rosas</option>
                  <option value="Rovira">Rovira</option>
                  <option value="Sabana de Torres">Sabana de Torres</option>
                  <option value="Sabanagrande">Sabanagrande</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sabanas de San Angel">Sabanas de San Angel</option>
                  <option value="Sabaneta">Sabaneta</option>
                  <option value="Saboyá">Saboyá</option>
                  <option value="Sácama">Sácama</option>
                  <option value="Sáchica">Sáchica</option>
                  <option value="Sahagún">Sahagún</option>
                  <option value="Saladoblanco">Saladoblanco</option>
                  <option value="Salamina">Salamina</option>
                  <option value="Salamina">Salamina</option>
                  <option value="Salazar">Salazar</option>
                  <option value="Saldaña">Saldaña</option>
                  <option value="Salento">Salento</option>
                  <option value="Salgar">Salgar</option>
                  <option value="Samacá">Samacá</option>
                  <option value="Samaná">Samaná</option>
                  <option value="Samaniego">Samaniego</option>
                  <option value="Sampués">Sampués</option>
                  <option value="San Agustín">San Agustín</option>
                  <option value="San Alberto">San Alberto</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San Andrés Sotavento">San Andrés Sotavento</option>
                  <option value="San Antero">San Antero</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="San Antonio del Tequendama">San Antonio del Tequendama</option>
                  <option value="San Benito">San Benito</option>
                  <option value="San Benito Abad">San Benito Abad</option>
                  <option value="San Bernardo">San Bernardo</option>
                  <option value="San Bernardo">San Bernardo</option>
                  <option value="San Bernardo del Viento">San Bernardo del Viento</option>
                  <option value="San Calixto">San Calixto</option>
                  <option value="San Carlos">San Carlos</option>
                  <option value="San Carlos">San Carlos</option>
                  <option value="San Carlos de Guaroa">San Carlos de Guaroa</option>
                  <option value="San Cayetano">San Cayetano</option>
                  <option value="San Cayetano">San Cayetano</option>
                  <option value="San Cristóbal">San Cristóbal</option>
                  <option value="San Diego">San Diego</option>
                  <option value="San Eduardo">San Eduardo</option>
                  <option value="San Estanislao">San Estanislao</option>
                  <option value="San Felipe">San Felipe</option>
                  <option value="San Fernando">San Fernando</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="San Gil">San Gil</option>
                  <option value="San Jacinto">San Jacinto</option>
                  <option value="San Jacinto del Cauca">San Jacinto del Cauca</option>
                  <option value="San Jerónimo">San Jerónimo</option>
                  <option value="San Joaquín">San Joaquín</option>
                  <option value="San José">San José</option>
                  <option value="San José de la Montaña">San José de la Montaña</option>
                  <option value="San José de Miranda">San José de Miranda</option>
                  <option value="San José de Pare">San José de Pare</option>
                  <option value="San José del Fragua">San José del Fragua</option>
                  <option value="San José del Guaviare">San José del Guaviare</option>
                  <option value="San José del Palmar">San José del Palmar</option>
                  <option value="San Juan de Arama">San Juan de Arama</option>
                  <option value="San Juan de Betulia">San Juan de Betulia</option>
                  <option value="San Juan de Río Seco">San Juan de Río Seco</option>
                  <option value="San Juan de Urabá">San Juan de Urabá</option>
                  <option value="San Juan del Cesar">San Juan del Cesar</option>
                  <option value="San Juan Nepomuceno">San Juan Nepomuceno</option>
                  <option value="San Juanito">San Juanito</option>
                  <option value="San Lorenzo">San Lorenzo</option>
                  <option value="San Luis">San Luis</option>
                  <option value="San Luis">San Luis</option>
                  <option value="San Luis de Gaceno">San Luis de Gaceno</option>
                  <option value="San Luis de Palenque">San Luis de Palenque</option>
                  <option value="San Marcos">San Marcos</option>
                  <option value="San Martín">San Martín</option>
                  <option value="San Martín">San Martín</option>
                  <option value="San Martín de Loba">San Martín de Loba</option>
                  <option value="San Mateo">San Mateo</option>
                  <option value="San Miguel">San Miguel</option>
                  <option value="San Miguel">San Miguel</option>
                  <option value="San Miguel de Sema">San Miguel de Sema</option>
                  <option value="San Onofre">San Onofre</option>
                  <option value="San Pablo">San Pablo</option>
                  <option value="San Pablo">San Pablo</option>
                  <option value="San Pablo de Borbur">San Pablo de Borbur</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro">San Pedro</option>
                  <option value="San Pedro de Cartago">San Pedro de Cartago</option>
                  <option value="San Pedro de Uraba">San Pedro de Uraba</option>
                  <option value="San Pelayo">San Pelayo</option>
                  <option value="San Rafael">San Rafael</option>
                  <option value="San Roque">San Roque</option>
                  <option value="San Sebastián">San Sebastián</option>
                  <option value="San Sebastián de Buenavista">San Sebastián de Buenavista</option>
                  <option value="San Vicente">San Vicente</option>
                  <option value="San Vicente de Chucurí">San Vicente de Chucurí</option>
                  <option value="San Vicente del Caguán">San Vicente del Caguán</option>
                  <option value="San Zenón">San Zenón</option>
                  <option value="Sandoná">Sandoná</option>
                  <option value="Santa Ana">Santa Ana</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara">Santa Bárbara</option>
                  <option value="Santa Bárbara de Pinto">Santa Bárbara de Pinto</option>
                  <option value="Santa Catalina">Santa Catalina</option>
                  <option value="Santa Helena del Opón">Santa Helena del Opón</option>
                  <option value="Santa Isabel">Santa Isabel</option>
                  <option value="Santa Lucía">Santa Lucía</option>
                  <option value="Santa María">Santa María</option>
                  <option value="Santa María">Santa María</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Santa Rosa">Santa Rosa</option>
                  <option value="Santa Rosa">Santa Rosa</option>
                  <option value="Santa Rosa de Cabal">Santa Rosa de Cabal</option>
                  <option value="Santa Rosa de Osos">Santa Rosa de Osos</option>
                  <option value="Santa Rosa de Viterbo">Santa Rosa de Viterbo</option>
                  <option value="Santa Rosa del Sur">Santa Rosa del Sur</option>
                  <option value="Santa Rosalía">Santa Rosalía</option>
                  <option value="Santa Sofía">Santa Sofía</option>
                  <option value="Santacruz">Santacruz</option>
                  <option value="Santafé de Antioquia">Santafé de Antioquia</option>
                  <option value="Santana">Santana</option>
                  <option value="Santander de Quilichao">Santander de Quilichao</option>
                  <option value="Santiago">Santiago</option>
                  <option value="Santiago">Santiago</option>
                  <option value="Santiago de Tolú">Santiago de Tolú</option>
                  <option value="Santo Domingo">Santo Domingo</option>
                  <option value="Santo Tomás">Santo Tomás</option>
                  <option value="Santuario">Santuario</option>
                  <option value="Sapuyes">Sapuyes</option>
                  <option value="Saravena">Saravena</option>
                  <option value="Sardinata">Sardinata</option>
                  <option value="Sasaima">Sasaima</option>
                  <option value="Sativanorte">Sativanorte</option>
                  <option value="Sativasur">Sativasur</option>
                  <option value="Segovia">Segovia</option>
                  <option value="Sesquilé">Sesquilé</option>
                  <option value="Sevilla">Sevilla</option>
                  <option value="Siachoque">Siachoque</option>
                  <option value="Sibaté">Sibaté</option>
                  <option value="Sibundoy">Sibundoy</option>
                  <option value="Silos">Silos</option>
                  <option value="Silvania">Silvania</option>
                  <option value="Silvia">Silvia</option>
                  <option value="Simacota">Simacota</option>
                  <option value="Simijaca">Simijaca</option>
                  <option value="Simití">Simití</option>
                  <option value="Sincé">Sincé</option>
                  <option value="Sincelejo">Sincelejo</option>
                  <option value="Sipí">Sipí</option>
                  <option value="Sitionuevo">Sitionuevo</option>
                  <option value="Soacha">Soacha</option>
                  <option value="Soatá">Soatá</option>
                  <option value="Socha">Socha</option>
                  <option value="Socorro">Socorro</option>
                  <option value="Socotá">Socotá</option>
                  <option value="Sogamoso">Sogamoso</option>
                  <option value="Solano">Solano</option>
                  <option value="Soledad">Soledad</option>
                  <option value="Solita">Solita</option>
                  <option value="Somondoco">Somondoco</option>
                  <option value="Sonson">Sonson</option>
                  <option value="Sopetrán">Sopetrán</option>
                  <option value="Soplaviento">Soplaviento</option>
                  <option value="Sopó">Sopó</option>
                  <option value="Sora">Sora</option>
                  <option value="Soracá">Soracá</option>
                  <option value="Sotaquirá">Sotaquirá</option>
                  <option value="Sotara">Sotara</option>
                  <option value="Suaita">Suaita</option>
                  <option value="Suan">Suan</option>
                  <option value="Suárez">Suárez</option>
                  <option value="Suárez">Suárez</option>
                  <option value="Suaza">Suaza</option>
                  <option value="Subachoque">Subachoque</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Suesca">Suesca</option>
                  <option value="Supatá">Supatá</option>
                  <option value="Supía">Supía</option>
                  <option value="Suratá">Suratá</option>
                  <option value="Susa">Susa</option>
                  <option value="Susacón">Susacón</option>
                  <option value="Sutamarchán">Sutamarchán</option>
                  <option value="Sutatausa">Sutatausa</option>
                  <option value="Sutatenza">Sutatenza</option>
                  <option value="Tabio">Tabio</option>
                  <option value="Tadó">Tadó</option>
                  <option value="Talaigua Nuevo">Talaigua Nuevo</option>
                  <option value="Tamalameque">Tamalameque</option>
                  <option value="Támara">Támara</option>
                  <option value="Tame">Tame</option>
                  <option value="Támesis">Támesis</option>
                  <option value="Taminango">Taminango</option>
                  <option value="Tangua">Tangua</option>
                  <option value="Taraira">Taraira</option>
                  <option value="Tarapacá">Tarapacá</option>
                  <option value="Tarazá">Tarazá</option>
                  <option value="Tarqui">Tarqui</option>
                  <option value="Tarso">Tarso</option>
                  <option value="Tasco">Tasco</option>
                  <option value="Tauramena">Tauramena</option>
                  <option value="Tausa">Tausa</option>
                  <option value="Tello">Tello</option>
                  <option value="Tena">Tena</option>
                  <option value="Tenerife">Tenerife</option>
                  <option value="Tenjo">Tenjo</option>
                  <option value="Tenza">Tenza</option>
                  <option value="Teorama">Teorama</option>
                  <option value="Teruel">Teruel</option>
                  <option value="Tesalia">Tesalia</option>
                  <option value="Tibacuy">Tibacuy</option>
                  <option value="Tibaná">Tibaná</option>
                  <option value="Tibasosa">Tibasosa</option>
                  <option value="Tibirita">Tibirita</option>
                  <option value="Tibú">Tibú</option>
                  <option value="Tierralta">Tierralta</option>
                  <option value="Timaná">Timaná</option>
                  <option value="Timbío">Timbío</option>
                  <option value="Timbiquí">Timbiquí</option>
                  <option value="Tinjacá">Tinjacá</option>
                  <option value="Tipacoque">Tipacoque</option>
                  <option value="Tiquisio">Tiquisio</option>
                  <option value="Titiribí">Titiribí</option>
                  <option value="Toca">Toca</option>
                  <option value="Tocaima">Tocaima</option>
                  <option value="Tocancipá">Tocancipá</option>
                  <option value="Togüí">Togüí</option>
                  <option value="Toledo">Toledo</option>
                  <option value="Toledo">Toledo</option>
                  <option value="Tolú Viejo">Tolú Viejo</option>
                  <option value="Tona">Tona</option>
                  <option value="Tópaga">Tópaga</option>
                  <option value="Topaipí">Topaipí</option>
                  <option value="Toribio">Toribio</option>
                  <option value="Toro">Toro</option>
                  <option value="Tota">Tota</option>
                  <option value="Totoró">Totoró</option>
                  <option value="Trinidad">Trinidad</option>
                  <option value="Trujillo">Trujillo</option>
                  <option value="Tubará">Tubará</option>
                  <option value="Tuluá">Tuluá</option>
                  <option value="Tumaco">Tumaco</option>
                  <option value="Tunja">Tunja</option>
                  <option value="Tununguá">Tununguá</option>
                  <option value="Túquerres">Túquerres</option>
                  <option value="Turbaco">Turbaco</option>
                  <option value="Turbaná">Turbaná</option>
                  <option value="Turbo">Turbo</option>
                  <option value="Turmequé">Turmequé</option>
                  <option value="Tuta">Tuta</option>
                  <option value="Tutazá">Tutazá</option>
                  <option value="Ubalá">Ubalá</option>
                  <option value="Ubaque">Ubaque</option>
                  <option value="Ulloa">Ulloa</option>
                  <option value="Umbita">Umbita</option>
                  <option value="Une">Une</option>
                  <option value="Unguía">Unguía</option>
                  <option value="Unión Panamericana">Unión Panamericana</option>
                  <option value="Uramita">Uramita</option>
                  <option value="Uribe">Uribe</option>
                  <option value="Uribia">Uribia</option>
                  <option value="Urrao">Urrao</option>
                  <option value="Urumita">Urumita</option>
                  <option value="Usiacurí">Usiacurí</option>
                  <option value="Útica">Útica</option>
                  <option value="Valdivia">Valdivia</option>
                  <option value="Valencia">Valencia</option>
                  <option value="Valle de San José">Valle de San José</option>
                  <option value="Valle de San Juan">Valle de San Juan</option>
                  <option value="Valle del Guamuez">Valle del Guamuez</option>
                  <option value="Valledupar">Valledupar</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Vegachí">Vegachí</option>
                  <option value="Vélez">Vélez</option>
                  <option value="Venadillo">Venadillo</option>
                  <option value="Venecia">Venecia</option>
                  <option value="Venecia">Venecia</option>
                  <option value="Ventaquemada">Ventaquemada</option>
                  <option value="Vergara">Vergara</option>
                  <option value="Versalles">Versalles</option>
                  <option value="Vetas">Vetas</option>
                  <option value="Vianí">Vianí</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Vigía del Fuerte">Vigía del Fuerte</option>
                  <option value="Vijes">Vijes</option>
                  <option value="Villa Caro">Villa Caro</option>
                  <option value="Villa de Leyva">Villa de Leyva</option>
                  <option value="Villa de San Diego de Ubate">Villa de San Diego de Ubate</option>
                  <option value="Villa del Rosario">Villa del Rosario</option>
                  <option value="Villa Rica">Villa Rica</option>
                  <option value="Villagarzón">Villagarzón</option>
                  <option value="Villagómez">Villagómez</option>
                  <option value="Villahermosa">Villahermosa</option>
                  <option value="Villamaría">Villamaría</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villanueva">Villanueva</option>
                  <option value="Villapinzón">Villapinzón</option>
                  <option value="Villarrica">Villarrica</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Villavieja">Villavieja</option>
                  <option value="Villeta">Villeta</option>
                  <option value="Viotá">Viotá</option>
                  <option value="Viracachá">Viracachá</option>
                  <option value="Vistahermosa">Vistahermosa</option>
                  <option value="Viterbo">Viterbo</option>
                  <option value="Yacopí">Yacopí</option>
                  <option value="Yacuanquer">Yacuanquer</option>
                  <option value="Yaguará">Yaguará</option>
                  <option value="Yalí">Yalí</option>
                  <option value="Yarumal">Yarumal</option>
                  <option value="Yavaraté">Yavaraté</option>
                  <option value="Yolombó">Yolombó</option>
                  <option value="Yondó">Yondó</option>
                  <option value="Yopal">Yopal</option>
                  <option value="Yotoco">Yotoco</option>
                  <option value="Yumbo">Yumbo</option>
                  <option value="Zambrano">Zambrano</option>
                  <option value="Zapatoca">Zapatoca</option>
                  <option value="Zapayán">Zapayán</option>
                  <option value="Zaragoza">Zaragoza</option>
                  <option value="Zarzal">Zarzal</option>
                  <option value="Zetaquira">Zetaquira</option>
                  <option value="Zipacón">Zipacón</option>
                  <option value="Zipaquirá">Zipaquirá</option>
                  <option value="Zona Bananera">Zona Bananera</option>
              </select>
          </div>

        <!-- Campo barrio-->
        <div class="col-md-2">
            <label for="barrio" class="form-label" name="barrio" id="neighborhood"><b>Barrio</b></label>
            <input
              type="text"
              name="barrio"
              id="barrio"
              class="form-control"
              required="true"
              pattern="[a-zA-Z0-9\s\u00C0-\u017F]+"
              title="No se permiten caracteres especiales"
              v-model="registroVisualizar.barrio"
              disabled= "true"
            />
          </div>

        <!-- Campo dirección-->
        <div class="col-md-6">
          <label for="direccion" class="form-label" name="direccion" id="address"><b>Dirección</b></label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            class="form-control"
            required="true"
            v-model="registroVisualizar.direccion"
            disabled= "true"
            />
        </div>
  
        <!-- Campo peso-->
        <div class="col-md-2">
          <label for="peso" class="form-label" name="peso" id="weight"> <b>Peso (Kg)</b> </label>
          <input
            type="number"
            name="peso"
            id="peso"
            class="form-control"
            required="true"
            min="1"
            v-model="registroVisualizar.peso"
            disabled= "true"
          />
        </div>

        <!-- Campo tipo de sangre-->
        <div class="col-md-2">
            <label for="sangre" class="form-label" name="sangre" id="blood"><b>Tipo de sangre</b></label>
            <select
              name="sangre"
              id="sangre"
              class="form-select"
              aria-label="Default select example"
              required="true"
              v-model="registroVisualizar.tipoSangre"
              disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
  
        <!-- Campo CIE-11-->
        <div class="col-md-4">
          <label for="dato" class="form-label" name="cie11" id="cie11"><b>CIE-11</b></label>
          <select 
          class="form-select"
          name="codigoEnfermedades"
          id="codigoEnfermedades"
          required
          v-model="registroVisualizar.cie"
          disabled= "true"
          >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="1F54.0">1F54.0</option>
              <option value="1F54.1">1F54.1</option>
              <option value="1F54.2">1F54.2</option>
              <option value="1F54.3">1F54.3</option>
          </select>
        </div>
  
        <!-- Campo DIAGNÓSTICO-->
        <div class="col-md-4">
            <label for="diagnostico" class="form-label" name="diagnostico" id="diagnostic"><b>Diagnóstico</b></label>
            <select
              name="diagnostico"
              id="diagnostico"
              class="form-select"
              required="true"
              v-model="registroVisualizar.diagnostico"
              disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="D1">Leishmaniasis visceral</option>
              <option value="D2">Leishmaniasis cutánea</option>
              <option value="D3">Leishmaniasis mucocutánea</option>
              <option value="D4">Leishmaniasis, no especificada</option>
            </select>
          </div>
      
        <!-- Campo Estado de actividad-->
        <div class="col-md-4">
            <label for="estado"  class="form-label" name="estado" id="state"><b>Estado de actividad</b></label>
            <select
              name="estado"
              id="estado"
              class="form-select"
              required="true"
              v-model="registroVisualizar.estadoActividad"
              disabled= "true"
            >
              <option selected="true" disabled="true">Selecciona</option>
              <option value="en espera">En espera</option>
              <option value="en proceso">En proceso</option>
              <option value="terminado">Terminado</option>
              <option value="suspendido">Incompleto</option>
            </select>
          </div>

        <!-- Campo Nombre Acudiente
            <div class="col-md-3">
              <label for="acudiente" class="form-label" name="acudiente" id="parent"><b>Nombre del acudiente</b></label>
              <input
                type="text"
                name="acudiente"
                id="acudiente"
                class="form-control"
                placeholder="Menor de 18 años"
                disabled="true"
              />
            </div>-->
      
        <!-- Campo tipo de documento acudiente
        <div class="col-md-3">
            <label for="tipodocumentoacu" class="form-label"><b>Tipo de documento</b></label>
            <select name="tipodocumentoacu" id="tipodocumentoacu" class="form-select" required="true" disabled="true">
              <option selected="true" disabled="true">Selecciona</option>
              <option value="CedulaCacu">Cédula de ciudadania</option>
              <option value="CedulaEacu">Cédula de extrangeria</option>
            </select>
            </div>-->
    
          <!-- Campo número de documento acudiente
          <div class="col-md-2">
            <label for="numeroidacu" class="form-label"><b>Número de documento</b></label>
            <input
              type="number"
              name="numeroidacu"
              id="numeroidacu"
              class="form-control"
              required="true"
              placeholder="Menor de 18 años"
              disabled="true"
            />
          </div>-->
  
        <!-- Campo de parentezco acudiente
        <div class="col-md-2">
            <label for="parentezcoacu" class="form-label"><b>Parentezco</b></label>
            <input
              type="text"
              name="parentezcoacu"
              id="parentezcoacu"
              class="form-control"
              placeholder="Menor de 18 años"
              disabled="true" 
            />
          </div>-->

        <!-- Campo teléfono acudiente
            <div class="col-md-2">
              <label for="telefonoacu" class="form-label"><b>Número de celular</b></label>
              <input
                type="number"
                name="telefonoacu"
                id="telefonoacu"
                class="form-control"
                placeholder="Menor de 18 años"
                disabled="true"  
              />
            </div>-->
       
        <!-- Linea separadora-->
        <hr>

    <!-- prescripción del medicamento-->
        <label class="visually" for="inlineFormInputGroupUsername" style="color: #50D8AF; font-size: larger;">
            <svg class="bi me-2" width="16" height="16"><use href="#star"/></svg>
            <b>Prescripción del medicamento</b></label>

        <!-- Campo Medicamento-->
        <div class="col-md-5">
        <label for="medicamento" class="form-label" name="medicamento" id="drug"><b>Medicamento</b></label>
          <input
            type="text"
            name="medicamento"
            id="medicamento"
            class="form-control"
            required="true"
            v-model="registroVisualizar.medicamento"
            disabled= "true"
            />
        </div>
  
        <!-- Campo principio activo-->
        <div class="col-md-3">
        <label for="principio" class="form-label" name="principioActivo" id="main_substance"><b>Principio activo</b></label>
          <input
            type="text"
            name="principio"
            id="principio"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroVisualizar.principioActivo"
            disabled= "true"
            />
        </div>
  
        <!-- Campo concentración-->
        <div class="col-md-2">
        <label for="Concentracion" class="form-label" name="concentracion" id="concentration"><b>Concentración</b></label>
          <input
            type="text"
            name="Concentracion"
            id="Concentracion"
            class="form-control"
            required="true"
            v-model="registroVisualizar.concentracion"
            disabled= "true"
            />
        </div>
    
        <!-- Campo forma farmacéutica-->
        <div class="col-md-2">
        <label for="formaf" class="form-label" name="formaFarmaceutica" id="pharmaceuticalForm"><b>Forma farmacéutica</b></label>
          <input
            type="text"
            name="formaf"
            id="formaf"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroVisualizar.formaFarmaceutica"
            disabled= "true"
            />
        </div>
  
        <!-- Campo unidad medida-->
        <div class="col-md-2">
            <label for="unidad" class="form-label" name="unidadMedida" id="unity"><b>Unidad de medida</b></label>
              <input
                type="text"
                name="unidad"
                id="unidad"
                class="form-control"
                required="true"
                v-model="registroVisualizar.unidadMedida"
                disabled= "true"
                />
            </div>
            
        <!-- Campo presentación comercial-->
        <div class="col-md-2">
        <label for="presentacom" class="form-label" name="presentacion" id="marketPresentation"><b>Presentación comercial</b></label>
          <input
            type="text"
            name="presentacom"
            id="presentacom"
            class="form-control"
            required="true"
            v-model="registroVisualizar.presentacionComercial"
            disabled= "true"
            />
        </div>

        <!-- Campo dosis-->
        <div class="col-md-2">
            <label for="dosis" class="form-label" name="dosis" id="dose"><b>Dosis del medicamento</b></label>
              <input
                type="text"
                name="dosis"
                id="dosis"
                class="form-control"
                required="true"
                v-model="registroVisualizar.dosisMedicamento"
                disabled= "true"
                />
            </div>
    
        <!-- Campo vía administración-->
        <div class="col-md-3">
        <label for="dosis" class="form-label" name="administracion" id="admin"><b>Vía de administración</b></label>
          <input
            type="text"
            name="administracion"
            id="administracion"
            class="form-control"
            required="true"
            pattern="[a-zA-Z\s\u00C0-\u017F]+"
            title="No se permiten numeros o caracteres especiales"
            v-model="registroVisualizar.víaAdministracion"
            disabled= "true"
            />
        </div>
  
        <!-- Campo frecuencia-->
        <div class="col-md-3">
        <label for="frecuencia" class="form-label" name="frecuencia" id="freq"><b>Frecuencia (h)</b></label>
          <input
            type="number"
            name="frecuencia"
            id="frecuencia"
            class="form-control"
            required="true"
            min="1"
            v-model="registroVisualizar.frecuencia"
            disabled= "true"
            />
        </div>
  
        <!-- Campo observaciones-->
        <div class="form-floating">
          <textarea
            name="observaciones"
            id="observaciones"
            style="height: 80px"
            class="form-control"
            v-model="registroVisualizar.observaciones"
            disabled= "true"
            >
          </textarea>
          <label for="observaciones"><b>Observaciones</b></label>
        </div>
    <!-- END prescripción del medicamento-->

    <!-- Botón guardar/cancelar-->
    <div class="col-12 align-items-end">
          <input type="button" class="btn btn-warning mr-1" value="Editar" @click="activarEdicion(registroVisualizar._id)">
          <input type="button" class="btn btn-danger" @click="editar=false, consultar=true, ver=false" value="Cancelar">
      </div>
      </form>
    <!-- END Formulario VISUALIZAR datos de paciente-->

    <Footer/>

    </div>
</template>

<style scoped>
  
  /*Vendor CSS Files*/
  @import '../assets/vendor/bootstrap/css/bootstrap.min.css';

  /*Template Main CSS File*/
  @import '../assets/vendor/landing/css/style.css';   

  /*Permite centrar la tabla y que no quede al 100% del ancho*/
  table{
                position:relative;
                margin:auto;
                width:80%;
                left:auto;
            }

  /*Vamos a ocultar la primera columna con el CÓDIGO === _id*/
  table tr td:nth-child(1), table tr th:nth-child(1){
    border:1px dashed darkgreen;
    /*Quita esta linea y mira que pasa :)*/display:none;
  }

</style>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Registros',

  data(){
    return{
      registros:[], //Listar
      registroEditar: {}, //Editar

      editar:false, //Bandera aparece o no aparece
      ver: false,
      consultar: true,
      registroVisualizar:{}
    }
  },
  
  created(){
    this.listarRegistros(); //Listar datos
    },

  methods: {
    listarRegistros(){ //Listar datos
    this.axios.get('/registro')
    .then(res=>{
        console.log(res.data);
        this.registros = res.data;
    })
    .catch((e)=>{
        console.log(e.response)
    })
  },

  search(){ //Botón busqueda documento dentro de la tabla
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("entrada");
    filter = input.value.toUpperCase();
    table = document.getElementById("datos");
    tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  },
  eliminarRegistro (id){ //Eliminar
      this.axios.delete(`/registro/${id}`)
      .then(res=>{
          const index = this.registros.findIndex(item=>item._id===res.data._id);
          this.registros.splice(index,1);
      })
      .catch(e=>{
          console.log(e.response);
      })
  },
    activarEdicion(id){ //Activar vista para traer datos
      this.editar = true;
      this.consultar = false,
      this.ver = false,
      this.axios.get(`/registro/${id}`)
      .then(res=>{

          this.registroEditar=res.data;
          // this.$router.push({path: '/editar-paciente'}) ;
      })
      
      .catch(e=>{
          console.log(e.response);
      })
  },
    editarRegistro(item){ //Permite que al realizar cambios se guarden en la base de datos

      this.axios.put(`/registro/${item._id}`, item)
      .then(res=>{

          const index = this.registros.findIndex(n=> n._id===res.data._id);
          this.registros[index].nombres = res.data.nombres;
          this.registros[index].apellidos = res.data.apellidos;
          this.registros[index].tipoDocumento = res.data.tipoDocumento;

          this.registros[index].idDocumento = res.data.idDocumento;
          this.registros[index].fechaNacimiento = res.data.fechaNacimiento;
          this.registros[index].sexo = res.data.sexo;
          this.registros[index].idCelular = res.data.idCelular;
          this.registros[index].departamento = res.data.departamento;
          this.registros[index].municipio = res.data.municipio;
          this.registros[index].barrio = res.data.barrio;
          this.registros[index].direccion = res.data.direccion;
          this.registros[index].peso = res.data.peso;
          this.registros[index].tipoSangre = res.data.tipoSangre;
          this.registros[index].cie = res.data.cie;
          this.registros[index].diagnostico = res.data.diagnostico;
          this.registros[index].estadoActividad = res.data.estadoActividad;
          this.registros[index].medicamento = res.data.medicamento;
          this.registros[index].principioActivo = res.data.principioActivo;
          this.registros[index].concentracion = res.data.concentracion;
          this.registros[index].formaFarmaceutica = res.data.formaFarmaceutica;
          this.registros[index].unidadMedida = res.data.unidadMedida;
          this.registros[index].unidadMedida = res.data.unidadMedida;
          this.registros[index].presentacionComercial = res.data.presentacionComercial;
          this.registros[index].dosisMedicamento = res.data.dosisMedicamento;
          this.registros[index].víaAdministracion = res.data.víaAdministracion;
          this.registros[index].frecuencia = res.data.frecuencia;
          this.registros[index].observaciones = res.data.observaciones;

          this.editar=false;
          this.consultar=true

      })
      .catch(e=>{
          console.log(e.response);
      })
  },
    activarVisualizacion(id){
      this.ver = true;
      this.editar=false;
      this.consultar= false,
      
      this.axios.get(`/registro/${id}`)
      .then(res=>{

          this.registroVisualizar=res.data;
      })
      .catch(e=>{
          console.log(e.response);
      })
  }
  },
  components:{
      Navbar,
      Footer
  }
};
</script>