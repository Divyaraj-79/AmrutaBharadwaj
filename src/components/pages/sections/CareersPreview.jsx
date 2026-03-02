import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamBackground from '../../../assets/home/teamsection2-BQSNYcyQ.svg'
import jobImg from '../../../assets/home/p7-BB-5S_jE.jpeg'
import internshipImg from '../../../assets/home/p6-DL7GSB8B.jpeg'

const CareersPreview = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Graphic - Silhouettes */}
            <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center -z-10">
                <img src={teamBackground} alt="Team Background" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="pr-0 lg:pr-12"
                    >
                        <p className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-3">
                            Career Opportunities
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8">
                            Careers
                        </h2>

                        <div className="space-y-6 text-brand-dark/80 text-lg leading-relaxed text-balance">
                            <p>
                                Explore career opportunities and join our team of dedicated legal professionals. At AB & A, we believe in fostering a collaborative and supportive work environment where talent thrives and expertise is valued.
                            </p>
                            <p>
                                Whether you're an experienced legal professional looking for a new challenge or a fresh graduate seeking to launch your legal career, we offer opportunities for growth, learning, and meaningful contribution to our firm's legacy of excellence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

                        {/* Job Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#FBF9F4] rounded-xl overflow-hidden shadow-lg border border-[#F1E9DE] flex flex-col h-full hover:shadow-xl transition-shadow"
                        >
                            <div className="h-40 overflow-hidden">
                                <img src={jobImg} alt="Office Desk" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Briefcase className="w-6 h-6 text-brand-navy" />
                                    <h3 className="font-serif font-bold text-2xl text-brand-navy">Job</h3>
                                </div>
                                <p className="text-brand-dark/70 text-sm leading-relaxed mb-6 flex-grow">
                                    Join our team of skilled legal professionals and advance your career in a dynamic, supportive environment.
                                </p>
                                <Link to="/careers#job" className="w-full py-3 bg-[#A88C64] hover:bg-brand-navy text-white text-center font-semibold rounded transition-colors text-sm flex justify-center items-center gap-2">
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Internship Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-[#FBF9F4] rounded-xl overflow-hidden shadow-lg border border-[#F1E9DE] flex flex-col h-full hover:shadow-xl transition-shadow"
                        >
                            <div className="h-40 overflow-hidden">
                                <img src={internshipImg} alt="Meeting Room" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-brand-navy" />
                                    <h3 className="font-serif font-bold text-2xl text-brand-navy">Internship</h3>
                                </div>
                                <p className="text-brand-dark/70 text-sm leading-relaxed mb-4 flex-grow">
                                    Gain valuable hands-on experience in a real legal practice setting and build your professional network.
                                </p>

                                <div className="bg-red-50 text-red-600 font-medium text-xs py-2 px-3 rounded mb-4 text-center border border-red-100">
                                    Note: We only offer offline internship.
                                </div>

                                <Link to="/careers#internship" className="w-full py-3 bg-[#A88C64] hover:bg-brand-navy text-white text-center font-semibold rounded transition-colors text-sm flex justify-center items-center gap-2 mt-auto">
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersPreview;
