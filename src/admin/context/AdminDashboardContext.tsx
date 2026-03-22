import type { ComponentProps, ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  initialBlogs,
  initialCoupons,
  initialCustomers,
  initialMessages,
  initialOrders,
  initialProducts,
  initialReviews,
} from "@/admin/data/mockData";

type Product = (typeof initialProducts)[number];
type Order = (typeof initialOrders)[number];
type Review = (typeof initialReviews)[number];
type Coupon = (typeof initialCoupons)[number];
type MessageThread = (typeof initialMessages)[number];

type NewProduct = Omit<Product, "id" | "sku">;

type AdminDashboardContextValue = {
  products: Product[];
  orders: Order[];
  customers: typeof initialCustomers;
  reviews: Review[];
  blogs: typeof initialBlogs;
  coupons: Coupon[];
  messages: MessageThread[];
  selectedThreadId: number;
  gridView: boolean;
  setGridView: (value: boolean) => void;
  addProduct: (product: NewProduct) => void;
  deleteProduct: (id: number) => void;
  updateOrderDelivery: (id: string, delivery: string) => void;
  approveReview: (id: number) => void;
  deleteReview: (id: number) => void;
  toggleCoupon: (id: number) => void;
  selectThread: (id: number) => void;
  sendMessage: (text: string) => void;
};

const AdminDashboardContext = createContext<AdminDashboardContextValue | null>(null);

export function AdminDashboardProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [reviews, setReviews] = useState(initialReviews);
  const [coupons, setCoupons] = useState(initialCoupons);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedThreadId, setSelectedThreadId] = useState(initialMessages[0]?.id ?? 0);
  const [gridView, setGridView] = useState(true);

  const addProduct = (product: NewProduct) => {
    const nextId = Math.max(...products.map((item) => item.id), 0) + 1;
    const sku = `TH-${product.category.slice(0, 3).toUpperCase()}-${String(7000 + nextId)}`;
    setProducts((current) => [{ ...product, id: nextId, sku }, ...current]);
    toast.success(`${product.name} added to inventory`);
  };

  const deleteProduct = (id: number) => {
    setProducts((current) => current.filter((item) => item.id !== id));
    toast.success("Product removed");
  };

  const updateOrderDelivery = (id: string, delivery: string) => {
    setOrders((current) => current.map((item) => (item.id === id ? { ...item, delivery } : item)));
    toast.success(`Delivery status updated to ${delivery}`);
  };

  const approveReview = (id: number) => {
    setReviews((current) => current.map((item) => (item.id === id ? { ...item, status: "Approved" } : item)));
    toast.success("Review approved");
  };

  const deleteReview = (id: number) => {
    setReviews((current) => current.filter((item) => item.id !== id));
    toast.success("Review deleted");
  };

  const toggleCoupon = (id: number) => {
    setCoupons((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, enabled: !item.enabled, status: item.enabled ? "Paused" : "Active" }
          : item,
      ),
    );
  };

  const selectThread = (id: number) => setSelectedThreadId(id);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((current) =>
      current.map((thread) =>
        thread.id === selectedThreadId
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  id: thread.messages.length + 1,
                  sender: "admin",
                  text,
                  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                },
              ],
            }
          : thread,
      ),
    );
  };

  const value = useMemo(
    () => ({
      products,
      orders,
      customers: initialCustomers,
      reviews,
      blogs: initialBlogs,
      coupons,
      messages,
      selectedThreadId,
      gridView,
      setGridView,
      addProduct,
      deleteProduct,
      updateOrderDelivery,
      approveReview,
      deleteReview,
      toggleCoupon,
      selectThread,
      sendMessage,
    }),
    [products, orders, reviews, coupons, messages, selectedThreadId, gridView],
  );

  return <AdminDashboardContext.Provider value={value}>{children}</AdminDashboardContext.Provider>;
}

export function useAdminDashboard() {
  const context = useContext(AdminDashboardContext);

  if (!context) {
    throw new Error("useAdminDashboard must be used within AdminDashboardProvider");
  }

  return context;
}
