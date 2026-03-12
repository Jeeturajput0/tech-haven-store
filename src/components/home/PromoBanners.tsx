import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import promoMobile from "@/assets/promo-mobile.jpg";
import promoCamera from "@/assets/promo-camera.jpg";
import promoWatches from "@/assets/promo-watches.jpg";

const banners = [
  { image: promoMobile, title: "Smart Mobile", subtitle: "15% OFF", gradient: "from-blue-900/90 to-blue-600/60" },
  { image: promoCamera, title: "Camera Accessories", subtitle: "Big Discounts", gradient: "from-red-900/90 to-orange-600/60" },
];

export function PromoBannerDual() {
  return (
    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to="/shop" className="group relative block rounded-xl overflow-hidden h-52 md:h-64">
              <img src={b.image} alt={b.title} className="absolute inset-0 w-full h-full object-cover image-zoom" />
              <div className={`absolute inset-0 bg-gradient-to-r ${b.gradient}`} />
              <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                <span className="text-surface-dark-foreground/80 text-sm font-medium">{b.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-surface-dark-foreground mt-1">{b.title}</h3>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-primary group-hover:underline">
                  Shop Now →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function PromoBannerWide() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/shop" className="group relative block rounded-xl overflow-hidden h-48 md:h-64">
            <img src={promoWatches} alt="Smart Watches" className="absolute inset-0 w-full h-full object-cover image-zoom" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full max-w-lg">
              <span className="text-primary text-sm font-bold">Save 35%–45% OFF</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark-foreground mt-2">Smart Watch Collection</h3>
              <span className="mt-4 inline-flex items-center text-sm font-bold text-primary group-hover:underline">
                Shop Now →
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
