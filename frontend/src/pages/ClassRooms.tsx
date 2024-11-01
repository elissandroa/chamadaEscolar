import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"


export const ClassRooms = () => {
  return (
    <div className="lists-container">
    <h1>Turmas</h1>
    <NavbarLists />
    <div className="list-pages-container">
        <ul>
            <ItemList classroom={'Turma Segunda / Quarta / Sexta - 2024'} />
            <ItemList classroom={'Turma Terça / Quinta - 2024'} />
            <ItemList classroom={'Turma Sábado - 2024'} />
        </ul>
    </div>
</div>
  )
}
