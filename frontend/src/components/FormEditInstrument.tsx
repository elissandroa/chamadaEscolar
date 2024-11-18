import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type instrumentType = {
    name: string;
}


export const FormEditInstrument = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [instrument, setInstrument] = useState<instrumentType>({});
    const [name, setName] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/instruments/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setInstrument(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedInstrument = {
            name
        }
        api.patch(`/instruments/s/${id}`, updatedInstrument, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(instrument.name);
    }, [instrument])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Instrumentos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Instrumento:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome do Instrumento'
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
