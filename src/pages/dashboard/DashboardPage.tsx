import DashboardLayout from "@/components/layout/DashboardLayout";
import ProductsPage from "@/components/dashboard/products/ProductsPage";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <ProductsPage />
    </DashboardLayout>
  );
};
