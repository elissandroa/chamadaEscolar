import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type addressType = {
    street: string;
}


export const FormEditAddress = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [address, setAddress] = useState<addressType>({});
    const [street, setStreet] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/addresss/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setAddress(response.data)
        }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedAddress = {
            street
        }
        api.patch(`/addresss/s/${id}`, updatedAddress, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setStreet(address.street);
    }, [address])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Endereços</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="street">Rua:</label>
                        <input
                            name='street'
                            placeholder='Digite o nome do Addresso'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
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
