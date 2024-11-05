import { useNavigate } from 'react-router-dom'
import './addforms.css'
import { FormButton } from './FormButton'
import { Input } from './Input'

export const FormAddStudent = () => {
    const navigate = useNavigate();

    const onclick = () => {
        alert("Testando a função");
    }

    const cancel = () => {
        navigate(-1);
    }
    
    return (
       
        <div className='form-container'>
            <h2>Alunos</h2>
            <form>
                <Input labelTitle='Nome:' name='name' placeholder='Digite o nome do aluno' />
                <Input labelTitle='Telefone:' name='phone' placeholder='Digite o telefone do aluno'/>
                <div className='form-actions'>
                    <FormButton type='submit' value='Cadastrar' inputClass='success' onclick={onclick}/>
                    <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={cancel}/>
                </div>
            </form>
        </div>
    )
}
