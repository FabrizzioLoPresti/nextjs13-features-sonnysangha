import ProductCard from './product-card'
import { type Product } from '@/types/types'

interface Props {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-12'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
