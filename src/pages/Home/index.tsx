import { SearchInput } from './components/SearchInput/indext'
import { Profile } from './components/Profile'
import { PostsListContainer } from './styles'
import { CardsPost } from './components/Cards'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner/index'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  id: number
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    // valor inicial definido como string varia para não fazer busca e retornar undefined
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <CardsPost key={post.id} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  )
}
