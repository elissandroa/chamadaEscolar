import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const SchoolTests = () => {
    return (
        <div className="lists-container">
            <h1>Provas</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList student={'Rafaela Kogitzki'} discipline={'Oratória'} grade={"10.0"} />
                    <ItemList student={'Rafaela Kogitzki'} discipline={'Oratória'} grade={"10.0"} />
                    <ItemList student={'Rafaela Kogitzki'} discipline={'Oratória'} grade={"10.0"} />
                    <ItemList student={'Rafaela Kogitzki'} discipline={'Oratória'} grade={"10.0"} />
                    <ItemList student={'Rafaela Kogitzki'} discipline={'Oratória'} grade={"10.0"} />
                </ul>
            </div>
        </div>
    )
}