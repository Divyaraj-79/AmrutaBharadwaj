import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Building2, Users, Car, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreasPreview = () => {
    const practiceAreas = [
        {
            title: "Criminal Law",
            description: "Comprehensive legal representation for criminal cases, defending your rights with professionalism and care.",
            icon: <Briefcase className="w-8 h-8 text-brand-gold" />
        },
        {
            title: "Civil Law",
            description: "Expert legal services in property disputes, contract enforcement, money recovery, landlord-tenant issues, and injunctions.",
            icon: <Scale className="w-8 h-8 text-brand-gold" />
        },
        {
            title: "Family Law",
            description: "Compassionate legal support for divorce, child custody, and alimony cases, protecting your rights through a smooth legal process.",
            icon: <Users className="w-8 h-8 text-brand-gold" />
        },
        {
            title: "Motor Vehicle Law",
            description: "Legal representation in motor vehicle accident cases, including personal injury claims, property damage, and fatal accident claims under MACT proceedings.",
            icon: <Car className="w-8 h-8 text-brand-gold" />
        },
        {
            title: "Company Law",
            description: "Skilled representation in company law matters, from regulatory compliance to business structuring, ensuring your legal obligations are met.",
            icon: <Building2 className="w-8 h-8 text-brand-gold" />
        },
        {
            title: "Intellectual Property Law",
            description: "Expert handling of intellectual property rights and legal issues, including compliance and litigation.",
            icon: <FileText className="w-8 h-8 text-brand-gold" />
        }
    ];

    return (
        <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">

            {/* Background Decorative Element matching the screenshot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae24c73?auto=format&fit=crop&q=80&w=600" alt="Scale background" className="w-[800px] h-auto object-cover mix-blend-multiply drop-shadow-2xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">
                        Practice Areas
                    </h2>
                    <p className="text-brand-dark/70 text-lg font-medium">
                        We provide comprehensive legal services across multiple practice areas
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-20">
                    {practiceAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded border-l-4 border-l-transparent hover:border-l-brand-gold shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
                        >
                            <div className="w-16 h-16 bg-brand-beige border border-brand-gold/20 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold group-hover:border-transparent transition-colors duration-300">
                                {React.cloneElement(area.icon, { className: "w-8 h-8 text-brand-gold group-hover:text-white transition-colors duration-300" })}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{area.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-balance">
                                {area.description}
                            </p>

                            <div className="mt-auto">
                                <Link to="/practice-areas" className="inline-flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 relative z-20"
                >
                    <Link to="/practice-areas" className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-3 rounded font-bold transition-all duration-300 tracking-wide uppercase text-sm">
                        View All Practice Areas
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default PracticeAreasPreview;
