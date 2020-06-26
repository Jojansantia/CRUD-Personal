import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarPersonaAction } from '../actions/personaActions';
import { useHistory } from 'react-router-dom';

const EditarPrsona = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ persona, guardarPersona] = useState({
        nombre: '',
        edad: '' 
    })

    const personaeditar = useSelector(state => state.personal.personaeditar);

    useEffect( () => {
        guardarPersona(personaeditar);
    }, [personaeditar]);

    const onChangeFormulario = e => {
        guardarPersona({
            ...persona,
            [e.target.name] : e.target.value
        })
    }

    const { nombre, edad} = persona;

    const submitEditarPersona = e => {
        e.preventDefault();

        dispatch( editarPersonaAction(persona) );
    
        history.push('/');
    }

    return ( 
        <> 
        <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                    Edicion
                </h1>
                <form onSubmit={submitEditarPersona} >
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
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
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
 
export default EditarPrsona;