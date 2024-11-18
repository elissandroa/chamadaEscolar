import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

type Props = {
    name?: string;
    student?: string;
    grade?: string;
    discipline?: string;
    classroom?: string;
    formEditVisible: boolean;
    setFormEditVisible: (formEditVisible: boolean) => any;
}

export const ItemList = ({ classroom, name, grade, discipline, formEditVisible, setFormEditVisible }: Props) => {

    return (
        <li>{classroom &&
            classroom}
            {name && name}
            {discipline && "- Disciplina:"} {discipline && discipline}
            {grade && "- Nota:"} {grade && grade}
            <span>
                <button onClick={() => {
                    setFormEditVisible(!formEditVisible)
                }}><FaRegEdit />
                </button><button><GrView /></button><button><RiDeleteBin5Line />
                </button>
            </span>
        </li>
    )
}
