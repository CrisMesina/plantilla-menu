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




    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <ul className='p-2 flex md:flex-col'>
                    <h1 className='text-center text-2xl mt-5 mb-10 md:block hidden font-extrabold'>Categorías</h1>
                    {menu.map((m , i) =>(
                        <li key={i} className='w-50 m-2 text-start border-b border-b-gray-200 p-4 text-black font-bold'>
                            <input 
                                type="radio" 
                                name='categoria'
                                value={m.label}
                                checked={selectedCategory === m.label.toUpperCase()}
                                onChange={(e) =>setSelectedCategory(e.target.value)}
                            />
                            <span className='p-2'>{m.label}</span>
                        </li>
                    ))}
                    
                </ul>
                <div className='p-2 mx-auto'>
                    <h1 className='text-center text-3xl mx-12 mt-5 mb-10 font-bold'></h1>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                        {productosFiltrados.map((p, i) => (
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
                </div>
            </div>
        </>
    )
}
