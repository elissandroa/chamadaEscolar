import { FormEvent, useEffect, useState } from 'react';
import './addAndEditForms.css';
import { FormButton } from './FormButton';
import api from '../utils/api';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FormRemoveItem } from './FormRemoveItem';
import { FormEditTutorAddress } from './FormEditTutorAddress';
import { addressType } from '../Types/Address';


type Props = {
  formEditAddressVisible: boolean;
  setFormEditAddressVisible: (formAddressVisible: boolean) => any;
  id: number;
  entity: string;
}

export const FormListAddress = ({ formEditAddressVisible, setFormEditAddressVisible, id, entity }: Props) => {

  const [addresses, setAddresses] = useState<addressType[]>([]);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [idAddress, setIdAddress] = useState<number>(0);
  const [formEditAddressItemVisible, setFormEditAddressItemVisible] = useState<boolean>(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`/${entity}/s/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setAddresses(response.data.Addresses);
    })
      .catch((err) => console.log(err));
  }, [formDeleteVisible, formEditAddressItemVisible])

  const removeAddress = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  }




  return (
    <div className="modal">
      <div className='form-container'>
        <h2>Lista de endereços</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={idAddress} item={'addresses'} title={'Address'} />}
            {formEditAddressItemVisible && <FormEditTutorAddress formEditAddressItemVisible={formEditAddressItemVisible} setFormEditAddressItemVisible={setFormEditAddressItemVisible} id={idAddress} />}
            {addresses.length > 0 && addresses.map((address) => (
              <li key={address.id} className='openAddress'>{address.street}, {address.num}
                <span>
                  <button
                    title='Editar Endereço'
                    onClick={() => {
                      setFormEditAddressItemVisible(!formEditAddressItemVisible)
                      setIdAddress(address.id)
                    }}>
                    <FaRegEdit />
                  </button>
                </span><span>
                  <button
                    title='Remover Endereço'
                    onClick={() => {
                      setIdAddress(address.id);
                      removeAddress();
                    }}>
                    <RiDeleteBin5Line />
                  </button>
                </span>
              </li>
            ))}

          </ul>
          <div className='form-actions'>
            <FormButton type='reset' value='Fechar' inputClass='cancel' onclick={() => setFormEditAddressVisible(!formEditAddressVisible)} />
          </div>
        </form>
      </div>
    </div>
  )
}
