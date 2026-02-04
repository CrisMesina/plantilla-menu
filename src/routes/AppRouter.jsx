
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../assets/Home/Home'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={ <Home/> } />

                </Routes>

            </BrowserRouter>
        </>
    )
}
