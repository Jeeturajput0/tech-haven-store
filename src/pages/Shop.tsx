import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("default");

  let filtered = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container-custom py-10">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
        Shop
      </motion.h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="glass-card rounded-xl p-5 sticky top-28">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
              <SlidersHorizontal size={16} /> Categories
            </h3>
            <ul className="space-y-1">
              <li>
                <button onClick={() => setSelectedCategory(null)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
                  All Products
                </button>
              </li>
              {categories.map(c => (
                <li key={c.name}>
                  <button onClick={() => setSelectedCategory(c.name)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === c.name ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
                    {c.name} <span className="text-xs">({c.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-foreground"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
