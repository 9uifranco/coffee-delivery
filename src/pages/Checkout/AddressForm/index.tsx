import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { AddressFormContainer, CustomCheckbox, OrderInfoContainer, PaymentMethodContainer } from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { AddressData } from '../zod'

export function AddressForm() {

    const { addressData, paymentSelected, updatePaymentSelected, updateAddressData } = useContext(CartContext)

    const { resetField, setValue, register, formState: { errors } } = useFormContext<AddressData>();

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
            if (o.value === paymentSelected)
                return { ...o, checked: true }
            else
                return { ...o, checked: false }
        })

        setPaymentOptions(initOptions)
    }, [])

    useEffect(() => {
        resetField("paymentMethod")
        setValue("paymentMethod", paymentSelected)
    }, [paymentSelected])

    function selectPaymentMethod(value: string) {
        const updatedOptions = paymentOptions.map(o => {
            if (o.value === value) {
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

        if (e.target.type == "number") {
            targetValue = parseInt(e.target.value)
        }

        updateAddressData(targetName, targetValue)
    }

    function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        const updatedOptions = paymentOptions.map(o => {
            if(o.value === e.target.value) {
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
                    <MapPinLine color={'#C47F17'} size={22} />
                    <div>
                        <span>Endereço de Entrega</span>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </header>
                
                <div>
                    <label htmlFor="">{errors?.cep?.message}</label>

                    <input
                        className="cep"
                        value={addressData.cep}
                        type="tel"
                        maxLength={8}
                        placeholder="CEP"
                        {...register("cep", {
                            onChange: (e) => handleInputChange(e),
                            required: true
                        })}  
                    />   
                </div>

                <div>
                    <label htmlFor="">{errors?.rua?.message}</label>

                    <input
                        value={addressData.rua}
                        type="text"
                        placeholder="Rua"
                        {...register("rua", {
                            onChange: (e) => handleInputChange(e),
                            required: true
                        })}  
                    />
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="">{errors?.numero?.message}</label>
                        <input
                            className="numero"
                            value={addressData.numero}
                            type="number"
                            placeholder="Número"
                            {...register("numero", {
                                onChange: (e) => handleInputChange(e),
                                required: true
                            })}  
                        />
                    </div>
                    
                    <div className="complemento">
                        <label htmlFor="">{errors?.complemento?.message}</label>
                        <input
                            value={addressData.complemento}
                            type="text"
                            placeholder="Complemento"
                            {...register("complemento", {
                                onChange: (e) => handleInputChange(e),
                                required: true
                            })} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="">{errors?.bairro?.message}</label>
                        <input
                            className="bairro"
                            value={addressData.bairro}
                            type="text"
                            placeholder="Bairro"
                            {...register("bairro", {
                                onChange: (e) => handleInputChange(e),
                                required: true
                            })} 
                        />
                    </div>

                    <div className="cidade">
                        <label htmlFor="">{errors?.cidade?.message}</label>
                        <input
                            
                            value={addressData.cidade}
                            type="text"
                            placeholder="Cidade"
                            {...register("cidade", {
                                onChange: (e) => handleInputChange(e),
                                required: true
                            })} 
                        />
                    </div>

                    <div className="uf">
                        <label htmlFor="">{errors?.uf?.message}</label>
                        <input
                            
                            value={addressData.uf}
                            type="text"
                            maxLength={2}
                            placeholder="UF"
                            {...register("uf", {
                                onChange: (e) => handleInputChange(e),
                                required: true
                            })} 
                        />
                    </div>
                </div>
            </AddressFormContainer>

            <PaymentMethodContainer>
                <header>
                    <CurrencyDollar color={'#8047F8'} size={22} />
                    <div>
                        <span>Pagamento</span>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </header>

                <label htmlFor="">{errors?.paymentMethod?.message}</label>
                <div className="row">
                    {
                        paymentOptions.map(o => {
                            return (
                                <CustomCheckbox option={o.value} selected={paymentSelected} onClick={() => selectPaymentMethod(o.value)} key={o.id}>
                                    {
                                        (o.value == "credito") && <CreditCard color={"#8047F8"} size={16} /> ||
                                        (o.value == "debito") && <Bank color={"#8047F8"} size={16} /> ||
                                        (o.value == "dinheiro") && <Money color={"#8047F8"} size={16} />
                                    }
                                    <span>{o.text}</span>
                                    {
                                        o.checked && 
                                        <input
                                            checked={o.checked}
                                            value={o.value}
                                            type="checkbox"
                                            {...register("paymentMethod", {
                                                onChange: (e) => handleOptionChange(e)
                                            })} 
                                        />
                                    }
                                </CustomCheckbox>
                            )
                        })
                    }
                </div>
            </PaymentMethodContainer>
        </OrderInfoContainer>
    )
}