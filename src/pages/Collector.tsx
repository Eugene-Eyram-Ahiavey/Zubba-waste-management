import { motion } from 'framer-motion';
import { Truck, TrendingUp, ShieldCheck, HardHat } from 'lucide-react';
import zubbaRider from '../assets/zubba-rider.png';

const Collector = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zubba-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-zubba-amber/20 text-zubba-amber text-sm font-bold mb-6">
                Join Our Fleet
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Turn Your Tricycle into a Thriving Business
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Join the Zubba network. Get more clients, earn steady income, and receive professional gear to work safely.
              </p>
              <a href="#apply" className="inline-block bg-zubba-amber text-zubba-charcoal font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors">
                Apply to be a Collector
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <img src={zubbaRider} alt="Zubba Collector" className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zubba-charcoal mb-4">Why Partner with Zubba?</h2>
            <p className="text-gray-600">We provide the tools and clients; you provide the service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-zubba-green mb-6" />
              <h3 className="text-xl font-bold mb-3">More Income</h3>
              <p className="text-gray-600">Access a larger pool of customers and guaranteed payments through our app. No more haggling.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <HardHat className="w-12 h-12 text-zubba-amber mb-6" />
              <h3 className="text-xl font-bold mb-3">Professional Gear</h3>
              <p className="text-gray-600">Receive branded uniforms, helmets, gloves, and safety boots. Look professional and stay safe.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <ShieldCheck className="w-12 h-12 text-zubba-green mb-6" />
              <h3 className="text-xl font-bold mb-3">Steady Jobs</h3>
              <p className="text-gray-600">Get regular, scheduled pickups. Work on a predictable schedule instead of roaming the streets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-zubba-charcoal mb-8 text-center">Collector Application</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zubba-green outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zubba-green outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zubba-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you own a tricycle (aboboyaa)?</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zubba-green outline-none">
                  <option>Yes</option>
                  <option>No, I rent one</option>
                  <option>No, I need one</option>
                </select>
              </div>
              <button className="w-full bg-zubba-green text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collector;
