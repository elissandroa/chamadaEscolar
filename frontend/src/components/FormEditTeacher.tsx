import { FormEvent, useEffect, useState } from 'react';
import './addforms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type teacherType = {
    name: string;
    phone: string;
    id: number;
}


export const FormEditTeacher = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [teacher, setTeacher] = useState<teacherType>({});
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/teachers/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setTeacher(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedTeacher = {
            name,
            phone,
            Addresses: [],
            Disciplines: []
        }
        api.patch(`/teachers/s/${id}`, updatedTeacher, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(teacher.name);
        setPhone(teacher.phone);
    }, [teacher])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Professores</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Nome:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome do aluno'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Telefone:</label>
                        <input
                            name='phone'
                            placeholder='Digite o telefone do aluno'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='form-actions'>
                        <FormButton type='submit' value='Atualizar' inputClass='success' />
                        <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormEditVisible(!formEditVisible)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
