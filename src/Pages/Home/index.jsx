import { useContext } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    //si hay busqueda la devuelves, si no, tiras el listado de productos que se hace con Fetch
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        )
      } else {
        return (
          <div>We could not find your product. Try again.</div>
        )
      }
    } else {
      return (
        //cuando le pasas la función a map si en vez de usar {} usas () en el desarrollo equivale a meterle un return
        context.items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-4'>
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input 
        type="text" 
        placeholder='Search a product...'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event)=> context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home