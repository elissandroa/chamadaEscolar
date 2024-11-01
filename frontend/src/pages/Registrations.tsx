import { FaHome } from "react-icons/fa"
import { GiDiploma, GiMaterialsScience, GiSaxophone, GiTeacher } from "react-icons/gi"
import { ImAddressBook } from "react-icons/im"
import { IoPeopleSharp, IoSchoolOutline } from "react-icons/io5"
import { MdOutlineSecurity } from "react-icons/md"
import { SiGoogleclassroom } from "react-icons/si"
import { Link } from "react-router-dom"

export const Registrations = () => {
    return (
        <div className="home_container">
            <ul className='cards_container'>
                <Link to={'/classrooms'}> <li>
                    <SiGoogleclassroom />
                    <p>Turmas</p>
                </li></Link>
                <Link to={'/addresses'}><li>
                    <ImAddressBook />
                    <p>Endereços</p>
                </li></Link>
                <Link to={'/disciplines'}><li>
                    <GiMaterialsScience />
                    <p>Disciplinas</p>
                </li></Link>
                <Link to={'/instruments'}> <li>
                    <GiSaxophone />
                    <p>Instrumentos</p>
                </li></Link>
                <Link to={'/teachers'}> <li>
                    <GiTeacher />
                    <p>Professores</p>
                </li></Link>
                <Link to={'/schools'}> <li>
                    <IoSchoolOutline />
                    <p>Escolas</p>
                </li></Link>
                <Link to={'/graduations'}> <li>
                    <GiDiploma />
                    <p>Graduações</p>
                </li></Link>
                <Link to={'/tutors'}> <li>
                    <IoPeopleSharp />
                    <p>Tutores</p>
                </li></Link>
                <Link to={'/users'}> <li>
                    <MdOutlineSecurity />
                    <p>Usuários</p>
                </li></Link>
                <Link to={'/home'}> <li>
                    <FaHome />
                    <p>Home</p>
                </li></Link>
            </ul>
        </div >
    )
}
