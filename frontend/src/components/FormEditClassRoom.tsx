import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type classroomType = {
    name: string;
    phone: string;
    id: number;
}


export const FormEditClassRoom = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [classroom, setClassRoom] = useState<classroomType>({});
    const [name, setName] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/classrooms/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setClassRoom(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedClassRoom = {
            name
        }
        api.patch(`/classrooms/s/${id}`, updatedClassRoom, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(classroom.name);
    }, [classroom])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Professores</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Nome:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome da turma'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
