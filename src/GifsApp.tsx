import { GifList } from './gifs/GifList'
import { PreviousSearches } from './gifs/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Gif Finder" description="Discover and share the perfect Gif" />

      {/* Search */}
      <SearchBar placeholder="Search for Gifs..." />

      {/* Previous Searches */}
      <PreviousSearches searches={['Goku', 'Dragon Ball Z']} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
