import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake } from 'lucide-react';
import officeImg from '../../../assets/home/p3-DjSC5oSl.jpeg';
import officeImg2 from '../../../assets/home/P4-DOn4qVDq.jpeg';
import officeImg3 from '../../../assets/home/p6-DL7GSB8B.jpeg';

const Principles = () => {
    const principles = [
        {
            icon: <Compass className="w-8 h-8 text-brand-navy" />,
            title: "Our Approach",
            description: "At AB & A, we aim to provide exceptional legal services tailored to meet the needs of our clients. Our dedicated team of professionals is committed to ensuring justice and legal support across Gujarat."
        },
        {
            icon: <Target className="w-8 h-8 text-brand-navy" />,
            title: "Our Mission",
            description: "At AB & A, our mission is to provide high-quality legal services to our clients. We strive to achieve the best possible outcome for our clients, and we are dedicated to helping them navigate the complex legal system with ease."
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-brand-navy" />,
            title: "Our Values",
            description: "At AB & A, we believe in treating our clients with respect, compassion, and understanding. We understand that every client is unique and has different needs, and we work hard to tailor our approach accordingly.",
            fullWidth: true
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header matching screenshot */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">
                        Firm's Guiding Principles
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium">
                        Our commitment to excellence, integrity, and client-centered service
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Office Images Side (Left in Screenshot) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[400px]">
                            <img src={officeImg} alt="Office Lobby" className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[250px]">
                                <img src={officeImg2} alt="Office Work Area" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[250px]">
                                <img src={officeImg3} alt="Office Desk" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        {/* Faded handshake decorative element */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] -translate-x-1/2 pointer-events-none opacity-5 mix-blend-multiply flex items-center justify-center">
                            <HeartHandshake className="w-full h-full text-brand-navy" />
                        </div>
                    </motion.div>

                    {/* Cards Side (Right in Screenshot) */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Box 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded relative group"
                            >
                                <div className="w-14 h-14 bg-brand-beige rounded flex items-center justify-center mb-6">
                                    {principles[0].icon}
                                </div>
                                <h3 className="font-serif font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{principles[0].title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-balance">
                                    {principles[0].description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </motion.div>

                            {/* Box 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded relative group"
                            >
                                <div className="w-14 h-14 bg-brand-beige rounded flex items-center justify-center mb-6">
                                    {principles[1].icon}
                                </div>
                                <h3 className="font-serif font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{principles[1].title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-balance">
                                    {principles[1].description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </motion.div>
                        </div>

                        {/* Box 3 - Full Width Centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded relative group sm:mx-12"
                        >
                            <div className="w-14 h-14 bg-brand-beige rounded flex items-center justify-center mb-6 mx-auto">
                                {principles[2].icon}
                            </div>
                            <h3 className="font-serif font-bold text-xl text-brand-navy mb-4 text-center group-hover:text-brand-gold transition-colors">{principles[2].title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm text-center">
                                {principles[2].description}
                            </p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Principles;
