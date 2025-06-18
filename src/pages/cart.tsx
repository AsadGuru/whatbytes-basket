import { useCart } from '@/components/CartContext';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push('/checkout-success');
  };


  if (cart.length === 0) return <p className="p-6 text-center">🛒 Your cart is empty.</p>;

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-blue-900 p-4 rounded shadow">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-white font-bold">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-lg">−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-lg">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600"><Trash2 size={24} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 p-4 rounded shadow h-fit">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="mb-2">Total: <b>${total.toFixed(2)}</b></p>
          <button onClick={handleCheckout} className="w-full bg-green-600 text-black py-2 rounded mt-4 hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;