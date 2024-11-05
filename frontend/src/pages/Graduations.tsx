import { useNavigate } from "react-router-dom"
import { ItemList } from "../components/ItemList"
import { NavbarLists } from "../components/NavbarLists"

export const Graduations = () => {
    const navigate = useNavigate();

    
    const addGraduation = () => {
        navigate('/graduations/add');
    }
    return (
        <div className="lists-container">
            <h1>Graduação</h1>
            <NavbarLists fncForm={addGraduation} />
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