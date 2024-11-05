import { useState } from "react";

type Props = {
    name: string;
    placeholder: string;
    labelTitle: string;
}

export const Input = ({ name, placeholder, labelTitle }: Props) => {

    const [nameInput, setNameInput] = useState("");

    return (
        <div className="form-control">
            <label htmlFor={name}>{labelTitle}</label>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
        </div>
    )
}
