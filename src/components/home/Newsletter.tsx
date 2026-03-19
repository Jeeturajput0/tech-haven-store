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
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary-foreground md:text-3xl">
              Sign Up For Newsletter
            </h2>
            <p className="mt-1 text-sm text-primary-foreground/80">
              And receive $20 coupon on your next shopping
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col sm:flex-row md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-t-lg bg-background px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none sm:rounded-l-lg sm:rounded-tr-none"
            />
            <button className="flex items-center justify-center gap-2 rounded-b-lg bg-surface-dark px-6 py-3 text-sm font-bold text-surface-dark-foreground transition-colors hover:bg-surface-dark/90 sm:rounded-b-none sm:rounded-r-lg">
              <Send size={16} /> Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
