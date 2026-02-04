import { useState } from 'react'
import { navs } from '../data/nav'

export const Nav = () => {


    const [open, isOpen] = useState(false);

    
    


    return (
        <>
            <div className=''>
                <div className='hidden md:block'>
                    <div className='grid grid-cols-1 md:grid-cols-3 w-full text-white font-bold '>
                        <div className='flex p-10'>
                            <a href="#inicio" className='my-auto hover:underline hover:decoration-2 hover:underline-offset-8  text-lg'>INICIO</a>
                        </div>
                        <div className=''>
                            <img src='/logo.png' className='absolute md:hidden lg:block lg:left-155 2xl:left-1/2 top-0 w-30 h-30 mx-auto'  alt="" />
                        </div>
                        <div>
                            <div className='flex items-end p-2 justify-end'>
                                {navs.map((n, i) =>(
                                    <span key={i} className='p-5'>
                                        <a href={n.link} className='mx-10 p-5 hover:underline hover:underline-offset-8 text-lg'> {n.label}</a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                { /* VISTA DE TELEFONO :D */}



                <div className='md:hidden block'>
                    <div className='w-20 -top-4 left-0 absolute'>
                        <button
                            onClick={() => isOpen(!open)}
                        >
                            <img src="/burger-menu.svg" className='w-15 h-15 shadow-lg shadow-green-400 border-t border-t-green-400 rounded-full bg-white  p-4' alt="" />
                        </button>
                    </div>
                    {open ? (
                            <>
                                <div className='absolute h-screen bg-zinc-400 z-20 w-60 -top-10 -left-2'>
                                   <div className='relative'>
                                        <div className='absolute top-0 right-0'>
                                            <button
                                            className='mt-2 p-2 rounded-full'
                                                onClick={() => isOpen(!open)}>
                                                <img src="/burger-close.svg" className='w-10 h-10 p-2 shadow-md shadow-green-400 border-t border-t-green-400 bg-white rounded-full' alt="" />
                                            </button>
                                        </div>
                                        <div className='shadow-lg'>
                                            <img src='/logo.png' className=' w-30 h-30 mx-auto'  alt="" />
                                        </div>
                                        <div className='flex shadow-md hover:bg-zinc-500 my-5'>
                                            <a href="#inicio" className=' mx-auto my-10 font-bold text-xl'>INICIO</a>
                                        </div>
                                        <div className=''>
                                            <div className=' text-center flex flex-col'>
                                                {navs.map((n, i) =>(
                                                    <span key={i} className='p-5 flex items-center justify-center hover:bg-zinc-500  w-full h-25 my-5 shadow-md'>
                                                        <a href={n.link} className='font-bold text-xl'> {n.label}</a>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                   </div>
                                </div>
                            </>
                        ) : (
                            <>


                            </>
                        )}
                </div>
            </div>
        </>
    )

}
