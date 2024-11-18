import {  IoAddCircleOutline, IoArrowBackCircleSharp } from 'react-icons/io5';
import { SearchBar } from './SearchBar';
import { useNavigate } from 'react-router-dom';

type Props = {
  fncForm: () => any; 
  query: string;
  setQuery: () => any;
}

export const NavbarLists = ({fncForm , query, setQuery}:Props) => {

    const navigate = useNavigate();
   
    const onNavigateBack = () => {
        navigate(-1);
      }
    
    return (
        <div className='lists-navbar-header'>
        <button className='add' onClick={fncForm}><IoAddCircleOutline /></button>
        <SearchBar query={query} setQuery={setQuery}/>
        <button onClick={onNavigateBack} className='goBack'><IoArrowBackCircleSharp /></button>
      </div>
    )
}
