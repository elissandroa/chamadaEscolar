import { useEffect, useState } from 'react';
import './formViewStudent.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type teacherType = {
  name: string;
  phone: string;
  id: number;
}

export const FormViewTeacher = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [teacher, setTeacher] = useState<teacherType>({});
  const [, setName] = useState("");
  const [, setPhone] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/teachers/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTeacher(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(teacher.name);
    setPhone(teacher.phone);
  }, [teacher])

  return (
    teacher && <div className="modal">
      <div className='form-container-view'>
        <h3>{teacher.name}</h3>
        <ul>
          <li>Telefone: {teacher.phone}</li>
        </ul>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
