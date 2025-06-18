import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/components/CartContext';

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Thank You for Your Purchase!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully. A confirmation email will be sent to you shortly.
        </p>
        <Link href="/">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;