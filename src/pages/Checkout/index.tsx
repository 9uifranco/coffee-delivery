import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AddressForm } from "./AddressForm"
import { Cart } from "./Cart"
import { CheckoutContainer } from "./styles"
import { Success } from "./Success"
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressData, addressValidationSchema } from "./zod"

export function Checkout() {
    const { coffees, checkoutHasSucceed, validateCheckout } = useContext(CartContext)

    const methods = useForm<AddressData>({
        resolver: zodResolver(addressValidationSchema)
        
    })

    function onFormSubmit(data: any) {
        validateCheckout()
        console.log("My data:", data)
    }

    return (
        <CheckoutContainer>
            {
                checkoutHasSucceed ? <Success/> : 

                coffees && coffees.length > 0 ? (
                    <FormProvider {...methods} >
                        <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                            <AddressForm/>
                            <Cart/>
                        </form>
                    </FormProvider>
                ) : (
                    <h1>Você ainda não adicionou nenhum item</h1>
                )
            }
            
        </CheckoutContainer>
    )
}