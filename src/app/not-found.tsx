import Link from 'next/link'

// type Props = {}

export default function NotFoundPage () {
  return (
    <section className="mx-auto container text-center">
      <h3 className='text-3xl font-bold'>404 Not Found</h3>
      <p>Sorry, we couldn&apos;t find that page.</p>
      <Link href="/">Go Home</Link>
    </section>
  )
}
