import { ImAddressBook } from 'react-icons/im';
import './home.css';
import { PiStudent } from "react-icons/pi";
import { TbSchoolBell } from 'react-icons/tb';
import { SiAudiobookshelf, SiGoogleclassroom } from 'react-icons/si';
import { GiMaterialsScience, GiSaxophone, GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div className="home_container">
            <ul className='cards_container'>
                <Link to={'/students'}><li>
                    <PiStudent />
                    <p>Alunos</p>
                </li>   </Link>

                <Link to={'/schoolrollcalls'}><li>
                    <TbSchoolBell />
                    <p>Chamadas</p>
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
                <Link to={'/schooltests'}><li>
                    <SiAudiobookshelf />
                    <p>Provas</p>
                </li></Link>
                <Link to={'/classrooms'}> <li>
                    <SiGoogleclassroom />
                    <p>Turmas</p>
                </li></Link>
            </ul>
        </div >
    )
}
