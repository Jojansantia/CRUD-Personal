import React from 'react';
import { useHistory } from 'react-router-dom';
// import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { obtenerPersonaEditar } from '../actions/personaActions';


const Persona = ({persona}) => {

    const { nombre, edad } = persona;
    
    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección
   
    const redireccionarEdicion = producto => {
        dispatch( obtenerPersonaEditar(producto) );
        history.push(`/personal/editar/${producto.id}`)
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
                    className="my-5 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                    >
                    Editar
                </button>
                
            </td>
        </tr>
        </>
     );
}
 
export default Persona;