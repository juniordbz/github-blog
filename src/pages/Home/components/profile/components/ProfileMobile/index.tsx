import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../../../components/ExternalLink'
import { Picture, ProfileContent } from '../../styles'
import { ProfileData } from '../..'

interface ProfileDataProps {
  data: ProfileData
}

export function ProfileMobile({ data }: ProfileDataProps) {
  return (
    <>
      <div>
        <Picture src={data.avatar_url} />
        <ExternalLink text="GitHub" href={data.html_url} target="_blank" />
      </div>

      <ProfileContent>
        <header>
          <h1>{data.name}</h1>
        </header>

        <p>{data.bio}</p>

        <ul>
          {data?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {data.company}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {data.followers}
          </li>
        </ul>
      </ProfileContent>
    </>
  )
}
