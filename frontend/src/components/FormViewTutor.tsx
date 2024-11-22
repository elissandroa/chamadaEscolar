import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type tutorType = {
  [x: string]: any;
  name: string;
  id: number;
}

export const FormViewTutor = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [tutor, setTutor] = useState<tutorType>({});
  const [, setName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/tutors/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTutor(response.data)
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
        <p>Telefone: {tutor.phone}</p>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
