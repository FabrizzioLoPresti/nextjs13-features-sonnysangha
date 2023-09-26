import type { Metadata } from 'next'
import SearchComponent from '@/components/search'

export const metadata: Metadata = {
  title: 'Search Page'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='mx-auto container flex space-x-4 divide-x-2 p-5'>
      <h3 className='text-2xl font-bold'>Search</h3>
      <div className='flex-1 pl-5 flex flex-col gap-y-4'>
        <SearchComponent />
        {children}
      </div>
    </main>
  )
}
