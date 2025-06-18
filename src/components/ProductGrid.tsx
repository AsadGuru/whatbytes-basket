import ProductCard from './ProductCard';
import data from '../data/products.json';

type Props = {
  category?: string;
  price?: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  quantity?: number;
};

const ProductGrid = ({ category = 'all', price = 1000 }: Props) => {
  const filtered = (data as Product[]).filter(p => {
    const priceMatch = p.price <= price;
    const categoryMatch = category === 'all' || p.category === category;
    return priceMatch && categoryMatch;
  });

  if (filtered.length === 0) return <p>No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          price={p.price}
          image={p.image}
          rating={p.rating}
          quantity={p.quantity ?? 1}
        />
      ))}
    </div>
  );
};

export default ProductGrid;