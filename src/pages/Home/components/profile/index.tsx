import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Picture, ProfileContainer, ProfileContent } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <>
      <ProfileContainer>
        <Picture src="https://github.com/juniordbz.png" />
        <ProfileContent>
          <header>
            <h1>Francisco Bezerra</h1>
            <ExternalLink text="GitHub" href="#" />
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              Juniordbz
            </li>

            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Storypet
            </li>

            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              10 seguidores
            </li>
          </ul>
        </ProfileContent>
      </ProfileContainer>
    </>
  )
}
