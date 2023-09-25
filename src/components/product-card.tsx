import Link from 'next/link'
import { type Product } from '@/types/types'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='bg-slate-800 p-4 rounded-md flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link href={`/products/${product.id}`} className='bg-slate-500 px-4 py-2 rounded-lg w-fit hover:bg-slate-900 transition-colors ease-in-out duration-300'>
        View Product
      </Link>
    </div>
  )
}

export default ProductCard
