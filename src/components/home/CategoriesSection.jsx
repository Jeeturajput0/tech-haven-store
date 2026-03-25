import { motion } from "framer-motion";
import { Watch, Headphones, Laptop, Camera, Smartphone, Cable } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
const iconMap = {
    Watch, Headphones, Laptop, Camera, Smartphone, Cable,
};
export default function CategoriesSection() {
    return (<section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
          Shop Categories
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Cable;
            return (<motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to="/shop" className="group glass-card-hover rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors"/>
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-foreground">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.count} Products</p>
                </Link>
              </motion.div>);
        })}
        </div>
      </div>
    </section>);
}
