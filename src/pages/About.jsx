import { motion } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Headphones, ShieldCheck, Sparkles, Star, Truck, Zap, } from "lucide-react";
import { Link } from "react-router-dom";
const highlights = [
    {
        title: "Trusted Products",
        description: "We curate reliable electronics from brands customers already know and use.",
        icon: ShieldCheck,
    },
    {
        title: "Fast Delivery",
        description: "Orders are processed quickly with careful packaging and live shipment tracking.",
        icon: Truck,
    },
    {
        title: "Real Support",
        description: "Our team helps with product questions, orders, and after-sales support.",
        icon: Headphones,
    },
    {
        title: "Fair Pricing",
        description: "We keep pricing competitive across daily essentials and premium devices.",
        icon: BadgeDollarSign,
    },
];
const stats = [
    { value: "25K+", label: "Orders fulfilled" },
    { value: "120+", label: "Products curated" },
    { value: "4.8/5", label: "Average rating" },
    { value: "24/7", label: "Support response window" },
];
const principles = [
    {
        title: "Curated, not cluttered",
        description: "We keep the catalog focused so customers spend less time comparing and more time buying the right device.",
        icon: Sparkles,
    },
    {
        title: "Performance-first selection",
        description: "Every product line is reviewed for quality, durability, and practical day-to-day value.",
        icon: Zap,
    },
    {
        title: "Customer confidence",
        description: "From shipping updates to support follow-up, every step is designed to feel clear and dependable.",
        icon: Star,
    },
];
const milestones = [
    {
        title: "Product discovery",
        description: "We identify devices that solve common needs across work, entertainment, travel, and home setups.",
    },
    {
        title: "Quality screening",
        description: "Products are filtered for build quality, brand reliability, and customer satisfaction signals.",
    },
    {
        title: "Fast fulfillment",
        description: "Orders are packed quickly and sent with tracking so customers stay informed after checkout.",
    },
    {
        title: "Ongoing support",
        description: "We stay available for pre-sale questions, delivery issues, and post-purchase guidance.",
    },
];
export default function About() {
    return (<div className="overflow-hidden">
      <section className="relative border-b border-border bg-secondary/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(45_100%_51%/.16),transparent_32%),radial-gradient(circle_at_bottom_right,hsl(200_80%_50%/.14),transparent_28%)]"/>
        <div className="container-custom relative py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                About ElectroStore
              </p>
              <h1 className="mt-4 text-4xl font-heading font-bold leading-tight text-foreground md:text-6xl">
                Modern electronics retail built around speed, clarity, and trust.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                ElectroStore is an online destination for practical tech, premium
                gadgets, and everyday accessories. We combine a curated catalog,
                straightforward pricing, and responsive support so shopping feels
                fast and predictable instead of overwhelming.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
                  Explore Products
                  <ArrowRight size={16}/>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  Talk to Support
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-card rounded-[2rem] p-6 md:p-8">
              <div className="rounded-[1.5rem] gradient-dark p-6 text-surface-dark-foreground">
                <p className="text-xs uppercase tracking-[0.3em] text-surface-dark-foreground/60">
                  Store Snapshot
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (<div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-2xl font-heading font-bold text-primary md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-surface-dark-foreground/70">
                        {stat.label}
                      </p>
                    </div>))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-custom py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon }, index) => (<motion.div key={title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="glass-card-hover rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon size={22} className="text-primary"/>
              </div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </motion.div>))}
        </div>
      </section>

      <section className="container-custom pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-border bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground">
              We built the store around how people actually shop for tech.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              Most electronics sites overload users with endless options and weak
              product guidance. ElectroStore takes the opposite approach: fewer,
              stronger choices, cleaner product presentation, and support that
              helps customers move forward quickly.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              The goal is simple: make buying headphones, laptops, smart devices,
              and accessories feel as polished as using them. That means useful
              recommendations, reliable fulfillment, and a storefront that
              respects the customer’s time.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }, index) => (<motion.div key={title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.08 }} className="rounded-[1.75rem] border border-border bg-secondary/40 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={20} className="text-accent"/>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </motion.div>))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container-custom py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              A retail flow designed to keep quality high and friction low.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((item, index) => (<motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="relative rounded-2xl border border-border bg-card p-6">
                <div className="text-sm font-bold text-primary">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>))}
          </div>
        </div>
      </section>

      <section className="container-custom py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] gradient-dark p-8 text-surface-dark-foreground md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Ready to Shop
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
                Discover electronics that look better, work harder, and arrive faster.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-surface-dark-foreground/70 md:text-base">
                Browse the latest devices, compare essentials, or contact the team
                if you want help choosing the right product.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/shop" className="inline-flex items-center justify-center rounded-xl gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground">
                Shop Now
              </Link>
              <Link to="/blog" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-surface-dark-foreground transition-colors hover:bg-white/10">
                Read the Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>);
}
