import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory(null)}
                        >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory(null)}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li className='text-black/60'>
                    noe@email.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => 
                         isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className='h-5 w-5 text-black'/> {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar