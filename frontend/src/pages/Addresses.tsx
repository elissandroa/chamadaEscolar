import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Addresses = () => {
  return (
    <div className="lists-container">
            <h1>Endereços</h1>
            <NavbarLists />
            <div className="list-pages-container">
                <ul>
                    <ItemList name={'Rafaela Kogitzki Anastácio'} />
                    <ItemList name={'Larissa Manoela Machado'} />
                    <ItemList name={'João Casca de Bala Soluza'} />
                </ul>
            </div>
        </div>
  )
}
