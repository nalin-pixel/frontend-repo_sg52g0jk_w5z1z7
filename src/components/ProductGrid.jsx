import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group rounded-xl border border-black/5 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {p.image && (
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
        )}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-gray-800 group-hover:text-blue-600 transition">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">${p.price.toFixed(2)}</div>
          <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm text-white shadow hover:shadow-md">Add</button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductGrid({ query }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (query) params.set('q', query)
        const res = await fetch(`${backend}/api/products?${params.toString()}`, { signal: controller.signal })
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [query])

  return (
    <section id="trending" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Trending products</h2>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-56 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
          ))}
        </div>
      ) : (
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </AnimatePresence>
      )}
    </section>
  )
}
