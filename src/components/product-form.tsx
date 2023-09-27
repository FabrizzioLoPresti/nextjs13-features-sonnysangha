'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
// import { experimental_useFormState as useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { addProduct } from '@/actions/add-product'

// type Props = {}

// const initialState: Product = {
//   name: '',
//   description: '',
//   price: ''
// }

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="bg-slate-500 px-4 py-2 rounded-md w-fit self-center disabled:opacity-40 disabled:pointer-events-none"
      disabled={pending}
    >
      Create
    </button>
  )
}

const ProductForm = () => {
  // const [state, formAction] = useFormState(addProduct, initialState)
  const router = useRouter()
  return (
    <form
      action={async (formData: FormData) => {
        await addProduct(formData)
        router.push('/products')
      }}
      className="flex flex-col gap-4 w-1/2 mx-auto my-8"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="text-black p-2"
        placeholder="Name of the product"
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows={6}
        className="text-black p-2 resize-none"
        placeholder="Description of the product"
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        min={0}
        className="text-black p-2"
        placeholder="Price of the product"
      />

      <SubmitButton />
    </form>
  )
}

export default ProductForm
