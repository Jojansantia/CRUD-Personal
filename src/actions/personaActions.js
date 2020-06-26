import {
    AGREGAR_PERSONA,
    COMENZAR_EDICION_PERSONA,
    COMENZAR_DESCARGA_PERSONAL,
    AGREGAR_PERSONA_EXITO,
    DESCARGA_PERSONAL_EXITO,
    OBTENER_PERSONA_EDITAR,
    PERSONA_EDITADA_EXITO
    
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
           dispatch( agregarPersonaExito(persona) );

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

const agregarPersonaExito = persona => ({
    type: AGREGAR_PERSONA_EXITO,
    payload: persona
})

export function editarPersonaAction(persona) {
    return async (dispatch) => {
        dispatch( editarPersona() );

        try {
            await clienteAxios.put(`/personal/${persona.id}`, persona);    
            dispatch( editarPersonaExito(persona) );
        } catch (error) {
            console.log(error);
           // dispatch( editarProductoError() );
        }
    }
}
const editarPersona = () => ({
    type: COMENZAR_EDICION_PERSONA
});

const editarPersonaExito = persona => ({
    type: PERSONA_EDITADA_EXITO,
    payload: persona
});

export function obtenerPersonaEditar(persona) {
    return (dispatch) => {
        dispatch( obtenerPersonaEditarAction(persona) )
    }
}

const obtenerPersonaEditarAction = persona => ({
    type: OBTENER_PERSONA_EDITAR,
    payload: persona
})

export function obtenerPersonalAction() {
    return async (dispatch) => {
        dispatch( descargarPersonal() );

        try {
            const respuesta = await clienteAxios.get('/personal');
            
            dispatch( descargaPersonalExitosa(respuesta.data) )
        } catch (error) {
            console.log(error);
           // dispatch( descargaProductosError() )
        }
    }
}

const descargarPersonal = () => ({
    type: COMENZAR_DESCARGA_PERSONAL,
    payload: true
});

const descargaPersonalExitosa = productos => ({
    type: DESCARGA_PERSONAL_EXITO,
    payload: productos
})