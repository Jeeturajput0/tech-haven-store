import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navigate: [
    { label: "About Us", to: "/contact" },
    { label: "Return Policy", to: "/shop" },
    { label: "Terms & Conditions", to: "/shop" },
    { label: "Shipping & Returns", to: "/shop" },
    { label: "Contact Us", to: "/contact" },
    { label: "Blog", to: "/blog" },
  ],
  categories: [
    "Smart Watches", "Android TV", "Headphones & Earphones",
    "Computers & Laptops", "Cameras", "Accessories",
  ],
  brands: ["Samsung", "Apple", "Sony", "LG", "Bose", "Canon"],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      {/* Benefits bar */}
      <div className="border-b border-border/20">
        <div className="container-custom py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "Free Delivery", desc: "On orders over $50" },
            { title: "Save 15%", desc: "With credit card" },
            { title: "24/7 Support", desc: "Dedicated support" },
            { title: "Best Prices", desc: "Guaranteed savings" },
          ].map((b) => (
            <div key={b.title}>
              <p className="font-heading font-bold text-sm text-primary">{b.title}</p>
              <p className="text-xs text-surface-dark-foreground/60 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company info */}
        <div>
          <h3 className="text-xl font-heading mb-4">
            <span className="text-gradient">ELECTRO</span>STORE
          </h3>
          <div className="space-y-3 text-sm text-surface-dark-foreground/70">
            <p className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> 123 Electronics Ave, Tech City</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> support@electrostore.com</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (00) 1234 567891</p>
          </div>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2">
            {footerLinks.navigate.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-surface-dark-foreground/70 hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Categories</h4>
          <ul className="space-y-2">
            {footerLinks.categories.map((c) => (
              <li key={c}>
                <Link to="/shop" className="text-sm text-surface-dark-foreground/70 hover:text-primary transition-colors">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Popular Brands</h4>
          <ul className="space-y-2">
            {footerLinks.brands.map((b) => (
              <li key={b}>
                <span className="text-sm text-surface-dark-foreground/70">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/20">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-dark-foreground/50">
          <p>© 2026 ElectroStore. All rights reserved.</p>
          <div className="flex gap-4">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((p) => (
              <span key={p} className="px-3 py-1 rounded bg-surface-dark-foreground/10 text-surface-dark-foreground/60 text-xs font-medium">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
