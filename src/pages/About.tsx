import { motion } from 'framer-motion';
import { Leaf, Award, Recycle } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zubba-green text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              To revolutionize waste collection in Ghana by organizing, digitizing, and modernizing the traditional "aboboyaa" system into a reliable, professional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-zubba-amber/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Recycle className="w-24 h-24 text-gray-300" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-zubba-charcoal">The Story of Zubba</h2>
              <p className="text-gray-600 leading-relaxed">
                For years, communities have relied on the informal sector for waste collection. The familiar sound of the "aboboyaa" horn is a staple of urban living in Ghana. However, the system has lacked structure, predictability, and professional standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Zubba was born out of a desire to bridge the gap between technology and traditional waste management. We don't want to replace the "aboboyaa" riders; we want to empower them. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                By equipping them with our platform, professional gear, and training, we are upgrading the entire ecosystem to benefit both the collectors and the households they serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zubba-charcoal mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Leaf className="w-8 h-8 text-zubba-green" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">Promoting a cleaner environment through proper and consistent waste disposal practices.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Award className="w-8 h-8 text-zubba-amber" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dignity</h3>
              <p className="text-gray-600">Elevating the status of waste collectors with professional uniforms, training, and respect.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Recycle className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">Using technology to solve everyday problems and make urban living seamless.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
