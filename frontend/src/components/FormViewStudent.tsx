import { useEffect, useState } from 'react';
import './formViewStudent.css';

import api from '../utils/api';

type Props = {
  formViewVisible: boolean;
  setFormViewVisible: (formAddVisible: boolean) => any;
  id: number;
}

type studentType = {
  name: string;
  phone: string;
  id: number;
  graduationId: number;
  instrumentId: number;
}

type graduationType = {
  id: number;
  name: string;
}

type instrumentType = {
  id: number;
  name: string;
}

export const FormViewStudent = ({ formViewVisible, setFormViewVisible, id }: Props) => {
  const [student, setStudent] = useState<studentType>({});
  const [, setName] = useState("");
  const [, setPhone] = useState("");
  const [, setInstruments] = useState<instrumentType[]>([]);
  const [, setGraduations] = useState<graduationType[]>([]);
  const [instrumentName, setInstrumentName] = useState("");
  const [graduationName, setGraduationName] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/students/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setStudent(response.data)
      setInstrumentName(response.data.Instrument.name)
      setGraduationName(response.data.Graduation.name)
    })
      .catch((err) => console.log(err));

    api.get("/instruments", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => setInstruments(response.data))
      .catch((err) => console.log(err));
    api.get("/graduations", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => setGraduations(response.data))
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(student.name);
    setPhone(student.phone);
  }, [student])

  console.log(student);

  return (
   student && <div className="modal">
      <div className='form-container-view'>
        <h3>{student.name}</h3>
        <ul>
          <li>Graduação: {graduationName}</li>
          <li>Instrumento: {instrumentName}</li>
          <li>Telefone: {student.phone}</li>
        </ul>
        <div className="form-actions">
        <button onClick={() => setFormViewVisible(!formViewVisible)}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
