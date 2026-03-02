import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../../assets/home/AnshBharadwajLogo.jpg';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-brand-light pt-16 pb-8 border-t-[6px] border-brand-gold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden pointer-events-none">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="font-serif text-white text-xl font-bold tracking-wide">
                                Abhay Bharadwaj & Associates
                            </span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Providing expert legal representation with a proven track record of success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-brand-gold mb-5 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About the Firm', 'Key Pillars', 'Practice Areas', 'Careers', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-brand-gold transition-colors flex items-center group text-sm">
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-brand-gold mb-5 uppercase tracking-wider">Practice Areas</h4>
                        <ul className="space-y-3">
                            {['Criminal Law', 'Civil Law', 'Family Law', 'Motor Vehicle Law', 'Company Law', 'Intellectual Property'].map((item) => (
                                <li key={item}>
                                    <Link to={`/practice-areas`} className="text-gray-300 hover:text-brand-gold transition-colors block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-brand-gold mb-5 uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mr-3 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    Rajkot, Gujarat, India<br />
                                    (Complete address placeholder)
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-brand-gold shrink-0 mr-3" />
                                <span className="text-gray-300 text-sm">+91 XXXXXXXXXX</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-brand-gold shrink-0 mr-3" />
                                <a href="mailto:info@abhaybharadwaj.com" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                                    info@abhaybharadwaj.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Abhay Bharadwaj & Associates. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
