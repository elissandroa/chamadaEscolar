import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';
import { tutorType } from '../Types/Tutor';
import { addressType } from '../Types/Address';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}


export const FormViewTutor = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [tutor, setTutor] = useState<tutorType>({});
  const [, setName] = useState("");
  const [addresses, setAddresses] = useState<addressType[]>([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/tutors/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTutor(response.data);
      setAddresses(response.data.Addresses);
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(tutor.name);
  }, [tutor])


  return (
    tutor && <div className="modal">
      <div className='form-container-view'>
        <h3>{tutor.name}</h3>
        <strong>Telefone: {tutor.phone}</strong>
        {addresses.length > 0 && <h4>Endereço:</h4>}
        {
          addresses.map((address) => (
            <ul key={address.id} className='addressView'>
              <li>Rua: <span>{address.street}</span>,  <span>{address.num}</span></li>
              <li><span>Bairro: {address.neighborhood}</span><span>Cep: {address.zipcode}</span></li>
              <li><span>Cidade: {address.city}</span><span>Estado: {address.state}</span></li>
              <br />
            </ul>
          ))
        }

        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
