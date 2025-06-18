import Link from "next/link";
import { useCart } from "./CartContext";
import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-3xl font-semibold">
        Logo
      </Link>

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for Products"
          className="pr-2 px-4 py-2 rounded text-gray-200"
        />
        <span className="absolute right-2">
          <Search size={24} />
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/cart" className="relative flex items-center space-x-3">
          <span className="text-xl font-medium">Cart</span>
          <span className="relative">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </span>
        </Link>
        <div className="w-8 h-8 rounded-full bg-white" />
      </div>
    </header>
  );
};

export default Header;
