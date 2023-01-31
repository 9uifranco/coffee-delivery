import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

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
        <div>
            <h2>Cafés selecionados</h2>
            {
                coffees?.map(coffee => {
                    return (
                        <div key={coffee.id}>
                            <span>{coffee.title}</span>
                            <span>{coffee.price}</span>
                            <button type="button" onClick={() => decreaseAmount(coffee.id)}>-</button>
                            <span>{coffee.amount}</span>
                            <button type="button" onClick={() => increaseAmount(coffee.id)}>+</button>
                            <button onClick={() => handleClickRemoveButton(coffee.id)} type="button">Remove</button>
                        </div>
                    )
                })
            }
            <span>Total de itens: {totalPrice}</span>
            <span>Entrega: {deliveryFee}</span>
            <strong>Total: {totalPrice! + deliveryFee}</strong>
            <button >Confirmar Pedido</button>
        </div>
    )
}