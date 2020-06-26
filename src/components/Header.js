import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
        <>
            <div className="mb-2 border w-full flex px-5  justify-between">
                <h1 className="my-5 text-gray-700 text-5xl font-bold  uppercase">
                    <Link to={'/'} className="text-light">
                        Crud Personal
                    </Link> 
                </h1>
                <Link to={"/personal/nuevo"}
                    className=" bg-gray-800 my-10  rounded-md p-2 text-white uppercase hover:bg-gray-900" >
                        Agregar Persona
                </Link>
            </div>
        </>
    );
}
 
export default Header;