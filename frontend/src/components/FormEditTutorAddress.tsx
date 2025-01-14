import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { addressType } from '../Types/Address';


type Props = {
  formEditAddressItemVisible: boolean;
  setFormEditAddressItemVisible: (formEditAddressItemVisible: boolean) => any;
  id: number;
}


export const FormEditTutorAddress = ({ formEditAddressItemVisible, setFormEditAddressItemVisible, id }: Props) => {

  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [address, setAddress] = useState<addressType>({});

  const token = localStorage.getItem('token');


  useEffect(() => {
    api.get(`/addresses/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setAddress(response.data);
    })
      .catch((err) => console.log(err));
  }, [])



  useEffect(() => {
    setStreet(address.street);
    setNum(address.num);
    setNeighborhood(address.neighborhood);
    setCity(address.city);
    setState(address.state);
    setZipcode(address.zipcode)
  }, [address])



  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const updatedAddress = {
      street,
      num,
      neighborhood,
      city,
      state,
      zipcode
    }

    await api.patch(`/addresses/s/${id}`, updatedAddress, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.data)
    .catch((err) => console.log(err));
    setFormEditAddressItemVisible(!formEditAddressItemVisible)
  }




  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Editando endereços</h2>
        <form>
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
            <label htmlFor="num">Complemento:</label>
            <input
              name='num'
              placeholder='Ex: 154B Bloco 3 Apto 321'
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
            <FormButton type='submit' value='Atualizar' inputClass='success' onclick={(e: FormEvent<HTMLElement>) => handleSubmit(e)} />
            <FormButton type='reset' value='Cancelar' inputClass='cancel' onclick={() => setFormEditAddressItemVisible(!formEditAddressItemVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
