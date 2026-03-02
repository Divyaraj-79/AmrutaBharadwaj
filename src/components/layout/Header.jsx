import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/home/AnshBharadwajLogo.jpg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        {
            name: 'About the Firm', path: '/about', subLinks: [
                { name: 'About AB & A', path: '/about' },
                { name: 'Firm\'s Guiding Principles', path: '/about/principles' },
                { name: 'Photo Gallery', path: '/about/gallery' }
            ]
        },
        {
            name: 'Key Pillars', path: '/pillars', subLinks: [
                { name: 'Adv. Amruta Bhardwaj', path: '/pillars/amruta' },
                { name: 'Late Sh. Abhay Bhardwaj', path: '/pillars/abhay' }
            ]
        },
        { name: 'PRACTICE AREAS', path: '/practice-areas' },
        {
            name: 'Careers', path: '/careers', subLinks: [
                { name: 'Job Openings', path: '/careers/jobs' },
                { name: 'Internship Program', path: '/careers/internships' }
            ]
        },
        { name: 'CONTACT US', path: '/contact' }
    ];

    const headerNavClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-lg py-2' : 'bg-brand-navy/98 py-3 lg:py-4'
        }`;

    return (
        <header className={headerNavClass}>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex justify-between items-center h-full">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 lg:gap-4 group shrink-0 mr-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden pointer-events-none shadow-lg group-hover:scale-[1.02] transition-transform border-2 border-brand-gold/20">
                            <img
                                src={logo}
                                alt="Abhay Bharadwaj & Associates"
                                className="w-full h-full object-cover scale-[1.35]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-serif text-white text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-bold tracking-wide lg:tracking-wider leading-none drop-shadow-sm whitespace-nowrap">
                                Abhay Bharadwaj & Associates
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:space-x-5 xl:space-x-8 items-center mt-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group h-full flex items-center">
                                <Link
                                    to={link.path}
                                    className={`flex items-center text-[12px] xl:text-[13px] tracking-widest font-semibold transition-colors duration-300 py-2 whitespace-nowrap ${location.pathname === link.path || (location.pathname !== '/' && link.path !== '/' && location.pathname.startsWith(link.path))
                                        ? 'text-brand-gold'
                                        : 'text-brand-light hover:text-brand-gold'
                                        }`}
                                >
                                    {link.name}
                                    {link.subLinks && (
                                        <svg className="w-4 h-4 ml-1 opacity-80 group-hover:opacity-100 transition-transform duration-300 group-hover:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.subLinks && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 xl:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="bg-[#1e2a3c]/95 backdrop-blur-xl rounded-md shadow-2xl overflow-hidden border-t-4 border-brand-gold">
                                            {link.subLinks.map((subLink, index) => (
                                                <Link
                                                    key={index}
                                                    to={subLink.path}
                                                    className="block px-5 xl:px-6 py-3.5 text-[13px] xl:text-sm font-medium text-gray-200 hover:text-white hover:bg-brand-gold/15 transition-all duration-200 border-b border-white/5 last:border-0 hover:pl-6 xl:hover:pl-7 whitespace-nowrap"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-brand-gold focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-brand-navy border-t border-brand-navy/50 absolute top-full left-0 w-full shadow-2xl max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.subLinks ? (
                                    <div className="space-y-1">
                                        <div className="w-full text-left px-3 py-3 rounded-md text-base font-semibold tracking-wider text-brand-light flex justify-between items-center">
                                            {link.name}
                                        </div>
                                        <div className="pl-6 pr-3 py-1 space-y-1 bg-white/5 rounded">
                                            {link.subLinks.map((subLink, index) => (
                                                <Link
                                                    key={index}
                                                    to={subLink.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-brand-gold hover:bg-brand-navy/60 transition-colors"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-3 py-3 rounded-md text-base font-semibold tracking-wider ${location.pathname === link.path || (location.pathname !== '/' && link.path !== '/' && location.pathname.startsWith(link.path))
                                            ? 'text-brand-gold bg-brand-navy/60'
                                            : 'text-brand-light hover:text-brand-gold hover:bg-brand-navy/40'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
