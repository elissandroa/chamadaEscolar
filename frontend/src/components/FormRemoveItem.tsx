import api from '../utils/api';
import './formRemoveItem.css'

type Props = {
    formDeleteVisible: boolean;
    setFormDeleteVisible: (formDeleteVisible: boolean) => any;
    id: number;
    item: string;
    title:string;
}

const token = localStorage.getItem('token');

const deleteItem = async (id: number, item:string) => {
    await api.delete(`/${item}/s/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => console.log(error));
}

export const FormRemoveItem = ({ formDeleteVisible, setFormDeleteVisible, id, item, title }: Props) => {
    return (
        <div className="modal">
            <div className='deleteContainer'>
                <h2>Excluir {title} ?</h2>
                <div className="actionButtons">
                    <button onClick={async () => {
                        await deleteItem(id, item);
                        await setFormDeleteVisible(!formDeleteVisible)
                    }} className='successDelete'>Sim</button>
                    <button onClick={() => {
                        setFormDeleteVisible(!formDeleteVisible)
                    }} className='cancelDelete'>Não</button>
                </div>
            </div>

        </div>
    )
}
