import { IoArrowBackCircleSharp, IoPersonAdd } from 'react-icons/io5';
import { SearchBar } from './SearchBar';
import { useNavigate } from 'react-router-dom';

export const NavbarLists = () => {

    const navigate = useNavigate();

  

    const onNavigateBack = () => {
        navigate('/home');
      }
    
    return (
        <div className='lists-navbar-header'>
        <button className='add'><IoPersonAdd /></button>
        <SearchBar />
        <button onClick={onNavigateBack} className='goBack'><IoArrowBackCircleSharp /></button>
      </div>
    )
}
