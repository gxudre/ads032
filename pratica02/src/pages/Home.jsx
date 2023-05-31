import { useContext } from "react"
import ContatosContext from "../contexts/ContatosContext"
import "./Home.css"

export default function Home() {

    const { meusContatos } = useContext(ContatosContext)

    return (
        <>
            <div>
            <h2 className="title">Meus Contatos</h2>
            </div>
            <div>
                <ul className="List-dad">
                    {meusContatos.map((contato, key) => <li id={key} className="list-li">{contato.nome} - {contato.telefone}</li>)}
                </ul>
            </div>

        </>
    )
}