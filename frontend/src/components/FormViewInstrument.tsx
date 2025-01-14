import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';
import { instrumentType } from '../Types/Instrument';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}


export const FormViewInstrument = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [instrument, setInstrument] = useState<instrumentType>({});
  const [, setName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/instruments/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setInstrument(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(instrument.name);
  }, [instrument])


  return (
    instrument && <div className="modal">
      <div className='form-container-view'>
        <h3>{instrument.name}</h3>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
