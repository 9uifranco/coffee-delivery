import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CartContainer, SelectedCoffeesContainer, CoffeeContainer, ConfirmButton, RemoveButton } from "./styles";
import { Minus, Plus, Trash } from 'phosphor-react'

export function Cart() {

    const { coffees, removeSelectedCoffeeFromCart, increaseSelectedCoffeeAmount, decreaseSelectedCoffeeAmount } = useContext(CartContext)

    function increaseAmount(id: number) {
        increaseSelectedCoffeeAmount(id)
    }

    function decreaseAmount(id: number) {
        decreaseSelectedCoffeeAmount(id)
    }

    function handleClickRemoveButton(id: number) {
        removeSelectedCoffeeFromCart(id)
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
                                        <span>R$ {(coffee.amount * coffee.price).toFixed(2)}</span>
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
                <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
            </SelectedCoffeesContainer>
        </CartContainer>
    )
}