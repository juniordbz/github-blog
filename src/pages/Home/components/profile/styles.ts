import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  width: 100%;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: auto;
    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
`
export const Picture = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    border-radius: 4px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
      color: ${({ theme }) => theme.colors['base-title']};
      line-height: 1.3;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;
    line-height: 1;

    @media screen and (max-width: 768px) {
      line-height: normal;
    }

    li {
      display: flex;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }

  @media screen and (max-width: 768px) {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }

    ul {
      margin-top: 1rem;
    }
  }
`
