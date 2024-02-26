import { SearchInput } from './components/SearchInput/indext'
import { Profile } from './components/Profile'
import { PostsListContainer } from './styles'
import { CardsPost } from './components/Cards'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

interface IPost {
  title: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback(
    // valor inicial definido como string varia para não fazer busca e retornar undefined
    async (query: string = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
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
      <SearchInput />
      <PostsListContainer>
        <CardsPost />
        <CardsPost />
        <CardsPost />
        <CardsPost />
        <CardsPost />
        <CardsPost />
        <CardsPost />
        <CardsPost />
      </PostsListContainer>
    </>
  )
}
