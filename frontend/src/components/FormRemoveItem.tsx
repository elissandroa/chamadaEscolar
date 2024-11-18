import api from '../utils/api';
import './formRemoveItem.css'

type Props = {
    formDeleteVisible: boolean;
    setFormDeleteVisible: (formDeleteVisible: boolean) => any;
    id: number;
}

const token = localStorage.getItem('token');

const deleteStudent = async (id: number) => {
    await api.delete(`/students/s/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => console.log(error));
}

export const FormRemoveItem = ({ formDeleteVisible, setFormDeleteVisible, id }: Props) => {
    return (
        <div className="modal">
            <div className='deleteContainer'>
                <h2>Excluir Estudante ?</h2>
                <div className="actionButtons">
                    <button onClick={async () => {
                        await deleteStudent(id);
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
