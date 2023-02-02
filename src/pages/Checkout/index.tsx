import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AddressForm } from "./AddressForm"
import { Cart } from "./Cart"
import { CheckoutContainer } from "./styles"

export function Checkout() {
    const { coffees } = useContext(CartContext)

    return (
        <CheckoutContainer>
            {
                coffees && coffees.length > 0 ? (

                    <div>
                        <AddressForm/>
                        <Cart/>
                    </div>
                    
                ) : (
                    <h1>Você ainda não adicionou nenhum item</h1>
                )

            }
            
        </CheckoutContainer>
    )
}