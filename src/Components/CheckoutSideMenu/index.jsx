import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('cart: ', context.cartProducts)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.03.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside         
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 top-[68px] border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]`}            >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div><XMarkIcon onClick={()=> context.closeCheckoutSideMenu()} className='h-6 w-6 text-black cursor-pointer' /></div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product)=>(
                        <OrderCard 
                            key = {product.id}
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price}
                            handleDelete = { handleDelete }
                        />
                        ))
                }
            </div>
            <div className='px-6 mb-4'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu