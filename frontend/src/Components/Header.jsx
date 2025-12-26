import React from 'react';
import { Search, User, MessageSquare, Heart, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import logo from '../assets/Layout/Brand/logo-colored.png';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center bg-white">
            <img src={logo} alt="Brand" className="h-[46px] block " />
        </Link>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
             <div className="relative">
               <input 
                 type="text" 
                 value="All category" 
                 readOnly 
                 className="h-10 px-4 border border-blue-500 rounded-l-md border-r-0 bg-white text-gray-700 w-32 cursor-pointer focus:outline-none"
               />
               <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500" />
             </div>
             <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 h-10 px-4 border border-blue-500 focus:outline-none"
             />
             <button className="h-10 px-6 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700">
               Search
             </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Link to="/profile" className="flex flex-col items-center text-gray-500 hover:text-blue-600 space-y-1">
            <User className="w-5 h-5 fill-current" />
            <span className="text-xs">Profile</span>
          </Link>
          <Link to="/messages" className="flex flex-col items-center text-gray-500 hover:text-blue-600 space-y-1">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="text-xs">Message</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center text-gray-500 hover:text-blue-600 space-y-1">
            <Heart className="w-5 h-5 fill-current" />
            <span className="text-xs">Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-gray-500 hover:text-blue-600 space-y-1">
            <ShoppingCart className="w-5 h-5 fill-current" />
            <span className="text-xs">My cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Nav */}
      <Navbar />
    </header>
  );
};

export default Header;
