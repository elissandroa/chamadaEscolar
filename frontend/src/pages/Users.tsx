import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Users = () => {
    return (
        <div className="lists-container">
            <h1>Usuários</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'Elissandro - Admin'} />
                    <ItemList name={'Gilberto - Admin'} />
                    <ItemList name={'Juquinha - User'} />
                </ul>
            </div>
        </div>
    )
}
