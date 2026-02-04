import React from 'react'

export const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center'>


            <div className='mt-5 flex flex-col items-center justify-center'>
                <div className='flex flex-wrap'>
                    <div className='bg-linear-to-r from-green-400 via-green-500 to-green-700 w-10 h-10 rounded-full'></div>
                    <h1 className='ml-2 my-auto text-2xl font-bold'>Lorem Ipsum</h1>
                </div>
                <div className='w-96 my-10'>
                    <p className='text-lg font-semibold p-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam alias cupiditate ipsam dolore hic, dicta natus ipsa nemo quia corporis aperiam quaerat vel aut nam eligendi praesentium ad similique distinctio!</p>
                </div>    
            </div>



            <div className='mt-5 flex flex-col items-center justify-center'>
                <div className='flex flex-wrap'>
                    <div className='bg-linear-to-r from-green-400 via-green-500 to-green-700 w-10 h-10 rounded-full'></div>
                    <h1 className='ml-2 my-auto text-2xl font-bold'>Contacto</h1>
                </div>
                <div className='w-96 my-10 flex flex-col'>
                    <p className='text-lg font-semibold p-1'>Telefono: +56 9 8765 4321</p>
                    <p className='text-lg font-semibold p-1'>Email: ejemplo@ejemplo.com</p>
                    <p className='text-lg font-semibold p-1'>Direccion: Calle Falsa 123</p>
                </div>    
            </div>




            <div className='mt-5 flex flex-col items-center justify-center'>
                <div className='flex flex-wrap'>
                    <div className='bg-linear-to-r from-green-400 via-green-500 to-green-700 w-10 h-10 rounded-full'></div>
                    <h1 className='ml-2 my-auto text-2xl font-bold'>Redes Sociales</h1>
                </div>
                <div className='w-96 my-10'>
                    <p className='text-lg font-semibold p-1'>
                        <a href="" target='_blank'>Facebook: @ejemplo</a>
                    </p>
                    <p className='text-lg font-semibold p-1'>
                        <a href="" target='_blank'>Facebook: @ejemplo</a>
                    </p>
                    <p className='text-lg font-semibold p-1'>
                        <a href="" target='_blank'>Facebook: @ejemplo</a>
                    </p>
                </div>    
            </div>


            
        </div>
    )
}
