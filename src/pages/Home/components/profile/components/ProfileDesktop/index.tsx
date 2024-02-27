import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../../../components/ExternalLink'
import { Picture, ProfileContent } from '../../styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ProfileData } from '../..'

interface ProfileDataProps {
  data: ProfileData
}

export function ProfileDesktop({ data }: ProfileDataProps) {
  return (
    <>
      <Picture src={data.avatar_url} />
      <ProfileContent>
        <header>
          <h1>{data.name}</h1>
          <ExternalLink text="GitHub" href={data.html_url} target="_blank" />
        </header>

        <p>{data.bio}</p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {data.login}
          </li>

          {data?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {data.company}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {data.followers} seguidores
          </li>
        </ul>
      </ProfileContent>
    </>
  )
}
