import { SearchInput } from './components/SearchInput/indext'
import { Profile } from './components/Profile'
import { PostsListContainer } from './styles'
import { CardsPost } from './components/Cards'

export function Home() {
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
