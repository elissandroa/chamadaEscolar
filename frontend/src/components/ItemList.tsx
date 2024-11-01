import { FaRegEdit } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { RiDeleteBin5Line } from "react-icons/ri"

type Props = {
    name: string,
}

export const ItemList = ({ name }: Props) => {
    return (
        <li>{name}<span><button><FaRegEdit /></button><button><GrView /></button><button><RiDeleteBin5Line /></button></span></li>
    )
}
