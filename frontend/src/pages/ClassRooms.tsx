import { NavbarLists } from '../components/NavbarLists';
import { FormAddClassRoom } from '../components/FormAddClassRoom';
import { useEffect, useState } from 'react';
import { FormEditClassRoom } from '../components/FormEditClassRoom';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewClassRoom } from '../components/FormViewClassRoom';

export const ClassRooms = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [classrooms, setClassrooms] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addClassRoom = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeClassRoom = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type teacherType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/classrooms", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setClassrooms(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/classrooms/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setClassrooms(response.data))
        .catch((err) => {
          console.log(err.message)
          setClassrooms([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listClassrooms: teacherType[] = classrooms;


  return (
    <div className="lists-container">
      <h1>Turmas</h1>
      <NavbarLists fncForm={addClassRoom} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddClassRoom formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'classrooms'} title={'Turma'} />}
          {formEditVisible && <FormEditClassRoom formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewClassRoom formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {listClassrooms.length > 0 ? listClassrooms.map((teacher) => (
            <li key={teacher.id}>{teacher.name}
              <span>
                <button onClick={() => {
                  setFormEditVisible(!formEditVisible)
                  setId(teacher.id);
                }}><FaRegEdit /></button>
                <button onClick={() => {
                  setFormViewVisible(!formViewVisible);
                  setId(teacher.id);
                }}><GrView /></button>
                <button onClick={() => {
                  setId(teacher.id);
                  removeClassRoom();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
