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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            {cart.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity} 
                removeItem={removeItem} 
              />
            ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between mb-4">
                <span className="font-medium">Discount:</span>
                <span className="font-medium">-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-xl mb-6">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout"
               className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out">
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
