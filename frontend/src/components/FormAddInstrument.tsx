import { FormEvent, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';


type Props = {
    formAddVisible: boolean;
    setFormAddVisible: (formAddVisible: boolean) => any;
}

export const FormAddInstrument = ({ formAddVisible, setFormAddVisible }: Props) => {

    const [name, setName] = useState("");

    const token = localStorage.getItem('token');


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const instrument = {
            name
        }

        await api.post("/instruments", instrument, {
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
                        <FormButton type='submit' value='Cadastrar' inputClass='success' />
                        <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormAddVisible(!formAddVisible)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
