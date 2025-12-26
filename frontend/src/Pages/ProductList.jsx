import React, { useState } from 'react';
import { LayoutGrid, List as ListIcon, ChevronRight } from 'lucide-react';
import Sidebar from '../Components/ProductList/Sidebar';
import ProductItem from '../Components/ProductList/ProductItem';
import Newsletter from '../Components/Home/Newsletter';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data';

const ProductList = () => {
    const [view, setView] = useState('list'); // 'grid' | 'list'
    
    // Using electronics and gadgets for this page
    const products = allProducts.filter(p => p.category === "Electronics"); 

    return (
        <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-4">
                 {/* Breadcrumb */}
                 <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
                     <Link to="/" className="hover:text-blue-600">Home</Link>
                     <ChevronRight className="w-4 h-4" />
                     <Link to="/categories" className="hover:text-blue-600">Electronics</Link>
                     <ChevronRight className="w-4 h-4" />
                     <Link to="/gadgets" className="hover:text-blue-600">Gadgets</Link>
                     <ChevronRight className="w-4 h-4" />
                     <span className="text-gray-900">Mobile tech</span>
                 </div>

                 <div className="flex flex-col lg:flex-row gap-6">
                     <Sidebar />
                     
                     <div className="flex-1">
                          {/* Top Bar */}
                          <div className="bg-white border border-gray-200 rounded-md p-3 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                               <div className="text-gray-900 font-medium">{products.length} items in <span className="font-bold">Electronics and Gadgets</span></div>
                               
                               <div className="flex items-center gap-3">
                                   <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
                                       <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                       Verified only
                                   </label>
                                   
                                   <div className="relative">
                                       <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none bg-white">
                                           <option>Featured</option>
                                           <option>Price: Low to High</option>
                                           <option>Price: High to Low</option>
                                           <option>Newest</option>
                                       </select>
                                   </div>

                                   <div className="flex border border-gray-300 rounded overflow-hidden">
                                       <button 
                                          className={`p-2 ${view === 'grid' ? 'bg-gray-200 text-black' : 'bg-white text-gray-500'}`}
                                          onClick={() => setView('grid')}
                                       >
                                           <LayoutGrid className="w-5 h-5" />
                                       </button>
                                       <div className="w-[1px] bg-gray-300"></div>
                                       <button 
                                          className={`p-2 ${view === 'list' ? 'bg-gray-200 text-black' : 'bg-white text-gray-500'}`}
                                          onClick={() => setView('list')}
                                       >
                                           <ListIcon className="w-5 h-5" />
                                       </button>
                                   </div>
                               </div>
                          </div>

                          {/* Filter Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                               {['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'].map((tag, idx) => (
                                   <div key={idx} className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600 flex items-center gap-2">
                                       {tag}
                                       <button className="text-gray-400 hover:text-gray-600">×</button>
                                   </div>
                               ))}
                               <button className="text-blue-600 text-sm font-medium hover:underline px-2">Clear all filter</button>
                          </div>

                          {/* Products */}
                          <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
                               {products.map((product) => (
                                   <ProductItem key={product.id} product={product} viewType={view} />
                               ))}
                          </div>
                          
                          {/* Pagination */}
                          <div className="flex justify-end mt-8 gap-2">
                               <div className="relative">
                                   <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 bg-white">
                                       <option>Show 10</option>
                                       <option>Show 20</option>
                                   </select>
                               </div>
                               <div className="flex border border-gray-300 rounded bg-white">
                                   <button className="px-3 py-1 border-r border-gray-300 text-gray-500 hover:bg-gray-50"> {'<'} </button>
                                   <button className="px-3 py-1 border-r border-gray-300 text-black font-medium bg-gray-100">1</button>
                                   <button className="px-3 py-1 border-r border-gray-300 text-gray-500 hover:bg-gray-50">2</button>
                                   <button className="px-3 py-1 border-r border-gray-300 text-gray-500 hover:bg-gray-50">3</button>
                                   <button className="px-3 py-1 text-gray-500 hover:bg-gray-50"> {'>'} </button>
                               </div>
                          </div>

                     </div>
                 </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default ProductList;
