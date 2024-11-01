import { ItemList } from '../components/ItemList';
import { NavbarLists } from '../components/NavbarLists';


export const Students = () => {
  
  return (
    <div className="lists-container">
      <h1>Lista de Alunos</h1>
      <NavbarLists/> 
      <div className="list-pages-container">
        <ul>
          <ItemList name={'Rafaela Kogitzki Anastácio'} />
        </ul>
      </div>
    </div>
  )
}
