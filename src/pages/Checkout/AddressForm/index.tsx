import { useState } from "react"

interface FormDataType {
    cep: number | undefined
    rua: string | undefined
    numero: number | undefined
    complemento: string | undefined
    bairro: string | undefined
    cidade: string | undefined
    uf: string | undefined
}

export function AddressForm() {
    const [formData, setFormData] = useState<FormDataType>()

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
    }

    return (
        <div>
            <div>    
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
                <input onChange={handleInputChange} type="number" placeholder="CEP" />
                <input onChange={handleInputChange} type="text" placeholder="Rua" />
                <input onChange={handleInputChange} type="number" placeholder="Número" />
                <input onChange={handleInputChange} type="text" placeholder="Complemento" />
                <input onChange={handleInputChange} type="text" placeholder="Bairro" />
                <input onChange={handleInputChange} type="text" placeholder="Cidade" />
                <input onChange={handleInputChange} type="text" placeholder="UF" />
            </div>
            <div>
                <span>Pagamento</span>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
        </div>
    )
}