import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FormRemoveItem } from './FormRemoveItem';
import { FormEditTutorStudent } from './FormEditTutorStudent';
import { tutorType } from '../Types/Tutor';



type Props = {
  formEditTutorsVisible: boolean;
  setFormEditTutorsVisible: (formTutorsVisible: boolean) => any;
  id: number;
  entity: string;
}


export const FormListTutors = ({ formEditTutorsVisible, setFormEditTutorsVisible, id, entity }: Props) => {

  const [tutors, setTutors] = useState<tutorType[]>([]);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [idTutors, setIdTutors] = useState<number>(0);
  const [formEditTutorsItemVisible, setFormEditTutorsItemVisible] = useState<boolean>(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/${entity}/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTutors(response.data.Tutors);
    })
      .catch((err) => console.log(err));
  }, [formDeleteVisible, formEditTutorsItemVisible])

  const removeTutors = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  }





  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Lista de Tutores</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={idTutors} item={'tutores'} title={'Tutors'} />}
            {formEditTutorsItemVisible && <FormEditTutorStudent formEditTutorsItemVisible={formEditTutorsItemVisible} setFormEditTutorsItemVisible={setFormEditTutorsItemVisible} id={idTutors} />}
            {tutors.length > 0 && tutors.map((tutor) => (
              <li key={tutor.id} className='openTutors'>{tutor.name} - {tutor.phone}
                <span>
                  <button
                    title='Editar Tutor'
                    onClick={() => {
                      setFormEditTutorsItemVisible(!formEditTutorsItemVisible)
                      setIdTutors(tutor.id)
                    }}>
                    <FaRegEdit />
                  </button>
                </span><span>
                  <button
                    title='Remover Tutor'
                    onClick={() => {
                      setIdTutors(tutor.id);
                      removeTutors();
                    }}>
                    <RiDeleteBin5Line />
                  </button>
                </span>
              </li>
            ))}

          </ul>
          <div className='form-actions'>
            <FormButton type='reset' value='Fechar' inputClass='cancel' onclick={() => setFormEditTutorsVisible(!formEditTutorsVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
