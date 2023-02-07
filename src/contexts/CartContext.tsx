import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

interface NewCoffeeData {
    id: number
    title: string
    imgSrc: string
    price: number
    amount: number
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

interface CartContextType {
    coffees: NewCoffeeData[] | undefined
    addressData: AddressDataType
    paymentSelected: string
    checkoutHasSucceed: boolean
    validateCheckout(): void
    updatePaymentSelected(payment: string): void
    updateAddressData(targetName: string, targetValue: string | number) : void
    addNewCoffeeToCart(newCoffee: NewCoffeeData): void
    updateSelectedCoffee(id: number, newCoffee: NewCoffeeData): void
    removeSelectedCoffeeFromCart(id: number): void
    increaseSelectedCoffeeAmount(id: number): void
    decreaseSelectedCoffeeAmount(id: number): void
    resetCheckout(): void
}

export const CartContext = createContext({} as CartContextType) 

interface CartContextProviderProps {
    children: ReactNode
}

const initialCoffees: NewCoffeeData[] = [];

const initializer = (initialValue = initialCoffees) => {
    const itemFromStorage = localStorage.getItem("@coffee-delivery:selected-coffees-1.0.0")
    if(itemFromStorage)
        return JSON.parse(itemFromStorage) || initialValue
    return initialValue
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    
    const [selectedCoffees, dispatch] = useReducer((state: NewCoffeeData[], action: any) => {

        switch(action.type) {
            case 'ADD_NEW_COFFEE':
                return [...state, action.payload.newCoffee]

            case 'UPDATE_COFFEE':
                return state.map(coffee => {
                    if(coffee.id === action.payload.id) {
                        return action.payload.coffeeUpdated;
                    }
                    return coffee;
                }) 

            case 'REMOVE_COFFEE':
                return state.filter(coffee => coffee.id !== action.payload.id)

            case 'INCREASE_COFFEE_AMOUNT':
                return state.map(coffee => {
                    if(coffee.id === action.payload.id) {
                        return {...coffee, amount: (coffee.amount + 1)};
                    }
                    return coffee;
                }) 

            case 'DECREASE_COFFEE_AMOUNT':
                return state.map(coffee => {
                    if(coffee.id === action.payload.id) {
                        return {...coffee, amount: (coffee.amount - 1)};
                    }
                    return coffee;
                }) 

            case 'RESET':
                return initialCoffees;

            default:
                return state
        }
    }, [], initializer)

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

    const [checkoutHasSucceed, setCheckoutHasSucceed] = useState<boolean>(false)

    useEffect(() => {
        const stateJSON = JSON.stringify(selectedCoffees)
        if(stateJSON)
            localStorage.setItem('@coffee-delivery:selected-coffees-1.0.0', stateJSON)
    }, [selectedCoffees])

    function addNewCoffeeToCart(newCoffee: NewCoffeeData) {
        dispatch({
            type: 'ADD_NEW_COFFEE',
            payload: {
                newCoffee
            }
        })
    }

    function updateSelectedCoffee(id: number, coffeeUpdated: NewCoffeeData) {
        dispatch({
            type: 'UPDATE_COFFEE',
            payload: {
                id,
                coffeeUpdated
            }
        })
    }

    function removeSelectedCoffeeFromCart(id: number) {
        dispatch({
            type: 'REMOVE_COFFEE',
            payload: {
                id
            }
        })
    }

    function increaseSelectedCoffeeAmount(id: number) {
        dispatch({
            type: 'INCREASE_COFFEE_AMOUNT',
            payload: {
                id
            }
        })
    }

    function decreaseSelectedCoffeeAmount(id: number) {
        dispatch({
            type: 'DECREASE_COFFEE_AMOUNT',
            payload: {
                id
            }
        })
    }

    function updateAddressData(targetName: string, targetValue: string | number) {
        setAddressData({ ...addressData, [targetName]: targetValue });
    }

    function updatePaymentSelected(payment: string) {
        setPaymentSelected(payment)
    }

    function validateCheckout() {
        setCheckoutHasSucceed(true)
    }

    function resetCheckout() {
        setCheckoutHasSucceed(false)
        setAddressData({
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        })
        setPaymentSelected("")
        dispatch({
            type: 'RESET'
        })
    }

    return (
        <CartContext.Provider value={{
                coffees: selectedCoffees,
                addressData,
                paymentSelected,
                checkoutHasSucceed,
                validateCheckout,
                updatePaymentSelected,
                updateAddressData,
                addNewCoffeeToCart,
                updateSelectedCoffee,
                removeSelectedCoffeeFromCart,
                increaseSelectedCoffeeAmount,
                decreaseSelectedCoffeeAmount,
                resetCheckout
            }}>
            {children}
        </CartContext.Provider>
    )
}