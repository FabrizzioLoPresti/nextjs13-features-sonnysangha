// import ProductList from '@/components/product-list'
// import { type Product } from '@/types/types'

// type Props = {}

// const fetchProducts = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
//     cache: 'no-cache',
//     next: {
//       tags: ['products']
//     }
//   })
//   const data: Product[] = await res.json()
//   return data
// }

export default async function ProductsPage () {
  // const products = await fetchProducts()
  return (
    <>
      <h1 className='text-center text-3xl font-bold'>Product Information</h1>
      {/* <ProductList products={products} /> */}
    </>
  )
}
