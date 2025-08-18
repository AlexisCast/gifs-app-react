import { GifList } from './gifs/GifList'
import { PreviousSearches } from './gifs/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { mockGifs } from './mock-data/gifs.mock'

import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs([...mockGifs], [])

  return (
    <>
      {/* Header */}
      <CustomHeader title="Gif Finder" description="Discover and share the perfect Gif" />

      {/* Search */}
      <SearchBar placeholder="Search for Gifs..." onQuery={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />

      {/* <span> {JSON.stringify(gifs)}</span> */}
    </>
  )
}
