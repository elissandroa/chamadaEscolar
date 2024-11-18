import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';


type Props = {
    formAddVisible: boolean;
    setFormAddVisible: (formAddVisible: boolean) => any;
}

export const FormAddTeacher = ({ formAddVisible, setFormAddVisible }: Props) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [disciplines, setDisciplines] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(()=>{
        api.get("/disciplines", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setDisciplines(response.data));
    },[])


const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const teacher = {
        name,
        phone,
        Addresses: [],
        Disciplines: []
    }

    await api.post("/teachers", teacher, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => response.data)
        .catch((err) => console.log(err))
    setFormAddVisible(!formAddVisible);
}

return (
    <div className="modal">
        <div className='form-container'>
            <h2>Professores</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Nome:</label>
                    <input
                        name='name'
                        placeholder='Digite o nome do professor'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Telefone:</label>
                    <input
                        name='phone'
                        placeholder='Digite o telefone do professor'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="disciplines">Disciplina:</label>
                    <select name="discipline" id="discipline" onChange={(e: FormEvent<HTMLElement>) => setDisciplineId(e.target.value)}>
                        <option value="" className='optionPlaceholder'>Selecione uma Disciplina</option>
                        {disciplines.map((discipline) => (
                            <option value={discipline.id} key={discipline.id}>{discipline.name}</option>
                        ))}
                    </select>
                </div>
                <div className='form-actions'>
                    <FormButton type='submit' value='Cadastrar' inputClass='success' />
                    <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormAddVisible(!formAddVisible)} />
                </div>
            </form>
        </div>
    </div>
)
}
