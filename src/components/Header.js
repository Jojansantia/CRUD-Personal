import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <>
            <div className="mb-2 border w-full flex justify-between text-center justify-around">
                <h1 className="my-5 text-gray-700 text-5xl font-bold  uppercase">
                <Link to={'/'} className="text-light">
                        HEADER
                    </Link> 
                    </h1>
                    <Link to={"/personal/nuevo"}
                className="my-5 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"          
                  >Agregar Producto &#43;</Link>
            </div>

            
        </>
    );
}
 
export default Header;