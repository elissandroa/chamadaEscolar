import './formButton.css';

type Props = {
    type: string;
    value: string;
    inputClass?: string;
    onclick?: () => any;
}


export const FormButton = ({ type, value, inputClass, onclick }: Props) => {
    return (
        <div className={inputClass}>
            <input type={type} value={value} onClick={onclick} />
        </div>
    )
}
