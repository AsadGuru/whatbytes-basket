import { useRouter } from 'next/router';
import data from '../../data/products.json';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = data.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-yellow-400 mb-2">{'★'.repeat(product.rating)}</div>
          <p className="text-xl font-semibold text-blue-800 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description || 'No description provided.'}</p>
          <p className="text-sm text-gray-700 mb-4"><b>Category:</b> {product.category}</p>

          <button
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;