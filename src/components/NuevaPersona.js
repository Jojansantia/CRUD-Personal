import React, { useState } from 'react';
import Campo from './Campo';
import { useDispatch, useSelector } from 'react-redux';
import { MetroSpinner } from 'react-spinners-kit';

import { crearNuevaPersonaAction } from '../actions/personaActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

const shortid = require('shortid');
 
const NuevaPersona = ({history}) => {

    const [ persona, guardarPersona] = useState({
        nombre: '',
        edad: '' ,
        cargo: '',
        telefono: '',
        id:shortid.generate()
    })

    const {nombre, edad, cargo, telefono, id} = persona

    const onChangeFormulario = e => {
        console.log(e.target.name);
        
        guardarPersona({
            ...persona,
            [e.target.name] : e.target.value
        })
    }

    const dispatch = useDispatch();

    const cargando = useSelector( state => state.personal.loading );
    const error = useSelector(state => state.personal.error);
    const alerta = useSelector(state => state.alerta.alerta);

    const agregarPersona = persona => dispatch( crearNuevaPersonaAction(persona) );

    const submitNuevaPersona = e => {
        e.preventDefault();

        if(nombre.trim() === '' || edad <= 0 || cargo.trim() === '' || telefono <= 0) {
            const alerta = {
                msg: 'Todos los campos son obligatorios',
                style: 'bg-red-400 w-4/5 font-bold m-auto my-1 text-center '
            }
            dispatch( mostrarAlerta(alerta) );
            return;
        }

        dispatch( ocultarAlertaAction() );

        agregarPersona({
            nombre,
            edad,
            cargo,
            telefono,
            id
        });

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
                    
                    <Campo persona={persona} nombrecampo={'Nombre'} tipo={'text'} onChangeFormulario={onChangeFormulario} />
                    <Campo persona={persona} nombrecampo={'Edad'} tipo={'number'} onChangeFormulario={onChangeFormulario} />
                    <Campo persona={persona} nombrecampo={'Cargo'} tipo={'text'} onChangeFormulario={onChangeFormulario} />
                    <Campo persona={persona} nombrecampo={'Telefono'} tipo={'number'} onChangeFormulario={onChangeFormulario} />

                    <div className="flex justify-around">
                        <button
                            onClick={e => history.push('/')}
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
                    </div>

                    { cargando && <div className="flex justify-center my-1"> <MetroSpinner  color="#000" /> </div>  }

                    { error && <p className="bg-red-400 font-bold text-center w-4/5 m-auto p-3 my-2">Hubo un error</p> }

                </form>
            </div> 
        </>
     );
}
 
export default NuevaPersona;