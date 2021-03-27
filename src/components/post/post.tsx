import Link from 'next/link'
import { ReactElement } from 'react'

export default function Post({ post }: any): ReactElement {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">post</div>
    </Link>
  )
}
