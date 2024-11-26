import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type addressType = {
  [x: string]: any;
  street: string;
  id: number;
}

export const FormViewAddress = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [address, setAddress] = useState<addressType>({});
  const [, setStreet] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/addresses/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setAddress(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setStreet(address.street);
  }, [address])


  return (
    address && <div className="modal">
      <div className='form-container-view'>
        <h3>{address.street}</h3>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
