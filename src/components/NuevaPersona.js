import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MetroSpinner } from 'react-spinners-kit';

import { crearNuevaPersonaAction } from '../actions/personaActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

const NuevaPersona = ({history}) => {

    const [nombre, guardarNombre] = useState('');
    const [edad, guardarEdad] = useState(0);

    const dispatch = useDispatch();

    const cargando = useSelector( state => state.personal.loading );
    const error = useSelector(state => state.personal.error);
    const alerta = useSelector(state => state.alerta.alerta);

    const agregarPersona = persona => dispatch( crearNuevaPersonaAction(persona) );

    const submitNuevaPersona = e => {
        e.preventDefault();

        if(nombre.trim() === '' || edad <= 0) {

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                style: 'bg-red-400 w-4/5 font-bold m-auto my-1 text-center '
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

    const handleClick = () => {
        history.push('/');
    }

    return ( 
        <> 
        <div className="border md:w-2/5 m-auto justify-center">
            <h1 className="text-center mb-3 bg-gray-400 text-gray-700 text-2xl font-bold text-black ">
                Datos Persona
            </h1>

            {alerta && <p className={alerta.style}> {alerta.msg} </p> }

            <form onSubmit={submitNuevaPersona} >
                <div className="mb-4 flex justify-center ">
                    <label className="w-1/5 mx-1 text-center text-gray-700 text-sm font-bold my-auto" htmlFor="codigo">
                        Nombre:
                    </label>
                    <input
                        className="w-full rounded border-2 p-2 text-gray-700 leading-tight mr-1 focus:outline-none focus:shadow-lg "
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={e => guardarNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="mb-4 flex ">
                    <label className="w-1/5 mx-1 text-center text-gray-700 text-sm font-bold my-auto" htmlFor="alumno">
                        Edad:
                    </label>
                    <input
                        className="w-full rounded border-2 p-2 text-gray-700 leading-tight mr-1 focus:outline-none focus:shadow-lg"
                        id="edad"
                        name="edad"
                        type="number"
                        placeholder="Edad"
                        onChange={e => guardarEdad(Number(e.target.value))}
                        value={edad}
                    />
                </div>
                <div className="flex justify-around">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="mb-4 mx-1 bg-gray-800 w-1/3 rounded-md p-2 text-center text-white uppercase hover:bg-gray-900"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="mb-4 mx-1 bg-blue-700 w-1/3 rounded-md p-2 text-center text-white uppercase hover:bg-blue-900"
                    >
                        Guardar
                    </button>

                    { cargando && <div className="flex justify-center my-1"> <MetroSpinner  color="#000" /> </div>  }
                        
                    { error && <p className="bg-red-400 font-bold text-center w-4/5 m-auto p-3 my-2">Hubo un error</p> }
                </div>
            </form>
        </div> 
        </>
     );
}
 
export default NuevaPersona;