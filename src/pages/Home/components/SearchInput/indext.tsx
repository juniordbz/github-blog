import { useForm } from 'react-hook-form'
import { SearchInputContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handlesSearchPost(data: searchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handlesSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span> {postsLength} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
