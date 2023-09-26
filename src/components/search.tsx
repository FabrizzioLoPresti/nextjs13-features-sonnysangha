'use client'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

// interface Props {}

const SearchComponent = () => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search?name=${search}`)
  }

  return (
    <form onSubmit={handleSearch} className='flex flex-row gap-x-4 items-center'>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter your seach term..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        className='text-black px-4 py-2'
      />
      <button type="submit" className="bg-slate-600 text-white font-bold py-2 px-4 rounded-lg">
        Search
      </button>
    </form>
  )
}

export default SearchComponent
