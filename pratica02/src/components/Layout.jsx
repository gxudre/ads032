import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navbar from './Navbar'


export default function Layout(){
    return(
        <>
        <header>
            <h1>@Contatinhos</h1>
            <Navbar/>
        </header>
        <main><Outlet/></main>
        <footer><p>Copyright 2023. Todos os direitos reservados.</p></footer>
        </>
    )
}