import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';


type Props = {
  formAddTutorVisible: boolean;
  setFormAddTutorVisible: (formAddTutorVisible: boolean) => boolean;
  id: number;
}

type tutorType = {
  id: number;
  name: string;
  phone: string;
}

type studentType = {
  Tutors: [];
}


export const FormAddStudentTutor = ({ formAddTutorVisible, setFormAddTutorVisible, id }: Props) => {

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [student, setStudent] = useState<studentType[]>([]);
  const [tutors, setTutors] = useState<tutorType[]>([]);

  const token = localStorage.getItem('token');

  let TutorId: number;

  useEffect(() => {
    api.get(`/students/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setStudent(response.data);
      setTutors(response.data.Tutors);
    })
      .catch((err) => console.log(err));
  }, [])



  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const tutors:Partial<tutorType> = {
      name,
      phone
    }


    await api.post("/tutors", tutors, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => { TutorId = response.data.id })
      .catch((err) => console.log(err))
    setFormAddTutorVisible(!formAddTutorVisible);
    /* if ( == 0) {
      student.Tutors = [{
        StudentId: id,
        TutorId: TutorId
      }]
    } else {
      tutor.Addresses.push({ TutorId: id, AddressId: AddressId })
    } */
    await api.patch(`/tutors/s/${id}`, tutor, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

  }

  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Adicionar tutores</h2>
        <form onSubmit={handleSubmit}>
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
            <FormButton type='submit' value='Cadastrar' inputClass='success' />
            <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormAddTutorVisible(!formAddTutorVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
