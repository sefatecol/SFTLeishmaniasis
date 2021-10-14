function validarLogin(){
    if (document.form.password.value=="ANTIMONIATO" && document.form.login.value=="ftorob@unal.edu.co"){ /*Compara los datos introducidos en el form vs los definidos aquí*/
            document.form.submit(); /*Permite pasar a la siguiente página*/
            window.location.replace("zmain.html"); /*Redirecciona al sidebar_main */
        }
        else{
             alert("Ups... Correo o contraseña incorrecta"); /*Alerta en caso de datos que no concuerdan*/
        }
    }