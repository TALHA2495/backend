import React from 'react';

import watch from '../../assets/Image/tech/image 29.png';
import laptop from '../../assets/Image/tech/image 32.png';
import camera from '../../assets/Image/tech/6.png';
import headphone from '../../assets/Image/tech/8.png';
import canon from '../../assets/Image/tech/6.png';

const Deals = () => {
    const deals = [
        { name: "Smart watches", discount: "-25%", image: watch },
        { name: "Laptops", discount: "-15%", image: laptop },
        { name: "GoPro cameras", discount: "-40%", image: camera },
        { name: "Headphones", discount: "-25%", image: headphone },
        { name: "Canon cameras", discount: "-25%", image: canon },
    ];

    return (
        <div className="container mx-auto px-4 py-4">
             <div className="bg-white border border-gray-200 rounded-md flex flex-col lg:flex-row h-auto lg:h-[240px]">
                 {/* Count down side */}
                 <div className="w-full lg:w-[280px] p-5 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">
                     <h3 className="text-lg font-bold text-gray-900 mb-1">Deals and offers</h3>
                     <p className="text-gray-500 mb-4">Hygiene equipments</p>
                     
                     <div className="flex gap-2">
                         <div className="bg-gray-800 text-white rounded-md p-2 w-[45px] text-center">
                             <div className="font-bold text-lg">04</div>
                             <div className="text-xs">Days</div>
                         </div>
                         <div className="bg-gray-800 text-white rounded-md p-2 w-[45px] text-center">
                             <div className="font-bold text-lg">13</div>
                             <div className="text-xs">Hour</div>
                         </div>
                         <div className="bg-gray-800 text-white rounded-md p-2 w-[45px] text-center">
                             <div className="font-bold text-lg">34</div>
                             <div className="text-xs">Min</div>
                         </div>
                         <div className="bg-gray-800 text-white rounded-md p-2 w-[45px] text-center">
                             <div className="font-bold text-lg">56</div>
                             <div className="text-xs">Sec</div>
                         </div>
                     </div>
                 </div>

                 {/* Products Grid */}
                 <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-200 overflow-hidden">
                     {deals.map((item, idx) => (
                         <div key={idx} className="p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow">
                             <div className="h-[120px] w-full flex items-center justify-center mb-3">
                                <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                             </div>
                             <h4 className="text-gray-900 text-sm font-medium mb-2">{item.name}</h4>
                             <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">{item.discount}</span>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    );
};

export default Deals;
