import { CoffeeCard } from "./CoffeeCard";

import expresso from '../../assets/Type=Expresso.png'
import americano from '../../assets/Type=Americano.png'
import cremoso from '../../assets/Type=Expresso_Cremoso.png'
import gelado from '../../assets/Type=Cafe_Gelado.png'
import cafeComLeite from '../../assets/Type=Cafe_com_Leite.png'
import latte from '../../assets/Type=Latte.png'
import capuccino from '../../assets/Type=Capuccino.png'
import macchiato from '../../assets/Type=Macchiato.png'
import mocaccino from '../../assets/Type=Mochaccino.png'
import chocolateQuente from '../../assets/Type=Chocolate_Quente.png'
import cubano from '../../assets/Type=Cubano.png'
import havaiano from '../../assets/Type=Havaiano.png'
import arabe from '../../assets/Type=Arabe.png'
import irlandes from '../../assets/Type=Irlandes.png'

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
        category: [ "Tradicional", "Gelado" ],
        price: 9.90
    },
    {
        id: 5,
        imgSrc: cafeComLeite,
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        category: [ "Tradicional", "Com leite" ],
        price: 9.90
    },
    {
        id: 6,
        imgSrc: latte,
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        category: [ "Tradicional", "Com leite" ],
        price: 9.90
    },
    {
        id: 7,
        imgSrc: capuccino,
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        category: [ "Tradicional", "Com leite" ],
        price: 9.90
    },
    {
        id: 8,
        imgSrc: macchiato,
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        category: [ "Tradicional", "Com leite" ],
        price: 9.90
    },
    {
        id: 9,
        imgSrc: mocaccino,
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        category: [ "Tradicional", "Com leite" ],
        price: 9.90
    },
    {
        id: 10,
        imgSrc: chocolateQuente,
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        category: [ "Especial", "Com leite" ],
        price: 9.90
    },
    {
        id: 11,
        imgSrc: cubano,
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        category: [ "Especial", "Alcoólico", "Gelado" ],
        price: 9.90
    },
    {
        id: 12,
        imgSrc: havaiano,
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        category: [ "Especial" ],
        price: 9.90
    },
    {
        id: 13,
        imgSrc: arabe,
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        category: [ "Especial" ],
        price: 9.90
    },
    {
        id: 14,
        imgSrc: irlandes,
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        category: [ "Especial", "Alcoólico" ],
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