import type { Metadata } from 'next'
import ProductList from '@/components/product-list'

export const metadata: Metadata = {
  title: 'List of Products'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='mx-auto container flex flex-row gap-x-4'>
      <div>
        <ProductList />
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </main>
  )
}
