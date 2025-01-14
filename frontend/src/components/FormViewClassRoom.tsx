import { useEffect, useState } from 'react';
import './formView.css';

import api from '../utils/api';
import { classroomType } from '../Types/Classroom';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}


export const FormViewClassRoom = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [classroom, setTeacher] = useState<classroomType>({});
  const [, setName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/classrooms/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTeacher(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(classroom.name);
  }, [classroom])


  return (
    classroom && <div className="modal">
      <div className='form-container-view'>
        <h3>{classroom.name}</h3>
        <div className="form-actions">
          <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
