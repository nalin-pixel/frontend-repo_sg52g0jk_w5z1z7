import { useState } from 'react'
import { ShoppingCart, Menu, Search, User, ChevronDown } from 'lucide-react'

export default function Navbar({ onSearch, cartCount = 0 }) {
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          <button className="p-2 rounded-md hover:bg-black/5">
            <Menu className="h-5 w-5" />
          </button>
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Amazone</span>
          </a>

          <form onSubmit={submit} className="hidden md:flex flex-1 items-center">
            <div className="relative w-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands and more"
                className="w-full rounded-full border border-black/10 bg-white/70 px-4 py-2 pl-11 pr-12 outline-none ring-0 focus:border-blue-500 focus:bg-white transition"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-white text-sm shadow hover:shadow-md transition"
              >
                Search
              </button>
            </div>
          </form>

          <nav className="ml-auto flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-md hover:bg-black/5">
              <span>All</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-md hover:bg-black/5">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-md hover:bg-black/5">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 h-5 min-w-[1.25rem] rounded-full bg-blue-600 text-white text-xs grid place-items-center px-1">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        <div className="md:hidden pb-3">
          <form onSubmit={submit}>
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands and more"
                className="w-full rounded-full border border-black/10 bg-white/70 px-4 py-2 pl-11 pr-12 outline-none ring-0 focus:border-blue-500 focus:bg-white transition"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-white text-sm shadow"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
