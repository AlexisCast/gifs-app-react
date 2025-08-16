import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props {
  placeholder: string
  onQuery: (query: string) => void
}

export const SearchBar = ({ placeholder = 'Search...', onQuery }: Props) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onQuery(query)
    }, 1000) // 1 second delay

    return () => {
      console.log('SearchBar unmounted, cleaning up...')
      clearTimeout(timeOutId)
    }
  }, [query, onQuery])

  const handleSearch = () => {
    onQuery(query)
    // setQuery('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
