import { NavbarLists } from '../components/NavbarLists';
import { FormAddInstrument } from '../components/FormAddInstrument';
import { useEffect, useState } from 'react';
import { FormEditInstrument } from '../components/FormEditInstrument';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewInstrument } from '../components/FormViewInstrument';

export const Instruments = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [instruments, setInstruments] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addInstrument = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeInstrument = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type schoolType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/instruments", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setInstruments(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/instruments/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setInstruments(response.data))
        .catch((err) => {
          console.log(err.message)
          setInstruments([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listInstruments: schoolType[] = instruments;


  return (
    <div className="lists-container">
      <h1>Instrumentos</h1>
      <NavbarLists fncForm={addInstrument} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddInstrument formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'instruments'} title={'Instrumento'} />}
          {formEditVisible && <FormEditInstrument formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewInstrument formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {listInstruments.length > 0 ? listInstruments.map((school) => (
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
                  removeInstrument();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
