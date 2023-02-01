import { createContext, ReactNode, useState } from "react";

interface NewCoffeeData {
    id: number
    title: string
    price: number
    amount: number
}

interface CartContextType {
    coffees: NewCoffeeData[] | undefined
    addressData: AddressDataType
    paymentSelected: string
    updatePaymentSelected(payment: string): void
    updateAddressData(targetName: string, targetValue: string | number) : void
    addNewCoffeeToCart(newCoffeesArray: NewCoffeeData[]): void
    removeSelectedCoffeeFromCart(id: number): void
    increaseSelectedCoffeeAmount(id: number): void
    decreaseSelectedCoffeeAmount(id: number): void
}

interface AddressDataType {
    cep: number | string
    rua: string
    numero: number | string
    complemento: string
    bairro: string
    cidade: string
    uf: string
}

export const CartContext = createContext({} as CartContextType) 

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [selectedCoffees, setSelectedCoffees] = useState<NewCoffeeData[]>([])

    const [addressData, setAddressData] = useState<AddressDataType>({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: ''
    })

    const [paymentSelected, setPaymentSelected] = useState('')

    const [targetArray, setTargetArray] = useState<any>([])

    function updateAddressData(targetName: string, targetValue: string | number) {
        setAddressData({ ...addressData, [targetName]: targetValue });
    }

    function updatePaymentSelected(payment: string) {
        setPaymentSelected(payment)
    }

    function addNewCoffeeToCart(newCoffeesArray: NewCoffeeData[]) {
        setSelectedCoffees(newCoffeesArray)
    }

    function removeSelectedCoffeeFromCart(id: number) {
        let coffeesOrderedWithoutID = selectedCoffees.filter(coffee => coffee.id !== id)
        setSelectedCoffees(coffeesOrderedWithoutID)
    }

    function increaseSelectedCoffeeAmount(id: number) {
        let currentCoffee = selectedCoffees.find(coffee => coffee.id === id)

        if(currentCoffee) {
            let newAmount = currentCoffee.amount + 1

            const updatedArray = selectedCoffees.map(coffee => {
                if(coffee.id === id) {
                    return {...coffee, amount: newAmount};
                }
                return coffee;
            })

            setSelectedCoffees(updatedArray)
        }   
    }

    function decreaseSelectedCoffeeAmount(id: number) {
        let currentCoffee = selectedCoffees.find(coffee => coffee.id === id)

        if(currentCoffee) {
            if(currentCoffee.amount <= 1)
                return
            let newAmount = currentCoffee.amount - 1

            const updatedArray = selectedCoffees.map(coffee => {
                if(coffee.id === id) {
                    return {...coffee, amount: newAmount};
                }
                return coffee;
            })

            setSelectedCoffees(updatedArray)
        }   
    }

    return (
        <CartContext.Provider value={{
                coffees: selectedCoffees,
                addressData,
                paymentSelected,
                updatePaymentSelected,
                updateAddressData,
                addNewCoffeeToCart,
                removeSelectedCoffeeFromCart,
                increaseSelectedCoffeeAmount,
                decreaseSelectedCoffeeAmount
            }}>
            {children}
        </CartContext.Provider>
    )
}