import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.some(product => product.id === id)
        return (
            isInCart ? (
                <button 
                        className='absolute top-0 right-0 flex justify-center items-center bg-black w-8 h-8 rounded-full m-2 p-2'>
                            <CheckIcon className='h-8 w-8 text-white' />
                    </button>
            ):(<button 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-2' onClick={(event)=> addProductsToCart(event,data.data)}>
                    <PlusIcon className='h-8 w-8 text-black' />
                </button>)   
        )     
    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60'
            onClick={()=> showProduct(data.data)}>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
                
                
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-bold">{data.data.price}€</span>
            </p>
        </div>
    )
}

export default Card