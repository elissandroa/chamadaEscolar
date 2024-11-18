import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type graduationType = {
    name: string;
}


export const FormEditGraduation = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [graduation, setGraduation] = useState<graduationType>({});
    const [name, setName] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/graduations/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setGraduation(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedGraduation = {
            name
        }
        api.patch(`/graduations/s/${id}`, updatedGraduation, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(graduation.name);
    }, [graduation])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Graduações</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Graduação:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome da Graduação'
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
