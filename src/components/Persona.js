import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { borrarPersonaAction, obtenerPersonaEditar } from '../actions/personaActions';


const Persona = ({persona}) => {

    const { nombre, edad, id } = persona;
    
    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección
   
    const redireccionarEdicion = persona => {
        dispatch( obtenerPersonaEditar(persona) );
        history.push(`/personal/editar/${persona.id}`)
    }

    const confirmarEliminarProducto = id => {

        // preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( borrarPersonaAction(id) );
            }
        });
    }

    return ( 
        <> 
        <tr>
            <td className="border text-center">{nombre}</td>
            <td className="border text-center">  {edad} </td>
            <td className="border text-center">
                <button 
                    type="submit"
                    onClick={ () => redireccionarEdicion(persona) }
                    className="m-2 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                    >
                    Editar
                </button>

                <button 
                    type="submit"
                    className="m-2 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar </button>
                
            </td>
        </tr>
        </>
     );
}
 
export default Persona;