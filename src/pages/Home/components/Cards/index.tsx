import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { CardsContainer } from './styles'

interface PostProps {
  post: IPost
}

export function CardsPost({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <CardsContainer to={`/post/${post.id}`}>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>
      <p>{post.body}</p>
    </CardsContainer>
  )
}
