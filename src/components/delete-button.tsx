'use client'

import { useTransition } from 'react'
import { deleteProduct } from '@/actions/delete-product'
import { useRouter } from 'next/navigation'

interface Props {
  id: string
}

const DeleteButton = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  return (
    <button className="bg-slate-500 px-4 py-2 rounded-lg w-fit hover:bg-slate-900 transition-colors ease-in-out duration-300 disabled:opacity-40 disabled:pointer-events-none"
      disabled={isPending}
      onClick={async () => {
        startTransition(async () => await deleteProduct(id))
        router.push('/products')
      }}
    >
      {isPending ? 'Deleting Product...' : 'Delete Product'}
    </button>
  )
}

export default DeleteButton
