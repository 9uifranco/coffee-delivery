import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"

export function AddressForm() {
    const { addressData, paymentSelected, updatePaymentSelected, updateAddressData } = useContext(CartContext)

    const [paymentOptions, setPaymentOptions] = useState(
    [
        {
            id: 1,
            value: "credito",
            checked: false
        },
        {
            id: 2,
            value: "debito",
            checked: false
        },
        {
            id: 3,
            value: "dinheiro",
            checked: false
        },
    ])

    useEffect(() => {
        const initOptions = paymentOptions.map(o => {
            if(o.value === paymentSelected)
                return { ...o, checked: true }
            else 
                return { ...o, checked: false }
        })
    
        setPaymentOptions(initOptions)
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const updatedOptions = paymentOptions.map(o => {
            if(o.value === e.target.value) {
                updatePaymentSelected(o.value)
                return { ...o, checked: true }
            } else 
                return { ...o, checked: false }
        })

        setPaymentOptions(updatedOptions)
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {

        const targetName = e.target.name
        let targetValue: string | number = e.target.name
        
        if(e.target.type == "number") {
            targetValue = parseInt(e.target.value)
        }

        updateAddressData(targetName, targetValue)
    }

    return (
        <div>
            <div>    
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
                <input onChange={handleInputChange} name="cep" value={addressData.cep} type="number" placeholder="CEP" />
                <input onChange={handleInputChange} name="rua" value={addressData.rua} type="text" placeholder="Rua" />
                <input onChange={handleInputChange} name="numero" value={addressData.numero} type="number" placeholder="Número" />
                <input onChange={handleInputChange} name="complemento" value={addressData.complemento} type="text" placeholder="Complemento" />
                <input onChange={handleInputChange} name="bairro" value={addressData.bairro} type="text" placeholder="Bairro" />
                <input onChange={handleInputChange} name="cidade" value={addressData.cidade} type="text" placeholder="Cidade" />
                <input onChange={handleInputChange} name="uf" value={addressData.uf} type="text" placeholder="UF" />
            </div>
            <div>
                <span>Pagamento</span>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                
                {
                    paymentOptions.map(o => {
                        return (
                            <div key={o.id}>
                                <label htmlFor={o.value}>{o.value}</label>
                                <input onChange={handleChange} checked={o.checked} value={o.value} type="checkbox" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}