import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar onSearch={setQuery} />
      <Hero />
      <ProductGrid query={query} />

      <footer className="mt-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500">
          <p>Built with love and motion. Not affiliated with Amazon.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
