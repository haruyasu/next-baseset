import { useRouter } from 'next/router'

import { getAllPostIds, getPostData } from '../../lib/posts'

interface PostProps {
  post: {
    content: string
    created_at: string
    id: number
    title: string
  }
}

export default function PostData({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>詳細</h2>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.created_at}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: true
  }
}

interface GetPostProps {
  params: {
    id: number
  }
}

export async function getStaticProps({ params }: GetPostProps) {
  const post = await getPostData(params.id)
  return {
    props: {
      post
    },
    revalidate: 3
  }
}
