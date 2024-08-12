import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../pages/_app';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-3xl font-extrabold tracking-wide">
          ShopNow
        </Link>
        <div className="relative">
          <Link href="/cart" className="text-white flex items-center space-x-2 group">
            <ShoppingCartIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200 ease-in-out" />
            <span className="text-xl font-semibold">Cart</span>
            <span className="bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
