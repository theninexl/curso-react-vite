import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-2 border rounded-lg border-black w-80 p-4">
            <p className='flex justify-between flex-1 items-center'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.2023</span>
                    <span className='font-light'>{totalProducts} article(s)</span>
                </div>
                <div className='flex items-center'>
                <span className='font-medium text-2xl'>€{totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer text-right'></ChevronRightIcon>
                </div>              
                
            </p>
        </div>
    )
}

export default OrdersCard