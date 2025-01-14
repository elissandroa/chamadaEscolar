import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';
import { teacherType } from '../Types/Teacher';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}


export const FormViewTeacher = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [teacher, setTeacher] = useState<teacherType>({});
  const [, setName] = useState("");
  const [, setPhone] = useState("");
  const [disciplines, setDisciplines] = useState<[]>([]);

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
    setDisciplines(teacher.Disciplines);
  }, [teacher])

  let listDisciplines: any = [];

  if (disciplines) {
    for (let i = 0; i < disciplines.length; i++) {
      listDisciplines.push(disciplines[i]);
    }

  }

  return (
    teacher && <div className="modal">
      <div className='form-container-view'>
        <h3>{teacher.name}</h3>
        <ul>
          <li>Telefone: {teacher.phone}</li>
          <p>Disciplinas</p>
          {listDisciplines.length > 0 && listDisciplines.map((discipline: any) => (
            <li key={discipline.id}>{discipline.name}</li>
          ))}
        </ul>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
