import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarPersonaAction } from '../actions/personaActions';
import { useHistory } from 'react-router-dom';

const EditarPersona = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ persona, guardarPersona] = useState({
        nombre: '',
        edad: '' 
    })

    const personaeditar = useSelector(state => state.personal.personaeditar);

    useEffect( () => {
        if(personaeditar){
            guardarPersona(personaeditar);
        }
    }, [personaeditar]);

    const onChangeFormulario = e => {
        guardarPersona({
            ...persona,
            [e.target.name] : e.target.value
        })
    }
    
    const submitEditarPersona = e => {
        e.preventDefault();
        dispatch( editarPersonaAction(persona) );
        history.push('/');
    }

    return ( 
        <> 
            <div className=" md:w-2/5 m-auto justify-center">
                <h1 className="text-center my-3 text-gray-700 text-2xl font-bold text-black ">
                    Editar Persona
                </h1>
                <form onSubmit={submitEditarPersona} >
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
                            onChange={onChangeFormulario}
                            value={persona.nombre}
                        />
                    </div>
                    <div className="mb-4 flex ">
                        <label className="w-1/5 text-center mr-2 text-gray-700 text-sm font-bold my-auto" htmlFor="alumno">
                            Edad:
                        </label>
                        <input
                            className="w-full rounded border-2 p-2 text-gray-700 leading-tight mr-1 focus:outline-none focus:shadow-lg "
                            id="edad"
                            name="edad"
                            type="number"
                            placeholder="Edad"
                            onChange={onChangeFormulario}
                            value={persona.edad}
                        />
                    </div>
                    <div className="flex justify-center">
                    <button
                            onClick={e => history.push('/')}
                            type="button"
                            className="my-5 mx-1 bg-gray-800 w-1/3 rounded-md p-2 text-center text-white uppercase hover:bg-gray-900"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="my-5 mx-1 bg-blue-700 w-1/3 rounded-md p-2 text-center text-white uppercase hover:bg-blue-900"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>    
        </>
     );
}
 
export default EditarPersona;