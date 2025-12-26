import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                B
                            </div>
                            <span className="text-2xl font-bold text-gray-800">Brand</span>
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Best information about the company gies here but now lorem ipsum is
                        </p>
                        <div className="flex items-center gap-2">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-black mb-4">About</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-500 hover:text-blue-600">About Us</Link></li>
                            <li><Link to="/find-store" className="text-gray-500 hover:text-blue-600">Find store</Link></li>
                            <li><Link to="/categories" className="text-gray-500 hover:text-blue-600">Categories</Link></li>
                            <li><Link to="/blogs" className="text-gray-500 hover:text-blue-600">Blogs</Link></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="font-medium text-black mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li><Link to="/help" className="text-gray-500 hover:text-blue-600">Help Center</Link></li>
                            <li><Link to="/refund" className="text-gray-500 hover:text-blue-600">Money Refund</Link></li>
                            <li><Link to="/shipping" className="text-gray-500 hover:text-blue-600">Shipping</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-blue-600">Contact us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-black mb-4">For users</h3>
                        <ul className="space-y-2">
                            <li><Link to="/login" className="text-gray-500 hover:text-blue-600">Login</Link></li>
                            <li><Link to="/register" className="text-gray-500 hover:text-blue-600">Register</Link></li>
                            <li><Link to="/settings" className="text-gray-500 hover:text-blue-600">Settings</Link></li>
                            <li><Link to="/orders" className="text-gray-500 hover:text-blue-600">My Orders</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-black mb-4">Get app</h3>
                         <div className="space-y-2">
                            <button className="flex items-center bg-black text-white px-3 py-2 rounded-md w-full max-w-[160px]">
                                <div className="mr-2">
                                     {/* Apple Icon */}
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.47-1.72-2.49-3.04-7.03-1.27-10.1 0.88-1.52 2.44-2.48 4.14-2.5 1.28-0.03 2.51.87 3.3.87 0.78 0 2.24-1.07 3.79-0.91 0.65 0.03 2.46.26 3.63 1.98-0.09.05-2.17 1.27-2.15 3.76 0.02 2.99 2.62 4 2.67 4.02-0.02.05-0.42 1.44-1.39 2.85zM15.22 3.86c0.68-0.84 1.15-2.01 1.02-3.17-0.99 0.04-2.2 0.66-2.92 1.5-0.62.72-1.16 1.88-1.02 3.01 1.1 0.08 2.23-0.5 2.92-1.34z"/></svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight">Download on the</div>
                                    <div className="text-sm font-semibold leading-tight">App Store</div>
                                </div>
                            </button>
                             <button className="flex items-center bg-black text-white px-3 py-2 rounded-md w-full max-w-[160px]">
                                <div className="mr-2">
                                    {/* Google Play Icon */}
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight">Get it on</div>
                                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">© 2023 Ecommerce.</p>
                     <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="flex items-center gap-1 cursor-pointer text-gray-500 text-sm">
                           <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5" />
                           English
                           <div className="border border-white border-t-0 border-r-0 transform rotate-45 w-[6px] h-[6px] mt-[-2px] border-b-gray-500 border-l-gray-500"></div>
                        </div>
                     </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;