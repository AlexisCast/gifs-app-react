import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Gif Finder</h1>
        <p>Discover and share the perfect Gif</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Search for Gifs..." />
        <button>Search</button>
      </div>

      <div className="previous-searches">
        <h2>Previous Searches</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitaman</li>
          <li>Elden Ring</li>
        </ul>
      </div>

      {/* Previous Searches */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
