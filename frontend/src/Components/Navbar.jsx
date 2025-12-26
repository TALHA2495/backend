import React, { useState } from 'react';
import { Menu, ChevronDown, AlignJustify, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import DE from '../assets/Layout1/Image/flags/DE@2x.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     <div className="border-t border-gray-200 hidden lg:block bg-white">
      <div className="container mx-auto px-4 h-12 flex items-center justify-between text-sm">
        {/* Left Links */}
        <div className="flex items-center gap-6 font-medium text-gray-700">
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
             <Menu className="w-5 h-5" />
            <span>All category</span>
          </button>
          <Link to="/hot-offers" className="cursor-pointer hover:text-blue-600 transition-colors">Hot offers</Link>
          <Link to="/gift-boxes" className="cursor-pointer hover:text-blue-600 transition-colors">Gift boxes</Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-600 transition-colors">Projects</Link>
          <Link to="/menu-item" className="cursor-pointer hover:text-blue-600 transition-colors">Menu item</Link>
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Help</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        {/* Right Settings */}
        <div className="flex items-center gap-6 text-gray-600">
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>English, USD</span>
             <ChevronDown className="w-4 h-4" />
          </div>
          <div className="relative group flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Ship to</span>
            <img src={DE} alt="Germany" className="w-5" />
             <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile Nav Bar (Visible only on small screens) */}
    <div className="lg:hidden border-t border-gray-200 bg-white p-2 flex justify-between items-center">
         <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             <AlignJustify className="w-6 h-6" />
         </button>
         <span className="font-semibold text-gray-700">Menu</span>
         <div className="w-10"></div> {/* Spacer */}
    </div>
    
    {/* Mobile Menu Drawer */}
    {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div className="absolute left-0 top-0 bottom-0 w-[250px] bg-white p-4 shadow-xl" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={() => setMobileMenuOpen(false)}>
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
                <div className="flex flex-col space-y-4 font-medium text-gray-700">
                    <Link to="/" className="flex items-center gap-2 py-2 border-b border-gray-100">
                        <Menu className="w-5 h-5" />
                        All category
                    </Link>
                    <Link to="/hot-offers" className="py-2 border-b border-gray-100">Hot offers</Link>
                    <Link to="/gift-boxes" className="py-2 border-b border-gray-100">Gift boxes</Link>
                    <Link to="/projects" className="py-2 border-b border-gray-100">Projects</Link>
                    <Link to="/menu-item" className="py-2 border-b border-gray-100">Menu item</Link>
                    <Link to="/help" className="py-2 border-b border-gray-100 flex justify-between">
                        Help
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                </div>
                
                <div className="mt-8 space-y-4 text-sm text-gray-600">
                     <div className="flex items-center gap-2 py-2">
                        <span>English, USD</span>
                     </div>
                     <div className="flex items-center gap-2 py-2">
                         <span>Ship to 🇩🇪</span>
                     </div>
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default Navbar