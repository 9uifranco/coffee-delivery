import { CoffeeCard } from "./CoffeeCard";

import expresso from '../../assets/Type=Expresso.png'
import americano from '../../assets/Type=Americano.png'
import cremoso from '../../assets/Type=Expresso_Cremoso.png'
import gelado from '../../assets/Type=Cafe_Gelado.png'

const data = [
    {
        id: 1,
        imgSrc: expresso,
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 2,
        imgSrc: americano,
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 3,
        imgSrc: cremoso,
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 4,
        imgSrc: gelado,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        category: [ "Tradicional", "Gelado" ],
        price: 9.90
    }
]

export function Home() {
    return (
        <main>
            <h1>Find the perfect coffee for now</h1>
            <h2>Our coffees:</h2>
            
            {
                data.map(coffee => {
                    return (
                        <CoffeeCard
                            key={coffee.id}
                            id={coffee.id}
                            imgSrc={coffee.imgSrc}
                            title={coffee.title}
                            description={coffee.description}
                            category={coffee.category}
                            price={coffee.price}
                        />
                    )
                })
            }
        </main>
    )
}