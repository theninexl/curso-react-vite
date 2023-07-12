import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside         
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 top-[68px] border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]`}            >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><XMarkIcon onClick={()=> context.closeProductDetail()} className='h-6 w-6 text-black cursor-pointer' /></div>
            </div>
        </aside>
    )
}

export default ProductDetail