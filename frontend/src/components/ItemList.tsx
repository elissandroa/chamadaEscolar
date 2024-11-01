import { FaRegEdit } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { RiDeleteBin5Line } from "react-icons/ri"

type Props = {
    name?: string,
    student?: string,
    grade?: string,
    discipline?: string
    classroom?:string
}

export const ItemList = ({classroom, name, student, grade, discipline }: Props) => {
    return (
        <li>{classroom && classroom}{name && name} {student && student} {discipline && "- Disciplina:"} {discipline && discipline}  {grade && "- Nota:"} {grade && grade} <span><button><FaRegEdit /></button><button><GrView /></button><button><RiDeleteBin5Line /></button></span></li>
    )
}
