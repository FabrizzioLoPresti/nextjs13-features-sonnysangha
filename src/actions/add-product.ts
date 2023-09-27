'use server'

import { type Product } from '@/types/types'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export const addProduct = async (formData: FormData) => {
  try {
    const name = formData.get('name')?.toString()
    const description = formData.get('description')?.toString()
    const price = formData.get('price')?.toString()

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!name || !description || !price) return

    const product: Product = {
      name,
      description,
      price
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const data = await response.json()

    revalidateTag('products')
    redirect('/')
    return data
  } catch (error) {
    console.error(error)
  }
}
