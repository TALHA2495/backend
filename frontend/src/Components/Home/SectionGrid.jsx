import React from 'react';
import { Link } from 'react-router-dom';

const SectionGrid = ({ title, bgImage, items }) => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div className="bg-white border border-gray-200 rounded-md flex flex-col lg:flex-row h-auto lg:h-[260px] overflow-hidden">
                {/* Banner Side */}
                <div 
                    className="w-full lg:w-[280px] p-6 text-gray-800 bg-cover bg-center shrink-0 relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 w-3/4">{title}</h3>
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                            Source now
                        </button>
                    </div>
                </div>

                {/* Grid Side */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border-t lg:border-t-0 lg:border-l border-gray-200">
                     {items.map((item, idx) => (
                         <Link to={`/product/${item.id}`} key={idx} className="p-4 flex justify-between items-center h-[130px] bg-white hover:shadow-md transition-all cursor-pointer group">
                             <div className="flex flex-col h-full justify-start pt-2">
                                 <h4 className="text-gray-900 text-sm font-medium mb-1 line-clamp-2">{item.name}</h4>
                                 <p className="text-gray-500 text-xs text-nowrap">From USD {item.price}</p>
                             </div>
                             <div className="w-[82px] h-[82px] flex items-center justify-center shrink-0 ml-2">
                                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                             </div>
                         </Link>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default SectionGrid;
