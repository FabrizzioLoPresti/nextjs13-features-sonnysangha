import { notFound } from 'next/navigation'
import ProductCard from '@/components/product-card'
import { type Product } from '@/types/types'

interface Props {
  params: {
    id: string
  }
  searchParams: {
    prueba: string
  }
}

const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
    cache: 'no-cache',
    next: {
      tags: ['product']
    }
  })
  const data: Product = await res.json()
  return data
}

export default async function ProductPage ({ params: { id }, searchParams: { prueba } }: Props) {
  const product = await fetchProduct(id)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!product.id) return notFound()
  return (
    <div className='min-h-[calc(100vh-10rem)] h-full flex items-center justify-center'>
      <ProductCard product={product} />
    </div>
  )
}
