import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AddressForm } from "./AddressForm"
import { Cart } from "./Cart"
import { CheckoutContainer } from "./styles"
import { Success } from "./Success"
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const addressValidationSchema = zod.object({
    cep: zod.string().length(8, "Informe um CEP válido"),
    rua: zod.string().min(1, "Informe o nome da sua rua"),
    numero: zod.string().min(1, "Informe o número do local de entrega"),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, "Informe seu bairro"),
    cidade: zod.string().min(1, "Informe sua cidade"),
    uf: zod.string().length(2, "Informe um estado válido"),
    paymentMethod: zod.string().min(1, "Informe um método de pagamento")
})

type AddressData = zod.infer<typeof addressValidationSchema>

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