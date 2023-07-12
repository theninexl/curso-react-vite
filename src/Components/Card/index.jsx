import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60'
            onClick={()=> context.openProductDetail()}>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />

                
                <button 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-2' onClick={()=> context.setCount(context.count + 1)}>
                    <PlusIcon className='h-8 w-8 text-black' />
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-bold">{data.data.price}€</span>
            </p>
        </div>
    )
}

export default Card