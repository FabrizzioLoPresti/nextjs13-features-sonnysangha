import ProductCard from './product-card'
import { type Product } from '@/types/types'

// interface Props {
//   products: Product[]
// }

const fetchProducts = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000
  await new Promise(resolve => setTimeout(resolve, timeout))

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  })
  const data: Product[] = await res.json()
  return data
}

const ProductList = async () => {
  const products = await fetchProducts()
  return (
    // grid grid-cols-3 gap-4 mt-12
    <div className='flex flex-col gap-y-2'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
