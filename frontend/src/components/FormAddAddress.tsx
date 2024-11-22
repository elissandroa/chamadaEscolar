import './FormAddAddress.css'
type Props = {
  formAddressVisible: boolean;
  setFormAddressVisible: (formAddressVisible: boolean) => any;
}
export const FormAddAddress = ({ formAddressVisible, setFormAddressVisible }: Props) => {
  return (
    <div className='page_modal'>
      <div className="form_container">
        <h1>Endereço</h1>
        <p>Rua: José Clementino Bettega, 120</p>
        <p>Complement: Bloco 3 Apto 124</p>
        <p>Cidade: Curitiba  Estado: Paraná</p>
        <p>Cep: 81120-020</p>
        <div className="form-actions">
          <button onClick={() => setFormAddressVisible(!formAddressVisible)} >Voltar</button>
        </div>
      </div>

    </div>
  )
}
