import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ctaBg from '../../../assets/home/herobg2-3BZDLFBz.png';

const CTA = () => {
    return (
        <section className="relative py-28 flex items-center justify-center overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={ctaBg}
                    alt="Legal background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Ready to Discuss <br /> Your Legal Matter?
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-balance">
                        Don't navigate your legal challenges alone. Our experienced attorneys are here to help you achieve the best possible outcome.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-brand-gold hover:bg-[#A9895B] text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default CTA;
