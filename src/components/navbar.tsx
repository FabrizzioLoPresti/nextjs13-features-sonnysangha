import Link from 'next/link'

// type Props = {}

const Navbar = () => {
  return <nav className="flex flex-row justify-between items-center mx-auto container py-4">
    <div>
      <Link href="/">Logo</Link>
    </div>

    <div className='flex flex-row gap-4 items-center'>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/search">Search</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
}

export default Navbar
