import React, { useEffect } from 'react';
import Persona from './Persona';

import { MetroSpinner } from 'react-spinners-kit';
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
            <h1 className=" mb-2 text-center text-gray-700 text-2xl font-bold text-black ">
                Listado
            </h1>
            
            { error ? <p className="bg-red-400 font-bold text-center  w-4/5 m-auto p-3 my-2">Hubo un error</p> : null }

            { cargando ? 
                <div className="flex justify-center my-1"> <MetroSpinner  color="#000" /> </div> 
            :
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
            }
        </>
    );
}
 
export default Personal;