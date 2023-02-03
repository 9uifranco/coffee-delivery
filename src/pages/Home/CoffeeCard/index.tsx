import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { CoffeeCardContainer, IconContainerPurpleDark, IconContainerYellow } from "./styles"
import { ShoppingCartSimple, Check, Plus, Minus } from 'phosphor-react'

interface CoffeeCardProps {
    id: number
    imgSrc: string
    title: string
    description: string
    category: string[]
    price: number
}

export function CoffeeCard({ id, imgSrc, title, description, category, price }: CoffeeCardProps) {
    const { coffees, addNewCoffeeToCart, updateSelectedCoffee } = useContext(CartContext)

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
            imgSrc,
            price,
            amount: newAmount
        }

        if(curCoffee) {
            updateSelectedCoffee(id, newCoffee)
            return
        }

        addNewCoffeeToCart(newCoffee)
    }

    return (
        <CoffeeCardContainer>
            <img src={imgSrc} alt="" />
            <div className="categoryContainer">
                {
                    category.map((type, index) => {
                        return (
                            <span key={index}>{type.toUpperCase()}</span>
                        )
                    })
                }
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <footer>
                <div>
                    <span className="currency">R$</span>
                    <span className="price">{price.toFixed(2)}</span>
                </div>
                <form onSubmit={addNewCoffee}>
                    <div className="amountContainer">
                        <button type="button" onClick={decreaseAmount}>
                            <Minus size={14}/>
                        </button>
                        <span>{amount}</span>
                        <button type="button" onClick={increaseAmount}>
                            <Plus size={14}/>
                        </button>
                    </div>
                    {
                        !curCoffee || curCoffee.amount !== amount ? (
                            <IconContainerPurpleDark type="submit">
                                <ShoppingCartSimple size={22}/>
                            </IconContainerPurpleDark>
                        ) : (
                            <IconContainerYellow type="submit">
                                <Check size={22}/>
                            </IconContainerYellow>
                        )
                    }
                </form>
            </footer>
        </CoffeeCardContainer>
        
    )
}