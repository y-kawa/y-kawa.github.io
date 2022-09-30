import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/linkSample">
        <h2><a>link Sample Page</a></h2>
      </Link>
    </>
  )
}

export default Index
