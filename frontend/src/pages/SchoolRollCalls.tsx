import { NavbarLists } from '../components/NavbarLists'
import { ItemList } from '../components/ItemList'

export const SchoolRollCalls = () => {
  return (
    <div className="lists-container">
            <h1>Chamadas</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'01/11/2024 - Turma 1'} />
                    <ItemList name={'31/10/2024 - Turma 2'} />
                    <ItemList name={'30/10/2024 - Turma 1'} />
                </ul>
            </div>
        </div>
  )
}
