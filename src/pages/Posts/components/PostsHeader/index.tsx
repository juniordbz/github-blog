import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostsHeaderContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../Home'
import { Spinner } from '../../../../components/spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostHeaderProps {
  isLoading: boolean
  postData: IPost
}

export function PostsHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostsHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="voltar"
              href="#"
            />
            <ExternalLink
              text="ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostsHeaderContainer>
  )
}
