import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Teachers = () => {
    return (
        <div className="lists-container">
            <h1>Professores</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'Gilberto Brand Junior'} />
                    <ItemList name={'Chopin'} />
                    <ItemList name={'Barh'} />
                </ul>
            </div>
        </div>
    )
}
