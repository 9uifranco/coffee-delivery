import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"

interface CoffeeCardProps {
    id: number
    imgSrc: string
    title: string
    description: string
    category: string[]
    price: number
}

export function CoffeeCard({ id, imgSrc, title, description, category, price }: CoffeeCardProps) {
    const { coffees, addNewCoffeeToCart } = useContext(CartContext)

    const [amount, setAmount] = useState(1)

    const curCoffee = coffees?.find(coffee => coffee.id === id)

    useEffect(() => {
        // If this coffee has been included
        if(curCoffee) {
            setAmount(curCoffee?.amount)
        }
    }, [])

    function increaseAmount() {
        let newAmount = amount + 1
        setAmount(newAmount)
    }

    function decreaseAmount() {
        let newAmount = amount - 1
        if(amount <= 1)
            return
        setAmount(newAmount)
    }

    function addNewCoffee(e: React.FormEvent) {
        e.preventDefault()

        let newAmount = amount

        const newCoffee = {
            id,
            title,
            price,
            amount: newAmount
        }

        if(coffees && coffees.length > 0) {
            // If this coffee has been included
            if(curCoffee) {
                const updatedCoffeesArray = coffees.map(coffee => {
                    if(coffee.id === id) {
                        return newCoffee;
                    }
                    return coffee;
                })
    
                addNewCoffeeToCart(updatedCoffeesArray)
            }
            // If this coffee has not been included
            else {
                addNewCoffeeToCart([...coffees, newCoffee])
            }
            
        }
        // If there are no coffees included
        else {
            addNewCoffeeToCart([newCoffee])
        }
    }

    return (
        <article>
            <img src={imgSrc} alt="" />
            <span>{title}</span>
            <span>{description}</span>
            {
                category.map((type, index) => {
                    return (
                        <strong key={index}>{type}</strong>
                    )
                })
            }
            <span>{price}</span>
            <form onSubmit={addNewCoffee}>
                <button type="button" onClick={decreaseAmount}>-</button>
                <span>{amount}</span>
                <button type="button" onClick={increaseAmount}>+</button>
                {
                    !curCoffee || curCoffee.amount !== amount ? (
                        <button type="submit">Add</button>
                    ) : (
                        <button type="submit">✓</button>
                    )
                }
            </form>
        </article>
        
    )
}