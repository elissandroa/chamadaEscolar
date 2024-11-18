import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type schoolType = {
  [x: string]: any;
  name: string;
  id: number;
}

export const FormViewSchool = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [school, setSchool] = useState<schoolType>({});
  const [, setName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/schools/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setSchool(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(school.name);
  }, [school])


  return (
    school && <div className="modal">
      <div className='form-container-view'>
        <h3>{school.name}</h3>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
