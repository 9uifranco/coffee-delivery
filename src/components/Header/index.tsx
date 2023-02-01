import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { IconContainer, NavContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/logo.png'

export function Header() {
    const { coffees } = useContext(CartContext)
    return (
        <NavContainer>
            <NavLink to='/' title='Home'>
                <img src={Logo} alt="logo" />
            </NavLink>
            <NavLink to='/checkout' title='Checkout'>
                <IconContainer>
                    <ShoppingCart color={"#C47F17"} size={22}/>
                    {
                        coffees && coffees.length > 0 ? (
                            <span>{coffees.length}</span>
                        ) : ""
                    }
                </IconContainer>
            </NavLink>
        </NavContainer>
    )
}