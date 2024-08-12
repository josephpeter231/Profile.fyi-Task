import { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from './_app';
import Link from 'next/link';

export default function Cart() {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0; 
  const total = subtotal - discount;

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
            {cart.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity} 
                removeItem={removeItem} 
              />
            ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                <span className="font-medium">Discount:</span>
                <span className="font-medium">-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-lg sm:text-xl mb-6">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link 
              href="/checkout"
              className="block bg-blue-600 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out text-center">
              Proceed to Checkout
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-6 text-center text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}
