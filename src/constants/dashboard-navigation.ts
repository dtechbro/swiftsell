import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

export const DASHBOARD_NAVIGATION = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    active: false,
    disabled: true,
  },
  {
    icon: Package,
    title: "Products",
    active: true,
    disabled: false,
  },
  {
    icon: ShoppingCart,
    title: "Orders",
    active: false,
    disabled: true,
  },
  {
    icon: Users,
    title: "Customers",
    active: false,
    disabled: true,
  },
  {
    icon: BarChart3,
    title: "Analytics",
    active: false,
    disabled: true,
  },
  {
    icon: Settings,
    title: "Settings",
    active: false,
    disabled: true,
  },
];
