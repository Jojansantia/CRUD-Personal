import React, { useEffect } from 'react';
import Persona from './Persona';

import { useSelector, useDispatch } from 'react-redux';
import { obtenerPersonalAction } from '../actions/personaActions';

const Personal = () => {

    const dispatch = useDispatch();

    useEffect( ()=> {
        const cargarPersonal = () => dispatch( obtenerPersonalAction() );
        cargarPersonal();
        // eslint-disable-next-line
    }, []);

    const personal = useSelector( state => state.personal.personal );
    const error = useSelector(state => state.personal.error);
    const cargando = useSelector(state => state.personal.loading);

    return ( 
        <>
            <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                Listado
            </h1>
            
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
        
            { cargando ? <p className="text-center">Cargando....</p> : null }
            
            <table className="text-center w-4/5 m-auto">
               <thead >
                    <tr>
                        <th className="border bg-gray-200 text-gray-700 px-4 py-2">Nombre</th>
                        <th className="border bg-gray-200 text-gray-700 px-4 py-2">Edad</th>
                        <th className="border bg-gray-200 text-gray-700 px-4 py-2">Acciones</th>
                    </tr>
               </thead>
               <tbody>
                   { personal.length !== 0 &&  (
                       personal.map(persona => (
                           <Persona
                                key={persona.id}
                                persona={persona}
                           />
                       ))
                   ) }
               </tbody>
           </table>

        </>
    );
}
 
export default Personal;