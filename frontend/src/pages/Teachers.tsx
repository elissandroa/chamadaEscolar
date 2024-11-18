import { NavbarLists } from '../components/NavbarLists';
import { FormAddTeacher } from '../components/FormAddTeacher';
import { useEffect, useState } from 'react';
import { FormEditTeacher } from '../components/FormEditTeacher';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewTeacher } from '../components/FormViewTeacher';

export const Teachers = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [teachers, setTeachers] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addTeacher = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeTeacher = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type teacherType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("query:", query)
    if (!query) {
      api.get("/teachers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setTeachers(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/teachers/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setTeachers(response.data))
        .catch((err) => {
          console.log(err.message)
          setTeachers([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listTeachers: teacherType[] = teachers;


  return (
    <div className="lists-container">
      <h1>Professores</h1>
      <NavbarLists fncForm={addTeacher} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddTeacher formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} />}
          {formEditVisible && <FormEditTeacher formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewTeacher formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {listTeachers.length > 0 ? listTeachers.map((teacher) => (
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
                  removeTeacher();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
