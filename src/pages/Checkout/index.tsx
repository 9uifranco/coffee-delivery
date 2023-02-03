import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AddressForm } from "./AddressForm"
import { Cart } from "./Cart"
import { CheckoutContainer } from "./styles"
import { Success } from "./Success"

export function Checkout() {
    const { coffees, checkoutHasSucceed } = useContext(CartContext)

    return (
        <CheckoutContainer>
            {
                checkoutHasSucceed ? <Success/> : 

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