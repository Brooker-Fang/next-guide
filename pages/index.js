import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="list">
        <span>go list</span>
      </Link>
      <div className="global-wrap"></div>
    </div>
  )
}
