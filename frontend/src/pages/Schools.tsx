import { NavbarLists } from '../components/NavbarLists';
import { FormAddSchool } from '../components/FormAddSchool';
import { useEffect, useState } from 'react';
import { FormEditSchool } from '../components/FormEditSchool';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewSchool } from '../components/FormViewSchool';

export const Schools = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [schools, setSchools] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addSchool = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeSchool = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type schoolType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/schools", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setSchools(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/schools/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setSchools(response.data))
        .catch((err) => {
          console.log(err.message)
          setSchools([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listSchools: schoolType[] = schools;


  return (
    <div className="lists-container">
      <h1>Turmas</h1>
      <NavbarLists fncForm={addSchool} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddSchool formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'schools'} title={'Escola'} />}
          {formEditVisible && <FormEditSchool formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewSchool formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {listSchools.length > 0 ? listSchools.map((school) => (
            <li key={school.id}>{school.name}
              <span>
                <button onClick={() => {
                  setFormEditVisible(!formEditVisible)
                  setId(school.id);
                }}><FaRegEdit /></button>
                <button onClick={() => {
                  setFormViewVisible(!formViewVisible);
                  setId(school.id);
                }}><GrView /></button>
                <button onClick={() => {
                  setId(school.id);
                  removeSchool();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
