import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="gradient-primary">
      <div className="container-custom py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              Sign Up For Newsletter
            </h2>
            <p className="text-primary-foreground/80 text-sm mt-1">
              And receive $20 coupon on your next shopping
            </p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-l-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="px-6 py-3 rounded-r-lg bg-surface-dark text-surface-dark-foreground font-bold text-sm hover:bg-surface-dark/90 transition-colors flex items-center gap-2">
              <Send size={16} /> Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
