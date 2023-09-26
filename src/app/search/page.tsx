import ProductCard from '@/components/product-card'
import { type Product } from '@/types/types'

interface Props {
  searchParams: {
    name: string
  }
}

const fetchResults = async (name: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?name=${name}`,
      {
        cache: 'no-cache',
        next: {
          tags: ['products']
        }
      }
    )
    const data: Product[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error("Woops, couldn't fetch products")
  }
}

export default async function SearchPage ({ searchParams: { name } }: Props) {
  const products = await fetchResults(name)
  return (
    <section>
      <h3 className="text-2xl font-bold">Results for: {name ?? 'No search term'}</h3>
      <div className="flex flex-col gap-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
