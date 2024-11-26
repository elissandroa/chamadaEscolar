import { NavbarLists } from '../components/NavbarLists';
import { FormAddAddress } from '../components/FormAddTutorAddress';
import { useEffect, useState } from 'react';
import { FormEditAddress } from '../components/FormEditAddress';
import api from '../utils/api';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FormRemoveItem } from '../components/FormRemoveItem';
import { FormViewAddress } from '../components/FormViewAddress';

export const Addresses = () => {
  const [formAddVisible, setFormAddVisible] = useState<boolean>(false);
  const [formEditVisible, setFormEditVisible] = useState<boolean>(false);
  const [formViewVisible, setFormViewVisible] = useState<boolean>(false);
  const [formDeleteVisible, setFormDeleteVisible] = useState<boolean>(false);
  const [addresses, setAddresses] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [id, setId] = useState(0);

  const token = localStorage.getItem('token');

  const addAddress = () => {
    setFormAddVisible(!formAddVisible);
  }


  const removeAddress = () => {
    setFormDeleteVisible(!formDeleteVisible);
  }


  type addressType = {
    id: number;
    street: string;
  }


  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      api.get("/addresses", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          setAddresses(response.data);
          setTutors(response.data.Tutors);
        })
        .catch((err) => console.log(err.message));
    } else {
      api.get(`/addresses/s/q?name=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => setAddresses(response.data))
        .catch((err) => {
          console.log(err.message)
          setAddresses([]);
        });
    }
  }, [formAddVisible, formDeleteVisible, query])

  const listAddresses: addressType[] = addresses;




  return (
    <div className="lists-container">
      <h1>Endereços</h1>
      <NavbarLists fncForm={addAddress} query={query} setQuery={setQuery} />
      <div className="list-pages-container">
        <ul>
          {formAddVisible && <FormAddAddress formAddVisible={formAddVisible} setFormAddVisible={setFormAddVisible} />}
          {formDeleteVisible && <FormRemoveItem formDeleteVisible={formDeleteVisible} setFormDeleteVisible={setFormDeleteVisible} id={id} item={'addresses'} title={'Addresso'} />}
          {formEditVisible && <FormEditAddress formEditVisible={formEditVisible} setFormEditVisible={setFormEditVisible} id={id} />}
          {formViewVisible && <FormViewAddress formViewVisible={formViewVisible} setFormViewVisible={setFormViewVisible} id={id} />}
          {listAddresses.length > 0 ? listAddresses.map((address) => (
            <li key={address.id}>{address.street}
              <span>
                <button onClick={() => {
                  setFormEditVisible(!formEditVisible)
                  setId(address.id);
                }}><FaRegEdit /></button>
                <button onClick={() => {
                  setFormViewVisible(!formViewVisible);
                  setId(address.id);
                }}><GrView /></button>
                <button onClick={() => {
                  setId(address.id);
                  removeAddress();
                }}><RiDeleteBin5Line /></button>
              </span>
            </li>
          )) : <p className='errorMessageConsulta'>Não há registros para esta consulta! </p>}
        </ul>
      </div>
    </div>
  )
}
