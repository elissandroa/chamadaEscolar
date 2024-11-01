import './home.css';
import { PiStudent } from "react-icons/pi";
import { TbSchoolBell } from 'react-icons/tb';
import { SiAudiobookshelf } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BsDatabaseFillCheck } from 'react-icons/bs';
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
                
                <Link to={'/schooltests'}><li>
                    <SiAudiobookshelf />
                    <p>Provas</p>
                </li></Link>
                <Link to={'/registrations'}> <li>
                <BsDatabaseFillCheck />
                    <p>Cadastros</p>
                </li></Link>
            </ul>
        </div >
    )
}
