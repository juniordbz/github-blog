import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardsContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 16.25rem;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  border-radius: 8px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-border']};
  }
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes['title-title-m']};
      color: ${({ theme }) => theme.colors['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
