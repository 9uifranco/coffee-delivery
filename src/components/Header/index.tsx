import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
    const { coffees } = useContext(CartContext)
    return (
        <nav>
            <NavLink to='/' title='Home'>
                Home
            </NavLink>
            <NavLink to='/checkout' title='Checkout'>
                Checkout
                {
                    coffees && coffees.length > 0 ? (
                        <span>{coffees.length}</span>
                    ) : ""
                }
            </NavLink>
        </nav>
    )
}