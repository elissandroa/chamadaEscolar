import { useNavigate } from 'react-router-dom';
import { ItemList } from '../components/ItemList';
import { NavbarLists } from '../components/NavbarLists';

export const Students = () => {
  
  const navigate = useNavigate();

  const addStudent = () => {
    navigate('/addstudents')
  }

  return (
    <div className="lists-container">
      <h1>Alunos</h1>
      <NavbarLists fncForm={addStudent}/> 
      <div className="list-pages-container">
        <ul>
          <ItemList name={'Rafaela Kogitzki Anastácio'} />
        </ul>
      </div>
    </div>
  )
}
