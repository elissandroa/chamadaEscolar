import { NavbarLists } from '../components/NavbarLists';
import { FormAddStudent } from '../components/FormAddStudent';
import { useEffect, useState } from 'react';
import { FormEditStudent } from '../components/FormEditStudent';
import api from '../utils/api';
import { FaAddressCard, FaEdit, FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewStudent } from '../components/FormViewStudent';
import { FormAddStudentAddress } from '../components/FormAddStudentAddress';
import { FormListAddress } from '../components/formListAddress';
import { IoAddCircleOutline, IoPeopleSharp } from 'react-icons/io5';
import { FormListTutors } from '../components/formListTutors';
import { FormAddStudentTutor } from '../components/FormAddStudentTutor';

export const Students = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [formAddressVisible, setFormAddressVisible] = useState<boolean>(false);
  const [formEditAddressVisible, setFormEditAddressVisible] = useState<boolean>(false);
  const [formEditTutorsVisible, setFormEditTutorsVisible] = useState<boolean>(false);
  const [formAddTutorVisible, setFormAddTutorVisible] = useState<boolean>(false);
  const [students, setStudents] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addStudent = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeStudent = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type studentType = {
    id: number;
    name: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/students", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setStudents(response.data))
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/students/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setStudents(response.data))
        .catch((err) => {
          console.log(err.message)
          setStudents([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listStudents: studentType[] = students;


  return (
    <div className="lists-container">
      <h1>Alunos</h1>
      <NavbarLists fncForm={addStudent} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddStudent formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item='students' title='Aluno' />}
          {formEditVisible && <FormEditStudent formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewStudent formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {formAddressVisible && <FormAddStudentAddress formAddressVisible={formAddressVisible} setFormAddressVisible={setFormAddressVisible} id={id} />}
          {formAddTutorVisible && <FormAddStudentTutor formAddTutorVisible={formAddTutorVisible} setFormAddTutorVisible={setFormAddTutorVisible} id={id} />}
          {formEditAddressVisible && <FormListAddress formEditAddressVisible={formEditAddressVisible} setFormEditAddressVisible={setFormEditAddressVisible} id={id} entity='students' />}
          {formEditTutorsVisible && <FormListTutors formEditTutorsVisible={formEditTutorsVisible} setFormEditTutorsVisible={setFormEditTutorsVisible} id={id} entity='students' />}

          {listStudents.length > 0 ? listStudents.map((student) => (
            <li key={student.id}>{student.name}
                 <span>
                 <button title="Editar Tutores" onClick={() => {
                  setFormEditTutorsVisible(!formEditTutorsVisible)
                  setId(student.id)
                }
                }><IoPeopleSharp /></button>
                <button title="Adicionar Tutores" onClick={() => {
                  setFormAddTutorVisible(!formAddTutorVisible)
                  setId(student.id)
                }
                }><IoAddCircleOutline /></button>
                 <button title="Editar Endereços" onClick={() => {
                  setFormEditAddressVisible(!formEditAddressVisible)
                  setId(student.id)
                }
                }><FaEdit /></button>
                <button title='Adicionar endereço' onClick={() => {
                  setFormAddressVisible(!formAddressVisible)
                  setId(student.id)
                }
                }><FaAddressCard /></button>
                <button title='Editar Estudante' onClick={() => {
                  setFormEditVisible(!formEditVisible)
                  setId(student.id);
                }}><FaRegEdit /></button>
                <button title='Vizualizar Estudante' onClick={() => {
                  setFormViewVisible(!formViewVisible);
                  setId(student.id);
                }}><GrView /></button>
                <button title='Remover Estudante' onClick={() => {
                  setId(student.id);
                  removeStudent();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
