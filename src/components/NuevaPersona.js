import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { crearNuevaPersonaAction } from '../actions/personaActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

const NuevaPersona = ({history}) => {

    const [nombre, guardarNombre] = useState('');
    const [edad, guardarEdad] = useState(0);

    const dispatch = useDispatch();

    const agregarPersona = persona => dispatch( crearNuevaPersonaAction(persona) );

    const submitNuevaPersona = e => {
        e.preventDefault();

        if(nombre.trim() === '' || edad <= 0) {

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( mostrarAlerta(alerta) );
            return;
        }

        dispatch( ocultarAlertaAction() );

        agregarPersona({
            nombre,
            edad
        });

        history.push('/');
    }

    return ( 
        <> 
            <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                Datos
            </h1>
            <form onSubmit={submitNuevaPersona} >
                <div className="mb-4 flex ">
                    <label className="w-1/3 text-center mr-2 text-gray-700 text-sm font-bold my-auto" htmlFor="codigo">
                        Nombre:
                    </label>
                    <input
                        className="appearance-none rounded border-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={e => guardarNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="mb-4 flex ">
                    <label className="w-1/3 text-center mr-2 text-gray-700 text-sm font-bold my-auto" htmlFor="alumno">
                        Edad:
                    </label>
                    <input
                        className="appearance-none rounded border-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                        id="edad"
                        name="edad"
                        type="number"
                        placeholder="Edad"
                        onChange={e => guardarEdad(Number(e.target.value))}
                        value={edad}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="my-5 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </>
     );
}
 
export default NuevaPersona;