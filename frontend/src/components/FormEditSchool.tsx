import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type schoolType = {
    name: string;
}


export const FormEditSchool = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [school, setSchool] = useState<schoolType>({});
    const [name, setName] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/schools/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setSchool(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedSchool = {
            name
        }
        api.patch(`/schools/s/${id}`, updatedSchool, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(school.name);
    }, [school])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Escolas</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Nome:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome da Escola'
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
