import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Graduations = () => {
    return (
        <div className="lists-container">
            <h1>Graduação</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'General'} />
                    <ItemList name={'Capitão'} />
                    <ItemList name={'Soldado'} />
                    <ItemList name={'Recruta'} />
                </ul>
            </div>
        </div>
    )
}