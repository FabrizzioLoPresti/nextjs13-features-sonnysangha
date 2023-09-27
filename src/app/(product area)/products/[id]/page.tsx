import Link from 'next/link'
import { notFound } from 'next/navigation'
import { type Product } from '@/types/types'
import DeleteButton from '@/components/delete-button'

interface Props {
  params: {
    id: string
  }
  searchParams: {
    prueba: string
  }
}

const fetchProduct = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`,
    {
      cache: 'no-cache',
      next: {
        tags: ['product']
      }
    }
  )
  const data: Product = await res.json()
  return data
}

export default async function ProductPage ({
  params: { id },
  searchParams: { prueba }
}: Props) {
  const product = await fetchProduct(id)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!product.id) return notFound()
  return (
    // min-h-[calc(100vh-10rem)] h-full flex items-center justify-center
    <div className="bg-slate-800 p-4 rounded-md flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="flex flex-row gap-x-4 justify-end">
        <Link
          href={`/products/edit/${product.id}`}
          className="bg-slate-500 px-4 py-2 rounded-lg w-fit hover:bg-slate-900 transition-colors ease-in-out duration-300"
        >
          Edit Product
        </Link>
        <DeleteButton id={product.id} />
      </div>
    </div>
  )
}
