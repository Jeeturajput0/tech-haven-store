import { products } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { motion } from "framer-motion";

interface Props {
  title: string;
  filter?: (p: typeof products[0]) => boolean;
  limit?: number;
}

export default function ProductSection({ title, filter, limit = 5 }: Props) {
  const filtered = filter ? products.filter(filter) : products;
  const displayed = filtered.slice(0, limit);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{title}</h2>
          <div className="h-px flex-1 mx-6 bg-border hidden md:block" />
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {displayed.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
