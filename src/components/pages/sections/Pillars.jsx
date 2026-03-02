import React from 'react';
import { motion } from 'framer-motion';
import lateAbhayBhardwajImg from '../../../assets/home/LateAbhayBhardwaj.jpeg';
// import anshBhardwajImg from '../../../assets/home/AnshBhardwaj.jpg';
import amrutaBhardwajImg from '../../../assets/home/AmrutaBharadwaj.png';

const Pillars = () => {
    const pillars = [
        {
            name: "Late Shree Abhaykumar Bharadwaj",
            role: "Founding Pillar",
            image: lateAbhayBhardwajImg
        },
        {
            name: "Adv. Amruta Bharadwaj",
            role: "Leading Partner",
            image: amrutaBhardwajImg
        }
    ];

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Background large face watermark effect mimicking the screenshot */}
            <div className="absolute inset-0 opacity-10 flex w-full h-full pointer-events-none">
                <div
                    className="w-1/2 h-full bg-cover bg-center grayscale mix-blend-screen"
                    style={{ backgroundImage: `url(${lateAbhayBhardwajImg})` }}
                ></div>
                <div
                    className="w-1/2 h-full bg-cover bg-center grayscale mix-blend-screen"
                    style={{ backgroundImage: `url(${amrutaBhardwajImg})` }}
                ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Key Pillars of AB & A
                    </h2>
                    <p className="text-brand-gold text-lg md:text-xl font-medium mb-16">
                        Meet our founding pillars
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 + 0.2, duration: 0.7 }}
                            className="group cursor-pointer max-w-sm mx-auto"
                        >
                            <div className="relative overflow-hidden rounded-t-lg shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                {/* Image matching the portrait style in the screenshot */}
                                <div className="aspect-[4/5] bg-gray-200">
                                    <img
                                        src={pillar.image}
                                        alt={pillar.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Modern overlay for hover effect */}
                                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="bg-white py-6 px-4 shadow-xl border-b-4 border-brand-gold relative z-20 group-hover:shadow-2xl transition-shadow duration-300 -mt-2">
                                <h3 className="text-brand-navy font-serif font-bold text-xl mb-1">{pillar.name}</h3>
                                <p className="text-brand-gold font-medium text-sm sm:text-base hidden group-hover:block transition-all">{pillar.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
