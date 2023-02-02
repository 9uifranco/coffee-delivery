import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import * as zod from 'zod'
import { CartContainer, SelectedCoffeesContainer, CoffeeContainer, ConfirmButton, RemoveButton } from "./styles";
import { Minus, Plus, Trash } from 'phosphor-react'

const addressValidationSchema = zod.object({
    cep: zod.number().min(1, "Type your zip code"),
    rua: zod.string().min(1, "Type your street name"),
    numero: zod.number().min(1, "Type your house number"),
    complemento: zod.string(),
    bairro: zod.string().min(1, "Digite seu bairro"),
    cidade: zod.string().min(1, "Type your zip code"),
    uf: zod.string().length(2, "Type a valid UF")
})

export function Cart() {
    const { coffees, addressData, removeSelectedCoffeeFromCart, increaseSelectedCoffeeAmount, decreaseSelectedCoffeeAmount } = useContext(CartContext)

    function increaseAmount(id: number) {
        increaseSelectedCoffeeAmount(id)
    }

    function decreaseAmount(id: number) {
        decreaseSelectedCoffeeAmount(id)
    }

    function handleClickRemoveButton(id: number) {
        removeSelectedCoffeeFromCart(id)
    }

    function handleClickConfirmButton() {
        
        const result = addressValidationSchema.safeParse(
            {
                cep: addressData.cep,
                rua: addressData.rua,
                numero: addressData.numero,
                complemento: addressData.complemento,
                bairro: addressData.bairro,
                cidade: addressData.cidade,
                uf: addressData.uf,
            }
        )
        if(!result.success) {
            result.error.errors.forEach(err => {
                // set e.target.name = err.path[0] e.target.customValidity = err.message
            })

            //console.log(result.error.errors)
            
            //e.target.setCustomValidity

        } else {
            console.log("Sucess")
            // Go to success page
        }
    }

    const totalPrice = coffees?.reduce((acc, product) => acc + (product.price * product.amount), 0);

    const deliveryFee = 3.5

    return (
        <CartContainer>
            <h1>Cafés selecionados</h1>
            <SelectedCoffeesContainer>
                {
                    coffees?.map(coffee => {
                        return (
                            <CoffeeContainer key={coffee.id}>
                                <img src={coffee.imgSrc}/>
                                <div>
                                    <div>
                                        <span>{coffee.title}</span>
                                        <span>R$ {coffee.price.toFixed(2)}</span>
                                    </div>
                                    <div>
                                        <div className="amountContainer">
                                            <button type="button" onClick={() => decreaseAmount(coffee.id)}>
                                                <Minus size={14}/>
                                            </button>
                                            <span>{coffee.amount}</span>
                                            <button type="button" onClick={() => increaseAmount(coffee.id)}>
                                                <Plus size={14}/>
                                            </button>
                                        </div>
                                        <RemoveButton onClick={() => handleClickRemoveButton(coffee.id)} type="button"><Trash color={'#8047F8'} size={16}/> REMOVER</RemoveButton>
                                    </div>
                                </div>
                            </CoffeeContainer>
                        )
                    })
                }
                <div className="totalPrice">
                    <div>
                        <span>Total de itens: </span>
                        <span>R$ {totalPrice?.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Entrega: </span>
                        <span>R$ {deliveryFee.toFixed(2)}</span>
                    </div>
                    <div>
                        <strong>Total: </strong>
                        <strong>R$ {(totalPrice! + deliveryFee).toFixed(2)}</strong>
                    </div>
                </div>
                <ConfirmButton onClick={handleClickConfirmButton}>CONFIRMAR PEDIDO</ConfirmButton>
            </SelectedCoffeesContainer>
        </CartContainer>
    )
}