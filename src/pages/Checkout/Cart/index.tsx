import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import * as zod from 'zod'

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
        <div>
            <h2>Cafés selecionados</h2>
            {
                coffees?.map(coffee => {
                    return (
                        <div key={coffee.id}>
                            <span>{coffee.title}</span>
                            <span>{coffee.price.toFixed(2)}</span>
                            <button type="button" onClick={() => decreaseAmount(coffee.id)}>-</button>
                            <span>{coffee.amount}</span>
                            <button type="button" onClick={() => increaseAmount(coffee.id)}>+</button>
                            <button onClick={() => handleClickRemoveButton(coffee.id)} type="button">Remove</button>
                        </div>
                    )
                })
            }
            <span>Total de itens: {totalPrice?.toFixed(2)}</span>
            <span>Entrega: {deliveryFee.toFixed(2)}</span>
            <strong>Total: {(totalPrice! + deliveryFee).toFixed(2)}</strong>
            <button onClick={handleClickConfirmButton}>Confirmar Pedido</button>
        </div>
    )
}