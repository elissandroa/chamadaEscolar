import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';


type Props = {
  formAddressVisible: boolean;
  setFormAddressVisible: (formAddressVisible: boolean) => any;
  id: number;
}

export const FormAddTutorAddress = ({ formAddressVisible, setFormAddressVisible, id }: Props) => {

  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [tutor, setTutor] = useState<any>({});
  const [addresses, setAddresses] = useState([]);
  
  const token = localStorage.getItem('token');

  let AddressId: number;

  useEffect(() => {
    api.get(`/Tutors/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setTutor(response.data);
      setAddresses(response.data.Addresses);
    })
      .catch((err) => console.log(err));
  }, [])



  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const address = {
      street,
      num,
      neighborhood,
      city,
      state,
      zipcode
    }


    await api.post("/addresses", address, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => { AddressId = response.data.id })
      .catch((err) => console.log(err))
    setFormAddressVisible(!formAddressVisible);
    if(tutor.Addresses.length == 0) {
      tutor.Addresses = [{
        TutorId: id,
        AddressId: AddressId
      }]
    } else {
      tutor.Addresses.push({TutorId: id, AddressId: AddressId})
    }
    await api.patch(`/tutors/s/${id}`, tutor, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

  }




  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Adicionar endereços</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="street">Rua:</label>
            <input
              name='street'
              placeholder='Digite o nome da rua'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="num">Número:</label>
            <input
              name='num'
              placeholder='Digite o número Ex: 154B'
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="neighborhood">Bairro:</label>
            <input
              name='neighborhood'
              placeholder='Digite o bairro'
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">Cidade:</label>
            <input
              name='city'
              placeholder='Digite a cidade'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="state">Estado:</label>
            <input
              name='state'
              placeholder='Digite o estado'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="zipcode">Cep:</label>
            <input
              name='zipcode'
              placeholder='Digite o cep'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
          <div className='form-actions'>
            <FormButton type='submit' value='Cadastrar' inputClass='success' />
            <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormAddressVisible(!formAddressVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
