import { Suspense } from 'react'
import ProductList from '@/components/product-list'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-4xl font-bold">Products</h2>
      <Suspense fallback={<div>Loading the products</div>}>
        <ProductList />
      </Suspense>

      <h2 className="text-4xl font-bold">Shopping Cart</h2>
      <Suspense fallback={<div>Loading the shopping cart</div>}>
        <ProductList />
      </Suspense>
    </main>
  )
}
