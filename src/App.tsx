import './App.css'
import SearchBox from './components/SearchBox'

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Block Explorer</h1>
        <p>Ethereum Blockchain Explorer</p>
      </header>
      <main className="App-main">
        <SearchBox onSearch={handleSearch} />
      </main>
    </div>
  )
}

export default App