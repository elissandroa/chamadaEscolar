import { NavbarLists } from '../components/NavbarLists';
import { FormAddGraduation } from '../components/FormAddGraduation';
import { useEffect, useState } from 'react';
import { FormEditGraduation } from '../components/FormEditGraduation';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewGraduation } from '../components/FormViewGraduation';

export const Graduations = () => {
    const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
    const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
    const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
    const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
    const [graduations, setGraduations] = useState([]);
    const [id, setId] = useState(0);

    const token = localStorage.getItem('token');

    const addGraduation = () => {
        setFormAddVisible(!formAddVisible);
    }


    const removeGraduation = () => {
        setFormDeleteVisible(!formDeleteVisible);
    }


    type schoolType = {
        id: number;
        name: string;
    }


    const [query, setQuery] = useState("");

    useEffect(() => {
        if (!query) {
            api.get("/graduations", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => setGraduations(response.data))
                .catch((err) => console.log(err.message));
        } else {
            api.get(`/graduations/s/q?name=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => setGraduations(response.data))
                .catch((err) => {
                    console.log(err.message)
                    setGraduations([]);
                });
        }
    }, [formAddVisible, formDeleteVisible, query])

    const listGraduations: schoolType[] = graduations;


    return (
        <div className="lists-container">
            <h1>Graduações</h1>
            <NavbarLists fncForm={addGraduation} query={query} setQuery={setQuery} />
            <div className="list-pages-container">
                <ul>
                    {formAddVisible && <FormAddGraduation formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
                    {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'graduations'} title={'Graduação'} />}
                    {formEditVisible && <FormEditGraduation formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
                    {formViewVisible && <FormViewGraduation formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
                    {listGraduations.length > 0 ? listGraduations.map((school) => (
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
                                    removeGraduation();
                                }}><RiDeleteBin5Line /></button>
                            </span>
                        </li>
                    )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
                </ul>
            </div>
        </div>
    )
}
