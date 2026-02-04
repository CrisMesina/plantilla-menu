import React from 'react'
import { Nav } from '../components/Nav'
import { useEffect, useState } from 'react'
import { ListMenu } from '../Menu/ListMenu'
import { Footer } from './components/Footer'

export const Home = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])



    return (
        <>
            <div className='min-h-screen w-full max-w-full'>
                
                <div className='hero-img min-h-screen w-full h-screen absolute top-0 left-0 z-10'></div>

                <div className={`fixed top-10 md:left-0 left-2 md:top-0 z-20 p-4  md:h-30 ${ scrolled ? 'md:bg-gray-700/70 md:shadow-lg md:shadow-[#1e1e1e]' : ''} mx-auto w-full`}>
                    <Nav/>
                </div>
                <div className='flex w-full text-white items-center justify-center h-79'>
                    <h1 className='font-bold text-7xl'>MENÚ</h1>
                </div>
                <div className='relative  z-10 bg-white  min-h-screen text-black max-w-full'>
                    <ListMenu/>
                </div>
            </div> 

            {/* FOOTER */}
            <div className='relative bg-zinc-600 h-auto'>
                <Footer/>
            </div>
            
        </>
    )
}
