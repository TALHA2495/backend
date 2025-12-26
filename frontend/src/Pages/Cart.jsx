import React from 'react';
import { ArrowLeft, Lock, MessageCircle, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = [
        { id: 1, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", price: 78.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=100" },
        { id: 2, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Best factory LLC", price: 39.00, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=100" },
        { id: 3, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", price: 170.50, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=100" },
    ];

    const savedForLater = [
        { name: "GoPro HERO6 4K Action Camera - Black", price: "$99.50", image: "https://images.unsplash.com/photo-1551028919-ac66e624eca1?auto=format&fit=crop&q=80&w=150" },
        { name: "GoPro HERO6 4K Action Camera - Black", price: "$99.50", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=150" },
        { name: "GoPro HERO6 4K Action Camera - Black", price: "$99.50", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=150" },
        { name: "GoPro HERO6 4K Action Camera - Black", price: "$99.50", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=150" },
    ];

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">My cart (3)</h2>
                 
                 <div className="flex flex-col lg:flex-row gap-6">
                     {/* Cart Items Column */}
                     <div className="flex-1">
                         <div className="bg-white border border-gray-200 rounded-md shadow-sm mb-6">
                             {cartItems.map((item, idx) => (
                                 <div key={item.id} className={`p-4 flex flex-col md:flex-row gap-4 ${idx !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                     <div className="w-[100px] h-[100px] border border-gray-200 rounded bg-gray-50 flex items-center justify-center shrink-0">
                                         <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                                     </div>
                                     <div className="flex-1">
                                         <div className="flex justify-between mb-1">
                                             <h3 className="font-medium text-gray-900">{item.name}</h3>
                                             <div className="font-bold text-gray-900">${item.price.toFixed(2)}</div>
                                         </div>
                                         <p className="text-sm text-gray-500 mb-1">
                                             Size: {item.size}, Color: {item.color}, Material: {item.material}
                                         </p>
                                         <p className="text-sm text-gray-400 mb-3">Seller: {item.seller}</p>
                                         
                                         <div className="flex justify-between items-center">
                                             <div className="flex gap-2">
                                                 <button className="px-3 py-1 border border-gray-300 rounded text-red-500 text-sm font-medium hover:bg-gray-50 uppercase">Remove</button>
                                                 <button className="px-3 py-1 border border-gray-300 rounded text-blue-600 text-sm font-medium hover:bg-gray-50 uppercase">Save for later</button>
                                             </div>
                                             <div className="flex items-center gap-2">
                                                 <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none bg-white">
                                                     <option>Qty: 1</option>
                                                     <option>Qty: 2</option>
                                                     <option>Qty: 3</option>
                                                     <option>Qty: 9</option>
                                                 </select>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             ))}
                             
                             <div className="p-4 flex justify-between items-center border-t border-gray-200">
                                  <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 flex items-center gap-2">
                                      <ArrowLeft className="w-4 h-4" />
                                      Back to shop
                                  </Link>
                                  <button className="bg-white border border-gray-300 text-blue-600 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50">
                                      Remove all
                                  </button>
                             </div>
                         </div>
                         
                         {/* Features */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                     <Lock className="w-5 h-5" />
                                 </div>
                                 <div>
                                     <div className="text-gray-900 font-medium text-sm">Secure payment</div>
                                     <div className="text-gray-400 text-xs">Have you ever finally just</div>
                                 </div>
                             </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                     <MessageCircle className="w-5 h-5" />
                                 </div>
                                 <div>
                                     <div className="text-gray-900 font-medium text-sm">Customer support</div>
                                     <div className="text-gray-400 text-xs">Have you ever finally just</div>
                                 </div>
                             </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                     <Truck className="w-5 h-5" />
                                 </div>
                                 <div>
                                     <div className="text-gray-900 font-medium text-sm">Free delivery</div>
                                     <div className="text-gray-400 text-xs">Have you ever finally just</div>
                                 </div>
                             </div>
                         </div>

                     </div>

                     {/* Checkout Column */}
                     <div className="w-full lg:w-[320px]">
                         <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm mb-4">
                             <div className="text-gray-600 text-sm mb-2">Have a coupon?</div>
                             <div className="flex">
                                 <input type="text" placeholder="Add coupon" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none" />
                                 <button className="bg-white border border-gray-300 border-l-0 text-blue-600 px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-50">Apply</button>
                             </div>
                         </div>

                         <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                             <div className="space-y-2 mb-4">
                                 <div className="flex justify-between">
                                     <span className="text-gray-600">Subtotal:</span>
                                     <span className="text-gray-900">$1403.97</span>
                                 </div>
                                 <div className="flex justify-between">
                                     <span className="text-gray-600">Discount:</span>
                                     <span className="text-red-500">- $60.00</span>
                                 </div>
                                 <div className="flex justify-between">
                                     <span className="text-gray-600">Tax:</span>
                                     <span className="text-green-500">+ $14.00</span>
                                 </div>
                             </div>
                             <div className="border-t border-gray-200 pt-3 mb-4">
                                  <div className="flex justify-between items-end">
                                     <span className="text-gray-900 font-bold">Total:</span>
                                     <span className="text-gray-900 font-bold text-xl">$1357.97</span>
                                 </div>
                             </div>
                             <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold text-lg hover:bg-green-600 mb-4 shadow-green-200 shadow-lg">
                                 Checkout
                             </button>
                             
                             <div className="flex justify-center gap-2 mt-4">
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-5" alt="Visa" />
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="Paypal" />
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Saved for Later */}
                 <div className="bg-white border border-gray-200 rounded-md p-6 mt-8 shadow-sm">
                     <h3 className="font-bold text-gray-900 mb-6">Saved for later</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         {savedForLater.map((item, idx) => (
                             <div key={idx} className="group cursor-pointer">
                                  <div className="bg-gray-100 rounded-md h-[180px] flex items-center justify-center mb-3">
                                      <img src={item.image} alt={item.name} className="max-h-[140px] max-w-full object-contain mix-blend-multiply" />
                                  </div>
                                  <div className="mb-2">
                                      <div className="font-bold text-gray-900">{item.price}</div>
                                      <h4 className="text-gray-500 text-sm group-hover:text-blue-600 line-clamp-2">{item.name}</h4>
                                  </div>
                                  <button className="flex items-center gap-2 text-blue-600 border border-gray-200 px-3 py-1.5 rounded bg-white text-sm font-medium hover:bg-gray-50 w-fit shadow-sm">
                                      <Truck className="w-4 h-4" />
                                      Move to cart
                                  </button>
                             </div>
                         ))}
                     </div>
                 </div>
                 
                 {/* Blue Banner */}
                 <div className="mt-8 bg-blue-600 rounded-md p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                      <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-500 transform skew-x-[-20deg] translate-x-20"></div>
                      <div className="relative z-10 text-white">
                          <h3 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h3>
                          <p className="opacity-80">Have you ever finally just write dummy info</p>
                      </div>
                      <button className="relative z-10 bg-orange-500 text-white px-6 py-2 rounded-md font-bold hover:bg-orange-600 shadow-lg">
                          Shop now
                      </button>
                 </div>

            </div>
        </div>
    );
};

export default Cart;
