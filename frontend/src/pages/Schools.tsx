import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Schools = () => {
  return (
    <div className="lists-container">
    <h1>Escolas</h1>
    <NavbarLists />
    <div className="list-pages-container">
        <ul>
            <ItemList name={'Colégio Social Madre Clélia - SAGRADO rede de Educação'} />
        </ul>
    </div>
</div>
  )
}
