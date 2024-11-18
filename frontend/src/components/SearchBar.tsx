import { useState } from "react"
import { FaSearch } from "react-icons/fa"
type Props = {
    setQuery: (name: string) => any;
}

export const SearchBar = ({ setQuery }: Props) => {
    const [name, setName] = useState("");


    const searchStudent = () => {
        setQuery(name);
    }

    return (
        <div className='search-bar'>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={searchStudent}
            />
            <FaSearch onClick={() => searchStudent()} />
        </div>
    )
}
