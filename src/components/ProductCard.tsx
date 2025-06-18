import Image from 'next/image';
import { useCart } from './CartContext';
import Link from 'next/link';

type Props = {
  id: number;
  rating: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, title, price, image, rating }: Props) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      quantity: 1,
    })
  }

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link href={`/product/${id}`}>
        <Image
          src={image || '/placeholder.png'}
          alt={title}
          width={180}
          height={180}
          style={{
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
            borderRadius: '12px',
            background: '#f5f5f5',
          }}
        />
        <h3 className="text-lg text-black font-semibold mt-2">{title}</h3>
      </Link>
      <p className="text-blue-900 font-bold">${price}</p>
      <div className="text-yellow-400">{'★'.repeat(rating)}</div>
      <button
        onClick= {handleAddToCart}
        className="mt-2 w-full bg-blue-700 text-white py-1 px-3 rounded hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;