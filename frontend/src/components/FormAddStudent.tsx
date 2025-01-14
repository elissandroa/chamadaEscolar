import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { instrumentType } from '../Types/Instrument';
import { graduationType } from '../Types/Graduation';
import { tutorType } from '../Types/Tutor';

type Props = {
    formAddVisible: boolean;
    setFormAddVisible: (formAddVisible: boolean) => boolean;
}


export const FormAddStudent = ({ formAddVisible, setFormAddVisible }: Props) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [instruments, setInstruments] = useState<instrumentType[]>([]);
    const [graduations, setGraduations] = useState<graduationType[]>([]);
    const [tutors, setTutors] = useState<tutorType[]>([]);
    const [instrumentId, setInstrumentId] = useState<number>();
    const [graduationId, setGraduationId] = useState<number>();
    const [tutorId, setTutorId] = useState<number>();

    
    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get("/instruments", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => setInstruments(response.data))
            .catch((err) => console.log(err));
        api.get("/graduations", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => setGraduations(response.data))
            .catch((err) => console.log(err));

        api.get("/tutors", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setTutors(response.data))
            .catch((err) => console.log(err));
    }, [])


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const student = {
            name,
            phone,
            InstrumentId: instrumentId,
            GraduationId: graduationId,
            TutorId: tutorId,
            Addresses: []
        }

        await api.post("/students", student, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => response.data)
            .catch((err) => console.log(err))
        setFormAddVisible(!formAddVisible);
    }

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
                        <select name="instrument" id="instrument" onChange={(e: FormEvent<HTMLElement> ) => setInstrumentId(e.target.value)}>
                            <option value="" className='optionPlaceholder'>Selecione um Instrumento</option>
                            {instruments.map((instrument) => (
                                <option value={instrument.id} key={instrument.id}>{instrument.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="graduation">Graduação:</label>
                        <select name="graduation" id="graduation" className='optionPlaceholder' onChange={(e: FormEvent<HTMLElement>) => setGraduationId(e.target.value)}>
                            <option value="">Selecione a graduação</option>
                            {graduations.map((graduation) => (
                                <option value={graduation.id} key={graduation.id}>{graduation.id}-{graduation.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="tutor">Tutor:</label>
                        <select name="tutor" id="tutor" className='optionPlaceholder' onChange={(e: FormEvent<HTMLElement>) => setTutorId(e.target.value)}>
                            <option value="">Selecione um Tutor</option>
                            {tutors.map((tutor) => (
                                <option value={tutor.id} key={tutor.id}>{tutor.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-actions'>
                        <FormButton type='submit' value='Cadastrar' inputClass='success' />
                        <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormAddVisible(!formAddVisible)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
