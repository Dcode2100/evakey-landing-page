'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Cart = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const router = useRouter();

  useEffect(() => {
    // Add console log to verify cart items
    console.log('Cart Items being saved:', cartItems);
    
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      // Create and dispatch a custom event
      const event = new CustomEvent('cartUpdated', { detail: cartItems });
      window.dispatchEvent(event);
    }
  }, [cartItems]);

  const handleQuotation = () => { 
    router.push('/#contact');
  }

  const itemCount = cartItems.length;

  return (
    <div className={`fixed right-0 top-0 h-full w-[400px] bg-gray-900 text-white shadow-2xl transform transition-all duration-300 ease-in-out z-[100] ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      
      {/* Cart Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800">
        <h2 className="text-2xl font-bold">Cart ({itemCount})</h2>
        <button 
          onClick={onClose} 
          className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-6 space-y-4 overflow-y-auto h-[calc(100vh-180px)]">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <svg className="w-16 h-16 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="text-gray-400 text-lg">Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-200 animate-fadeIn"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.title}</h3>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-800 border-t border-gray-700">
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Close
          </button>
          <button
            onClick={handleQuotation}
            className="flex-1 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200">
            Quotation
          </button>
        </div>
      </div>
    </div>
  );
};


export default Cart; 