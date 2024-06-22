function expandirColapsar(idElementoColapsable, idContenedorCollapse) {
    const elementoColapsable = document.getElementById(idElementoColapsable);
    const contenedorCollapse = document.getElementById(idContenedorCollapse);

    if (elementoColapsable.classList.contains('expandir')) { //Si caja tiene la clase expandir que haga:
        elementoColapsable.classList.remove('expandir');
        elementoColapsable.classList.add('colapsar');

        contenedorCollapse.classList.remove('color-expandido');
        contenedorCollapse.classList.add('color-colapsado');

        elementoColapsable.style.height = '0px';

    } else { // Si no, es que tiene la clase colapsar y hay que quitarla y añadir la clase expandir
        elementoColapsable.classList.remove('colapsar');
        elementoColapsable.classList.add('expandir');

        contenedorCollapse.classList.remove('color-colapsado');
        contenedorCollapse.classList.add('color-expandido');

        elementoColapsable.style.height = elementoColapsable.scrollHeight + 'px'
    }
}

function enviarMail() {
    const inputNombre = document.getElementById('input-nombre');
    const inputApellidos = document.getElementById('input-apellidos');
    const inputTelefono = document.getElementById('input-telefono');
    const inputCorreo = document.getElementById('input-correo');
    const textAreaMensaje = document.getElementById('input-mensaje');

    const nombre = inputNombre.value;
    const apellidos = inputApellidos.value;
    const telefono = inputTelefono.value;
    const correo = inputCorreo.value;
    const saltoLineaGmail = '%0D%0A';
    const mensaje = textAreaMensaje.value + saltoLineaGmail + saltoLineaGmail + 'Un saludo' + saltoLineaGmail + nombre + ' ' + apellidos + ', ' + telefono + ', ' + correo;

    const emailClinica = 'lauraarredondodev@gmail.com'
    const urlGmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + emailClinica + '&su=Cita&body=' + mensaje;

    window.open(urlGmail, '_blank');
}

