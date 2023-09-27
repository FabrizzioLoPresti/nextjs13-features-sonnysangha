import ProductForm from '@/components/product-form'

// type Props = {}

export default function CreatePage () {
  return (
    <section className="mx-auto container flex flex-col items-center min-h-screen h-full">
      <h2 className="text-2xl font-bold">Create new Product</h2>
      <ProductForm />
    </section>
  )
}
