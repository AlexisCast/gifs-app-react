import { useState } from 'react'
import { GifList } from './gifs/GifList'
import { PreviousSearches } from './gifs/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
  const [previousTerms] = useState(['dragon ball z'])

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  const handleSearch = (query: string) => {
    console.log({ query })
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
