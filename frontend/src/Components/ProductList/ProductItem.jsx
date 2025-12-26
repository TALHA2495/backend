import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, viewType }) => {
    if (viewType === 'grid') {
        return (
            <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:shadow-lg transition-shadow bg-white">
                <div className="relative mb-4 flex-1 flex items-center justify-center">
                     <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} className="max-h-[180px] max-w-full object-contain mix-blend-multiply" />
                     </Link>
                </div>
                <div>
                     <div className="flex justify-between items-baseline mb-1 items-center">
                        <span className="font-bold text-gray-900 text-lg">${product.price}</span>
                        {product.oldPrice && <span className="text-gray-400 text-sm line-through">${product.oldPrice}</span>}

                        <button className="p-1.5 rounded-md border border-gray-200 bg-white text-blue-600 hover:text-blue-700 hover:bg-gray-50">
                         <Heart className="w-5 h-5" />
                     </button>
                     </div>
                     <div className="flex items-center gap-2 mb-2">
                         <div className="flex text-orange-400">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                             ))}
                         </div>
                         <span className="text-orange-400 text-xs font-medium">{product.rating}</span>
                     </div>
                     <Link to={`/product/${product.id}`} className="text-gray-600 text-sm hover:text-blue-600 font-medium line-clamp-2 mb-2 block">
                         {product.name} - {product.description}
                     </Link>
                </div>
            </div>
        );
    }

    // List View
    return (
        <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
             <div className="w-full md:w-[200px] flex-shrink-0 flex items-center justify-center bg-white">
                 <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="max-h-[180px] max-w-full object-contain mix-blend-multiply" />
                 </Link>
             </div>
             
             <div className="flex-1">
                 <div className="flex justify-between items-start">
                     <Link to={`/product/${product.id}`} className="text-lg font-medium text-gray-800 hover:text-blue-600 mb-2 block">
                         {product.name}
                     </Link>
                     <button className="p-2 rounded-md border border-gray-200 bg-white text-blue-600 hover:text-blue-700 hover:bg-gray-50">
                          <Heart className="w-5 h-5" />
                     </button>
                 </div>
                 
                 <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900 text-xl">${product.price}</span>
                      {product.oldPrice && <span className="text-gray-400 text-sm line-through">${product.oldPrice}</span>}
                 </div>

                 <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-orange-400">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                             ))}
                      </div>
                      <span className="text-orange-400 text-sm font-medium ml-1">{product.rating}</span>
                      <span className="text-gray-300 mx-2">•</span>
                      <span className="text-gray-500 text-sm">{product.sold} orders</span>
                      <span className="text-gray-300 mx-2">•</span>
                      <span className="text-green-500 text-sm font-medium">Free Shipping</span>
                 </div>

                 <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                     {product.longDescription}
                 </p>
                 
                 <Link to={`/product/${product.id}`} className="text-blue-600 text-sm font-medium hover:underline">
                     View details
                 </Link>
             </div>
        </div>
    );
};

export default ProductItem;
