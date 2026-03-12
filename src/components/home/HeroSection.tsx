import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark min-h-[500px] md:min-h-[600px] flex items-center">
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-transparent" />
      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-sm font-bold mb-6">
            Clearance Sale
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-surface-dark-foreground leading-tight mb-4">
            Save <span className="text-gradient">35%–55%</span><br />
            On New Arrivals
          </h2>
          <p className="text-surface-dark-foreground/70 text-lg mb-8 max-w-md">
            Discover premium electronics at unbeatable prices. Limited time offer on top brands.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
