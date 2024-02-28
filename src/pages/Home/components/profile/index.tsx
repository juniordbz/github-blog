import { ProfileContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/spinner'
import { ProfileDesktop } from './components/ProfileDesktop'
import { ProfileMobile } from './components/ProfileMobile'

const userName = import.meta.env.VITE_GITHUB_USERNAME

export interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${userName}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <ProfileContainer>
        {isLoading ? (
          <Spinner />
        ) : screenWidth <= 768 ? (
          <ProfileMobile data={profileData} />
        ) : (
          <ProfileDesktop data={profileData} />
        )}
      </ProfileContainer>
    </>
  )
}
