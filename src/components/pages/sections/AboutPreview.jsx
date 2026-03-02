import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import courtRoom from '../../../assets/home/court-room-8Og9yG1j.png'
import amrutaBharadwajBanner from '../../../assets/home/AmrutaBharadwajBanner.png'

const AboutPreview = () => {
    const features = [
        "Personalized legal strategies",
        "Transparent communication",
        "Proven track record of success",
        "Compassionate client service"
    ];

    return (
        <section className="py-24 bg-[#F8F5EF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8">
                            About Abhay Bharadwaj & Associates
                        </h2>

                        <div className="space-y-6 text-brand-dark/80 text-lg leading-relaxed mb-10">
                            <p>
                                We are a four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a former member of the Law Commission of India, in the year 1980. We have gradually cemented our position as a pillar of legal excellence.
                            </p>
                            <p>
                                AB & A, with a team of over 50 skilled lawyers led by Adv. Amruta Bharadwaj has her work spread across Gujarat, specifically in the Saurashtra-Kutch region.
                            </p>
                            <p>
                                Our expertise spans diverse areas, including Criminal Law, Civil Law, Family Law, Motor Vehicle Law, Company Law, and IPR Law, making our firm a one-stop solution for clients' wide range of legal challenges.
                            </p>
                            <p>
                                AB & A has built an unwavering reputation for excellence, guiding clients through intricate legal landscapes with unwavering dedication and an unwavering commitment to justice.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                                    className="flex items-center gap-3 text-brand-navy font-medium"
                                >
                                    <CheckCircle2 className="text-brand-gold w-6 h-6 flex-shrink-0" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* The decorative Lady Justice overlay from the screenshot - replaced with clean modern image styling */}
                        <div className="relative rounded-lg overflow-hidden shadow-2xl z-10 border-8 border-white">
                            <img
                                src={amrutaBharadwajBanner}
                                alt="Law Firm Office"
                                className="w-full h-auto object-cover sm:h-[600px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                        </div>

                        {/* Background pattern mimicking the Lady Justice drawing in screenshot */}
                        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae24c73?auto=format&fit=crop&q=80&w=800')] bg-no-repeat bg-contain pointer-events-none -z-10 mix-blend-multiply"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
