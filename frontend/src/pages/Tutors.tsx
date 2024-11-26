import { NavbarLists } from '../components/NavbarLists';
import { FormAddTutor } from '../components/FormAddTutor';
import { useEffect, useState } from 'react';
import { FormEditTutor } from '../components/FormEditTutor';
import api from '../utils/api';
import { FaAddressCard, FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewTutor } from '../components/FormViewTutor';
import { FormAddTutorAddress } from '../components/FormAddTutorAddress';

export const Tutors = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [formAddressVisible, setFormAddressVisible] = useState<boolean>(false);
  const [tutors, setTutors] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addTutor = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeTutor = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type tutorType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/tutors", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setTutors(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/tutors/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setTutors(response.data))
        .catch((err) => {
          console.log(err.message)
          setTutors([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listTutors: tutorType[] = tutors;


  return (
    <div className="lists-container">
      <h1>Tutores</h1>
      <NavbarLists fncForm={addTutor} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddTutor formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'tutors'} title={'Tutor'} />}
          {formEditVisible && <FormEditTutor formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewTutor formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {formAddressVisible && <FormAddTutorAddress formAddressVisible={formAddressVisible} setFormAddressVisible={setFormAddressVisible} id={id} />}
          {listTutors.length > 0 ? listTutors.map((tutor) => (
            <li key={tutor.id}>{tutor.name}
              <span>
                <button onClick={() => {
                  setFormAddressVisible(!formAddressVisible)
                  setId(tutor.id)
                }
                }><FaAddressCard /></button>
                <button onClick={() => {
                  setFormEditVisible(!formEditVisible)
                  setId(tutor.id);
                }}><FaRegEdit /></button>
                <button onClick={() => {
                  setFormViewVisible(!formViewVisible);
                  setId(tutor.id);
                }}><GrView /></button>
                <button onClick={() => {
                  setId(tutor.id);
                  removeTutor();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
