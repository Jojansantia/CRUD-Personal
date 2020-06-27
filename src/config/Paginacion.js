import React from 'react';

const Paginacion = ({currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let style = "border px-3 py-1 hover:border-blue-500 rounded-md "

  return (
    <>
      <nav>
        <ul className="flex justify-center">
            {pageNumbers.map(number => (
                <li key={number} className='my-3 mx-1'>
                    <a onClick={() => paginate(number)} href='#!' 
                    className={currentPage === number 
                        ? style + "bg-blue-700 text-white" : style}
                    >
                        {number}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default Paginacion;