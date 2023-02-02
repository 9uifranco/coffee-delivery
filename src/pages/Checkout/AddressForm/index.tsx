import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { AddressFormContainer, CustomCheckbox, OrderInfoContainer, PaymentMethodContainer } from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'


export function AddressForm() {
    const { addressData, paymentSelected, updatePaymentSelected, updateAddressData } = useContext(CartContext)

    const [paymentOptions, setPaymentOptions] = useState(
    [
        {
            id: 1,
            value: "credito",
            text: "CARTÃO DE CRÉDITO",
            checked: false
        },
        {
            id: 2,
            value: "debito",
            text: "CARTÃO DE DÉBITO",
            checked: false
        },
        {
            id: 3,
            value: "dinheiro",
            text: "DINHEIRO",
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
        let targetValue: string | number = e.target.value
        
        if(e.target.type == "number") {
            targetValue = parseInt(e.target.value)
        }

        console.log(e.target.value)

        updateAddressData(targetName, targetValue)
    }

    function selectPaymentMethod(value: string) {

        const updatedOptions = paymentOptions.map(o => {
            if(o.value === value) {
                updatePaymentSelected(o.value)
                return { ...o, checked: true }
            } else 
                return { ...o, checked: false }
        })

        setPaymentOptions(updatedOptions)
    }

    return (
        <OrderInfoContainer>
            <h1>Complete seu pedido</h1>
            <AddressFormContainer>
                <header>
                    <MapPinLine color={'#C47F17'} size={22}/>
                    <div>
                        <span>Endereço de Entrega</span>
                        <span>Informe o endereço onde deseja receber seu pedido</span>    
                    </div>
                </header>
                <input className="cep" onChange={handleInputChange} name="cep" value={addressData.cep} type="number" placeholder="CEP" />
                <input onChange={handleInputChange} name="rua" value={addressData.rua} type="text" placeholder="Rua" />
                <div className="row">
                    <input className="numero" onChange={handleInputChange} name="numero" value={addressData.numero} type="number" placeholder="Número" />
                    <input className="complemento" onChange={handleInputChange} name="complemento" value={addressData.complemento} type="text" placeholder="Complemento" />   
                </div>
                <div className="row">
                    <input className="bairro" onChange={handleInputChange} name="bairro" value={addressData.bairro} type="text" placeholder="Bairro" />
                    <input className="cidade" onChange={handleInputChange} name="cidade" value={addressData.cidade} type="text" placeholder="Cidade" />
                    <input className="uf" onChange={handleInputChange} name="uf" value={addressData.uf} type="text" placeholder="UF" />
                </div>
            </AddressFormContainer>
            <PaymentMethodContainer>
                <header>
                    <CurrencyDollar color={'#8047F8'} size={22}/>
                    <div>
                        <span>Pagamento</span>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </header>
                <div className="row">
                    {
                        paymentOptions.map(o => {
                            return (
                                <CustomCheckbox option={o.value} selected={paymentSelected} onClick={() => selectPaymentMethod(o.value)} key={o.id}>
                                    {
                                        (o.value == "credito") && <CreditCard color={"#8047F8"} size={16}/> || 
                                        (o.value == "debito") && <Bank color={"#8047F8"} size={16}/> || 
                                        (o.value == "dinheiro") && <Money color={"#8047F8"} size={16}/>
                                    }
                                    <span>{o.text}</span>
                                    <input onChange={handleChange} checked={o.checked} value={o.value} type="checkbox" />
                                </CustomCheckbox>
                            )
                        })
                    }
                </div>
            </PaymentMethodContainer>
        </OrderInfoContainer>
    )
}