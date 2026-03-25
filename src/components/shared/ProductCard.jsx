import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartStore } from "@/data/cartStore";
import { toast } from "sonner";
export default function ProductCard({ product, index = 0 }) {
    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!product.inStock)
            return;
        cartStore.addToCart(product);
        toast.success(`${product.name} added to cart`);
    };
    return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.4 }}>
      <Link to={`/product/${product.id}`} className="group block glass-card-hover rounded-xl overflow-hidden">
        <div className="relative overflow-hidden bg-secondary/30 aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 image-zoom"/>
          {product.badge && (<span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold gradient-primary text-primary-foreground">
              {product.badge}
            </span>)}
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground">
            <Heart size={14}/>
          </button>
          {!product.inStock && (<div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="font-heading font-bold text-muted-foreground">Sold Out</span>
            </div>)}
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-heading font-semibold text-sm text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}/>))}
            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && (<span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>)}
            </div>
            <button onClick={handleAddToCart} disabled={!product.inStock} className="w-9 h-9 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-40">
              <ShoppingCart size={14}/>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>);
}
