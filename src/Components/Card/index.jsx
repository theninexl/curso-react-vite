const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>Tagname</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='alt content' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2'>+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Category</span>
                <span className="text-lg font-bold">300€</span>
            </p>
        </div>
    )
}

export default Card