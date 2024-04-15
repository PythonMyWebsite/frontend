import Header from "@/components/layout/Header";
import ProductTable from "./components/ProductTable";
import Footer from "@/components/layout/Footer";
import PopularProducts from "@/components/PopularPRoducts";

function page() {
  return (
    <div>
      <Header />
      <div className="mx-52 mt-10">
        <ProductTable />
        <div className="mt-4"></div>
        <PopularProducts />
        <div className="mb-20"></div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
