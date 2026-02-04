import React, { useEffect, useMemo, useState } from 'react'
import { menu } from '../data/nav'
export const ListMenu = () => {


    const [productos, setProductos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('todos');


    useEffect(()=> {
        const obtenerProductos = async() =>{
            try {
                const res = await fetch('/menu.json')
                const listProduct = await res.json()
                setProductos(listProduct);
            }
            catch (error) {
                console.error(error)
            }
        }

        obtenerProductos();
    }, []);


    const productosFiltrados = useMemo(()=>{
        let resultado = productos;
        
        if(selectedCategory !== 'todos'){
            resultado = resultado.filter((p) => p.categoria.toUpperCase() === selectedCategory);
        }

        return resultado;

    }, [productos, selectedCategory]);

    //  Paginacion

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPage = 6;

    const totalPages = Math.ceil(productosFiltrados.length / itemsPage);
    const lastProduct = currentPage * itemsPage;
    const firstProduct = lastProduct - itemsPage;
    const currentProducts = productosFiltrados.slice(firstProduct, lastProduct)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

        window.scrollTo({top: 0 , behavior: 'smooth'});
    }



    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-auto'>
                    <h1 className='text-center text-2xl mt-5 mb-10 font-extrabold'>Categorías</h1>
                    <ul className='p-2 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap'>
                    {menu.map((m , i) =>(
                        <li 
                            key={i} 
                            className='shrink-0 md:shrink m-2 text-start border-b border-b-gray-200 p-4 text-black font-bold'
                            onClick={() => setSelectedCategory(m.label.toUpperCase())}
                        >
                            <div >
                                <input 
                                    type="radio" 
                                    name='categoria'
                                    value={m.label}
                                    checked={selectedCategory === m.label.toUpperCase()}
                                />
                                <span className='p-2'>{m.label}</span>
                            </div>
                        </li>
                    ))}
                    
                    </ul>
                </div>
                <div className='p-2 mx-auto'>
                    <h1 className='text-center text-3xl mx-12 mt-5 mb-10 font-bold'></h1>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                        {currentProducts.map((p, i) => (
                           <div key={i} className='flex md:w-120 h-40 md:h-50 mx-2 md:mx-10 my-10 rounded-2xl shadow hover:bg-zinc-300 transition-all duration-200 hover:will-change-auto hover:translate-y-1'>
                                <div>
                                    <img src={p.img} className='h-full w-50 object-cover rounded-l-2xl' alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <h1 className='mx-10 my-5 font-bold text-2xl'>{p.name}</h1>
                                    <span className='mx-10 font-bold text-blue-700 text-xl'>{p.price}</span>
                                </div>
                            </div> 
                        ))}
                    </div>
                    <div className='w-full flex justify-center'>
                            {totalPages > 1 && (
                                <div className='flex border space-x-4 mt-12'>
                                    <button
                                        onClick={() =>paginate(currentPage -1)}
                                        disabled={currentPage===1}
                                        className='bg-white/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg border-2
                                        border-purple-200 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50
                                        disabled:cursor-not-allowed'
                                    >
                                        Anterior
                                    </button>
                                    <div className='md:flex space-x-2 mx-auto hidden'>
                                        {[...Array(totalPages)].map((_, index) =>(
                                            <button
                                                key={index}
                                                onClick={() => paginate(index + 1)}
                                                className={`w-12 h-12 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ${
                                                    currentPage === index + 1
                                                    ? "text-black transform scale-110"
                                                    : "bg-white/80 backdrop-blur-sm text-stone-700 hober:bg-rose-100"}`}
                                                >
                                                    {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className='bg-white/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg border-2
                                        border-purple-200 hover:border-purple-400 transfomr hover:scale-105 transition-all duration-300 disabled:opacity-50
                                        disabled:cursor-not-allowed'>
                                            Siguiente
                                    </button>

                                </div>
                            )}
                        </div>
                </div>
            </div>
        </>
    )
}
