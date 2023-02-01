import { CoffeeCard } from "./CoffeeCard";

import expresso from '../../assets/Type=Expresso.png'
import americano from '../../assets/Type=Americano.png'
import cremoso from '../../assets/Type=Expresso_Cremoso.png'
import gelado from '../../assets/Type=Cafe_Gelado.png'

import { HomeContainer, IconContainerGray, IconContainerPurple, IconContainerYellow, IconContainerYellowDark } from "./styles";

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

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
        category: [ "Tradicional", "Gelado", "Top" ],
        price: 9.90
    },
    {
        id: 5,
        imgSrc: expresso,
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 6,
        imgSrc: americano,
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 7,
        imgSrc: cremoso,
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        category: [ "Tradicional" ],
        price: 9.90
    },
    {
        id: 8,
        imgSrc: gelado,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        category: [ "Tradicional", "Gelado" ],
        price: 9.90
    }
]

export function Home() {
    return (
        <HomeContainer>
            <header>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span>Com o Coffee Delivery você recebe seu café onde estiver, a<br/> qualquer hora</span>
                <div className="benefits">
                        <div>
                            <IconContainerYellowDark>
                                <ShoppingCart size={16}/>
                            </IconContainerYellowDark>
                            Compra simples e segura
                        </div>
                        <div>
                            <IconContainerGray>
                                <Package size={16}/>
                            </IconContainerGray>
                            Embalagem mantém o café intacto
                        </div>

                        <div>
                            <IconContainerYellow>
                                <Timer size={16}/>
                            </IconContainerYellow>
                            Entrega rápida e rastreada
                        </div>
                        <div>
                            <IconContainerPurple>
                                <Coffee size={16}/>
                            </IconContainerPurple>
                            O café chega fresquinho até você
                        </div>
                </div>
            </header>
            
            <section>
                <strong>Nossos cafés</strong>
                <div>
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
                </div>
            </section>
        </HomeContainer>
    )
}