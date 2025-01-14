import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { tutorType } from '../Types/Tutor';


type Props = {
  formEditTutorsItemVisible: boolean;
  setFormEditTutorsItemVisible: (formEditTutorsItemVisible: boolean) => boolean | void;
  id: number;
}

export const FormEditTutorStudent = ({ formEditTutorsItemVisible, setFormEditTutorsItemVisible, id }: Props) => {

  const [tutor, setTutor] = useState<tutorType>({});
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const token = localStorage.getItem('token');


  useEffect(() => {
    api.get(`/tutors/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTutor(response.data);
    })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setName(tutor.name);
    setPhone(tutor.phone);
  }, [tutor])



  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const updatedTutor = {
      name,
      phone
    }

    await api.patch(`/tutores/s/${id}`, updatedTutor, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.data)
      .catch((err) => console.log(err));
    setFormEditTutorsItemVisible(!formEditTutorsItemVisible)
  }


  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Editando Tutores</h2>
        <form>
          <div className="form-control">
            <label htmlFor="name">Tutor:</label>
            <input
              name='name'
              placeholder='Digite o nome do Tutor'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Telefone:</label>
            <input
              name='phone'
              placeholder='Digite o telefone do Tutor'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='form-actions'>
            <FormButton type='submit' value='Atualizar' inputClass='success' onclick={(e: FormEvent<HTMLElement>) => handleSubmit(e)} />
            <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormEditTutorsItemVisible(!formEditTutorsItemVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
