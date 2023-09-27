'use server'

import { revalidateTag } from 'next/cache'

export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
      method: 'DELETE'
    })

    const data = await response.json()

    revalidateTag('products')
    return data
  } catch (error) {
    console.error(error)
  }
}
