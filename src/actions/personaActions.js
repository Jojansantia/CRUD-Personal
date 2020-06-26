import {
    AGREGAR_PERSONA
    
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function crearNuevaPersonaAction(persona) {
    return async (dispatch) => {
        dispatch( agregarPersona() );

        try {
            // insertar en la API
            await clienteAxios.post('/personal', persona);

            // Si todo sale bien, actualizar el state
           //dispatch( agregarProductoExito(producto) );

            // Alerta
            Swal.fire(
                'Correcto', 
                'El producto se agregó correctamente',
                'success'
            );

        } catch (error) {
            console.log(error);
            // si hay un error cambiar el state
            //dispatch( agregarProductoError(true) );

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarPersona = () => ({
    type: AGREGAR_PERSONA,
    payload: true
});