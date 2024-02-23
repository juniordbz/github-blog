import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../components/ExternalLink'
import { PostsHeaderContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export function PostsHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostsHeaderContainer>
      <header>
        <ExternalLink
          onClick={goBack}
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="voltar"
          href="#"
        />
        <ExternalLink text="ver no Github" href="#" target="_blank" />
      </header>
      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          Juniordbz
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostsHeaderContainer>
  )
}
