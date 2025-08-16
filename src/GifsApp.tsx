import { useState } from 'react'
import { GifList } from './gifs/GifList'
import { PreviousSearches } from './gifs/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  const handleSearch = (query: string) => {
    query = query.trim().toLowerCase()

    if (query === '') return

    console.log({ query })

    if (!previousTerms.includes(query)) {
      // Add the new term to the beginning of the list
      // Keep only the last 8 terms
      setPreviousTerms((prev) => [query, ...prev].splice(0, 8))
    }
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Gif Finder" description="Discover and share the perfect Gif" />

      {/* Search */}
      <SearchBar placeholder="Search for Gifs..." onQuery={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
