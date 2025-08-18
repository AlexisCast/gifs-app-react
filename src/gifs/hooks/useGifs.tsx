import { useRef, useState } from 'react'
import type { Gif } from '../interfaces/gif-interface'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = (giphs: Gif[], terms: string[]) => {
  const [gifs, setGifs] = useState<Gif[]>([...giphs])
  const [previousTerms, setPreviousTerms] = useState<string[]>([...terms])

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async (term: string) => {
    console.log({ term })

    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }

    const gifs = await getGifsByQuery(term)

    setGifs(gifs)
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase()

    if (query === '') return

    // console.log({ query })

    if (!previousTerms.includes(query)) {
      // Add the new term to the beginning of the list
      // Keep only the last 8 terms
      setPreviousTerms((prev) => [query, ...prev].splice(0, 8))

      const gifs = await getGifsByQuery(query)

      // console.log({ gifs })

      setGifs(gifs)

      // Update cache
      gifsCache.current[query] = gifs
    }
  }
  return {
    //Properties
    gifs,
    previousTerms,

    //Methods
    handleSearch,
    handleTermClicked,
  }
}
