import React from 'react';

const Campo = ({persona, nombrecampo, tipo, onChangeFormulario}) => {
    
    const campo = nombrecampo.toLowerCase()
    
    return ( 
        <>
            <div className="mb-4 flex justify-center ">
                <label className="w-1/5 mx-1 text-center text-gray-700 text-sm font-bold my-auto" htmlFor={campo}>
                    {nombrecampo}
                </label>
                <input
                    className="w-full rounded border-2 p-2 text-gray-700 leading-tight mr-1 focus:outline-none focus:shadow-lg "
                    id={campo}
                    name={campo}
                    type={tipo}
                    placeholder={nombrecampo}
                    onChange={onChangeFormulario}
                    value={ persona.campo }
                />
            </div>
        </>
     );
}
 
export default Campo;