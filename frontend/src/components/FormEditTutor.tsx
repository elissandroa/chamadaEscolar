import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { tutorType } from '../Types/Tutor';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => boolean;
    id: number;
}




export const FormEditTutor = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [tutor, setTutor] = useState<tutorType>({});
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [addresses, setAddresses] = useState([]);
    const [addressId, setAddressId] = useState<number>(0);

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/tutors/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setTutor(response.data);
            setAddresses(response.data.Addresses);
        }).catch((err) => console.log(err));
    }, [])

    
    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedTutor = {
            name,
            phone,
            Addresses: addresses
        }

        console.log(updatedTutor);
        await api.patch(`/tutors/s/${id}`, updatedTutor, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => response.data)
        .catch((err) => console.log(err));
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(tutor.name);
        setPhone(tutor.phone);
        setAddressId(addressId);
    }, [tutor])

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
                        <label htmlFor="name">Telefone:</label>
                        <input
                            name='phone'
                            placeholder='Digite o telefone do Tutor'
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
