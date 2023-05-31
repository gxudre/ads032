import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Novo.css"
import ContatosContext from '../contexts/ContatosContext'

export default function Novo(){

    const {incluirContato} = useContext(ContatosContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState : {errors}} = useForm()

    function onSubmit(data){
        incluirContato(data)
        navigate("/")
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className='fields'>
                 <label>Nome</label>
                 <input type='text' {...register("nome", {required: "Campo Obrigatório"})}/>
                 {errors.nome && <p>{errors.nome.message}</p>}
            </div>

            <div className='fields'>
                 <label>Telefone</label>
                 <input type='text' {...register("telefone", {required: "Campo Obrigatório"})}/>
                 {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>

            <div className='btn-post'>
                <button type='submit'>Enviar</button>
            </div>

        </form>
    )

}