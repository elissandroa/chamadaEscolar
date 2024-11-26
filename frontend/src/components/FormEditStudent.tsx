import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';

type Props = {
    formEditVisible: boolean;
    setFormEditVisible: (formAddVisible: boolean) => any;
    id: number;
}

type studentType = {
    name: string;
    phone: string;
    id: number;
    graduationId: number;
    instrumentId: number;
}

type graduationType = {
    id: number;
    name: string;
}

type instrumentType = {
    id: number;
    name: string;
}

export const FormEditStudent = ({ formEditVisible, setFormEditVisible, id }: Props) => {
    const [student, setStudent] = useState<studentType>({});
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [instruments, setInstruments] = useState<instrumentType[]>([]);
    const [graduations, setGraduations] = useState<graduationType[]>([]);
    const [instrumentId, setInstrumentId] = useState(0);
    const [graduationId, setGraduationId] = useState(0);
    const [addresses, setAddresses] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/students/s/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setStudent(response.data)
            setInstrumentId(response.data.Instrument.id)
            setGraduationId(response.data.Graduation.id)
            setAddresses(response.data.Addresses)
        })
            .catch((err) => console.log(err));

        api.get("/instruments", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setInstruments(response.data))
            .catch((err) => console.log(err));
        api.get("/graduations", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setGraduations(response.data))
            .catch((err) => console.log(err));
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const updatedStudent = {
            name,
            phone,
            InstrumentId: instrumentId,
            GraduationId: graduationId,
            Addresses: addresses
        }
        api.patch(`/students/s/${id}`, updatedStudent, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFormEditVisible(!formEditVisible);
    }

    useEffect(() => {
        setName(student.name);
        setPhone(student.phone);
    }, [student])

    return (
        <div className="modal">
            <div className='form-container'>
                <h2>Alunos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Nome:</label>
                        <input
                            name='name'
                            placeholder='Digite o nome do aluno'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Telefone:</label>
                        <input
                            name='phone'
                            placeholder='Digite o telefone do aluno'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="instrument">Instrumento:</label>
                        <select name="instrument" id="instrument" value={instrumentId} onChange={(e: FormEvent<HTMLElement>) => setInstrumentId(e.target.value)}>
                            <option value="" className='optionPlaceholder'>Selecione um Instrumento</option>
                            {instruments.map((instrument) => (
                                <option value={instrument.id} key={instrument.id}>{instrument.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="graduation">Graduação:</label>
                        <select name="graduation" id="graduation" className='optionPlaceholder' value={graduationId} onChange={(e: FormEvent<HTMLElement>) => setGraduationId(e.target.value)}>
                            <option value="">Selecione a graduação</option>
                            {graduations.map((graduation) => (
                                <option value={graduation.id} key={graduation.id}>{graduation.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-actions'>
                        <FormButton type='submit' value='Atualizar' inputClass='success' />
                        <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormEditVisible(!formEditVisible)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
