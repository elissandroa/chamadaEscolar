import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"


export const Instruments = () => {
    return (
        <div className="lists-container">
            <h1>Lista de Instrumentos</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'Flugelhorn'} />
                    <ItemList name={'Trombone'} />
                    <ItemList name={'Trompete'} />
                </ul>
            </div>
        </div>
    )
}
