import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Using the same placeholder image from the screenshot for now.
// import anshBhardwajImg from '../../../assets/home/AnshBhardwaj.jpg';
import AmrutaBharadwajImg from '../../../assets/home/AmrutaBharadwaj.png';
// Alternatively, if there is a specific amruta image later, it can be imported here.

const AmrutaBharadwaj = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FDFCF9] min-h-screen pb-24">
            {/* Header Background Extension (Dark Top Area) */}
            <div className="w-full h-40 bg-[#3d3225]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Overlapping Hero Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl relative -mt-20 overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="w-full md:w-[45%] lg:w-[40%] bg-gray-100 shrink-0">
                            <img
                                src={AmrutaBharadwajImg}
                                alt="Advocate Amruta Bharadwaj"
                                className="w-full h-full object-cover min-h-[300px] md:h-[400px]"
                            />
                        </div>

                        {/* Info Section */}
                        <div className="w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-[#1A2433] mb-3">
                                Adv. Amruta Bharadwaj
                            </h1>
                            <p className="text-[#d4aa5d] font-bold tracking-widest text-sm mb-12 uppercase">
                                TRIAL COURT ADVOCATE
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
                                <div>
                                    <h3 className="text-[#1A2433] font-serif font-bold text-xl mb-1">Email</h3>
                                    <a href="mailto:abalegal.info@gmail.com" className="text-gray-500 hover:text-[#d4aa5d] transition-colors">
                                        abalegal.info@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-[#1A2433] font-serif font-bold text-xl mb-1">Website</h3>
                                    <a href="https://abaassociates.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#d4aa5d] transition-colors">
                                        abaassociates.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Biography Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mt-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2433] mb-8">
                        Adv. Amruta Bharadwaj
                    </h2>

                    <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                        <p>
                            Amruta Bharadwaj is the daughter of Late Shri Abhay Bharadwaj and is an advocate of the Original Side of Jurisdiction. She currently heads Abhay Bharadwaj & Associates.
                        </p>

                        <p>
                            After obtaining a BBA LLB (Hons.) degree from O. P. Jindal Global University, Amruta did a one-year Post Graduate Degree programme in Leadership, Politics, and Governance from the prestigious Indian Institute of Democratic Leadership, a sister concern of Rashtriya Swayamsevak Sangh run Rambhau Mhalgi Prabodhini.
                        </p>

                        <p>
                            Thereafter, she closely worked with BJP's National General Secretary Shri Tarun Chugh as well as ICCR Chairman and Rajya Sabha MP Shri Vinay Sahasrabuddhe in Delhi for a year before returning to Rajkot.
                        </p>

                        <p>
                            Upon her return, Amruta straight away joined Shri Abhay Bharadwaj in the office and began her practice in the trial courts of Rajkot. She assisted her father in the Gulbarg Society Massacre Case of the 2002 Gujarat Riots, wherein Shri Abhay Bharadwaj represented all the 60-plus accused pro bono.
                        </p>

                        <p>
                            After the sudden demise of her father, Amruta took over the reins of the much-coveted law firm. Lately, she has been involved in many high-profile cases, such as the Liliya double murder case, the Rajmoti Industries custodial death case, the sitting MLA Kandhal Jadeja's just concluded escape from judicial custody case, amongst others.
                        </p>

                        <p>
                            Amruta was also the legal representative of former Gujarat Chief Minister Late Shri Vijaybhai Rupani and has represented Shri Rupani in the criminal defamation case filed by her against 4 Congress Leaders, leading to an apology by the four individuals against the said defamation. She has also served as the Convenor of Rajkot City BJP Legal Cell.
                        </p>

                        <p>
                            Today, Amruta and her team possibly boast the largest conglomeration of trial court lawyers in Gujarat. Abhay Bharadwaj & Associates is a strong group of 50+ lawyers, committed to serving society.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AmrutaBharadwaj;
