import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 4.75rem;

  header {
    display: flex;
    align-content: center;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
    }
  }

  input {
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 8px;
    height: 3.125rem;
    padding: 0.75rem;
    transition: 0.4s;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      outline: none;
    }
  }
`
