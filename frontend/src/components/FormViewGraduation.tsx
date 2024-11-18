import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type graduationType = {
  [x: string]: any;
  name: string;
  id: number;
}

export const FormViewGraduation = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [graduation, setGraduation] = useState<graduationType>({});
  const [, setName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/graduations/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setGraduation(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(graduation.name);
  }, [graduation])


  return (
    graduation && <div className="modal">
      <div className='form-container-view'>
        <h3>{graduation.name}</h3>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
