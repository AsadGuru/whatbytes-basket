import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { useRouter } from "next/router";


const Home = () => {
  const { query } = useRouter();
  const category = query.category as string || 'all';
  const price = Number((query.price as string)?.split('-')[1]) || 1000;
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex flex-col md:flex-row p4 gap-4 flex-1">
        <Sidebar />
        <div className="flex-1">
          <h1 className="text-2xl text-black font-semibold mb-4">Product Listing</h1>
          <ProductGrid category={category} price={price} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;