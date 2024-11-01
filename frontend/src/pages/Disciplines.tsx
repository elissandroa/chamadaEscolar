import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Disciplines = () => {
    return (
        <div className="lists-container">
            <h1>Disciplinas</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'Música'} />
                    <ItemList name={'Oratória'} />
                    <ItemList name={'Liderança'} />
                </ul>
            </div>
        </div>
    )
}
