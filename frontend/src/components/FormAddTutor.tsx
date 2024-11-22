import { FormEvent, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';


type Props = {
    formAddVisible: boolean;
    setFormAddVisible: (formAddVisible: boolean) => any;
}

export const FormAddTutor = ({ formAddVisible, setFormAddVisible }: Props) => {

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("")

    const token = localStorage.getItem('token');


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const tutor = {
            name,
            phone,
            Addresses: [{
                "TutorId": 1,
                "AddressId": null
            }]
        }

        await api.post("/tutors", tutor, {
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
                <h2>Tutores</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Tutor:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome do Tutor'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Telefone:</label>
                        <input
                            name='phone'
                            placeholder='Digite o telefone do Tutor'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
