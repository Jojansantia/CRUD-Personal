import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { borrarPersonaAction, obtenerPersonaEditar } from '../actions/personaActions';

const Persona = ({persona}) => {

    const { nombre, edad, id } = persona;
    
    const dispatch = useDispatch();
    const history = useHistory(); 
   
    const redireccionarEdicion = persona => {
        dispatch( obtenerPersonaEditar(persona) );
        history.push(`/personal/editar/${persona.id}`)
    }

    const confirmarEliminarPersona = id => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si la persona se elimina, no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch( borrarPersonaAction(id) );
            }
        });
    }

    return ( 
        <> 
            <tr>
                <td className="border text-center"> {nombre} </td>
                <td className="border text-center"> {edad} </td>
                <td className="border text-center">
                    <button 
                        type="submit"
                        onClick={ () => redireccionarEdicion(persona) }
                        className="m-2 bg-blue-700 rounded-md p-2 text-white uppercase hover:bg-blue-900"
                        >
                        Editar
                    </button>
                    <button 
                        type="submit"
                        className="m-2 bg-red-700 rounded-md p-2 text-white uppercase hover:bg-red-900"
                        onClick={() => confirmarEliminarPersona(id)}
                    >Eliminar </button>
                </td>
            </tr>
        </>
     );
}
 
export default Persona;