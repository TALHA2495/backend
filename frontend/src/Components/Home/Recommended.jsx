import { products } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = () => {
    const items = products.filter(p => p.id <= 10);

    return (
        <div className="container mx-auto px-4 py-4">
             <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended items</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                 {items.map((item) => (
                     <Link to={`/product/${item.id}`} key={item.id} className="bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:shadow-md transition-shadow">
                         <div className="flex-1 flex items-center justify-center mb-4">
                             <img src={item.image} alt={item.desc} className="max-h-[140px] max-w-full object-contain" />
                         </div>
                         <div className="font-bold text-gray-900 mb-1">${item.price}</div>
                         <div className="text-gray-500 text-sm">{item.description}</div>
                     </Link>
                 ))}
             </div>
        </div>
    );
};

export default Recommended;
