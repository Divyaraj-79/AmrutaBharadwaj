import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/home/Ansh_Bharadwaj_Logo.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light">
            {/* Background Decorative Element matching the screenshot */}
            <div className="absolute top-57 left-270 w-150 h-150 pointer-events-none opacity-20 flex justify-between">
                <img src={logo} alt="Legal background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                <div className="absolute"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left py-20 lg:py-32"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-brand-navy leading-tight mb-6"
                        >
                            Over 45 Years of <br className="hidden md:block" /> <span className="text-brand-gold">Trusted Legal Service</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-brand-dark/80 mb-10 max-w-xl text-balance"
                        >
                            Expert legal representation with a proven track record of success. We fight for your rights with integrity and dedication.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, Math: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-[#A9895B] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex justify-end items-center"
                    >
                        {/* Logo Watermark / Embelishment to mimic right side of hero */}
                        <div className="relative w-[32rem] h-[32rem]">
                            <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse blur-3xl"></div>
                            <img src="/logo.jpg" alt="AB&A Emblem" className="relative z-10 w-full h-full object-contain drop-shadow-2xl mix-blend-multiply opacity-90" onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
