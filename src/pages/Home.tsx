import { motion } from 'framer-motion';
import {
  CalendarClock,
  Map,
  ShieldCheck,
  BellOff,
  Smartphone,
  Leaf,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Play,
  Apple
} from 'lucide-react';
import zubbaRider from '../assets/zubba-rider.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-zubba-green/10 blur-[100px]" />
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-zubba-amber/10 blur-[100px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-zubba-green text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zubba-green"></span>
              </span>
              Revolutionizing Waste Collection
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-zubba-charcoal leading-tight tracking-tight">
              Smarter Waste <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zubba-green to-emerald-600">
                Collection
              </span> for<br />
              Modern Communities
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              Schedule pickups, track collectors live, and enjoy cleaner communities with professionally managed waste collection directly from your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#waitlist" className="inline-flex justify-center items-center gap-2 bg-zubba-charcoal text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur opacity-70 cursor-not-allowed">
                  <Apple className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-500 font-bold leading-none mb-1">Coming Soon</div>
                    <div className="text-sm font-semibold text-gray-800 leading-none">App Store</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur opacity-70 cursor-not-allowed">
                  <Play className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-500 font-bold leading-none mb-1">Coming Soon</div>
                    <div className="text-sm font-semibold text-gray-800 leading-none">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main Phone Mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl border-[8px] border-gray-900 overflow-hidden z-20">
              <div className="w-full h-full bg-gray-50 relative">
                {/* Mock UI Header */}
                <div className="bg-zubba-green text-white p-6 pb-8 rounded-b-3xl">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-green-100">Next Pickup</p>
                      <h3 className="text-xl font-bold">Today, 10:30 AM</h3>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <CalendarClock className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                {/* Mock UI Map Area */}
                <div className="absolute top-[120px] left-4 right-4 bg-white rounded-2xl shadow-lg p-4 z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-zubba-amber/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-zubba-amber animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Kwame is on the way</p>
                      <p className="text-xs text-gray-500">Arriving in 15 mins</p>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-100 rounded-xl w-full relative overflow-hidden">
                    {/* Fake Map lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 20 Q 50 50 100 20 M 20 0 L 20 100 M 80 0 L 80 100" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center relative">
                        <div className="w-8 h-8 bg-zubba-green rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">Z</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 right-0 bg-white p-4 rounded-2xl shadow-xl z-30 glass"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-zubba-green" />
                </div>
                <div>
                  <p className="text-sm font-bold">Pickup Confirmed</p>
                  <p className="text-xs text-gray-500">Tues, 9:00 AM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-32 -left-10 bg-white p-4 rounded-2xl shadow-xl z-30 glass"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-zubba-amber" />
                </div>
                <div>
                  <p className="text-sm font-bold">Track Live</p>
                  <p className="text-xs text-gray-500">Real-time location</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zubba-charcoal mb-4">How Zubba Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to a cleaner, more organized community.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-green-200 via-amber-200 to-green-200 z-0"></div>

            {[
              {
                icon: <CalendarClock className="w-8 h-8 text-zubba-green" />,
                title: "Schedule Pickup",
                desc: "Choose a date and time that works best for you. No more waiting around.",
                delay: 0
              },
              {
                icon: <Map className="w-8 h-8 text-zubba-amber" />,
                title: "Track Collector",
                desc: "See your verified collector approaching on the live map in real-time.",
                delay: 0.2
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-zubba-green" />,
                title: "Waste Collected Professionally",
                desc: "Our trained, uniformed professionals safely remove and dispose of your waste.",
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative z-10 bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform -rotate-3 hover:rotate-0 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-zubba-charcoal mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-zubba-charcoal text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. LIVE TRACKING SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-zubba-green/20 to-transparent rounded-[3rem] transform -rotate-6"></div>
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 overflow-hidden">
                  <div className="h-[400px] bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
                    {/* Simulated Map */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#166534 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    {/* Simulated Route */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <path d="M 20 180 Q 80 150 100 100 T 180 20" fill="none" stroke="#166534" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                      <circle cx="180" cy="20" r="6" fill="#FACC15" />
                    </svg>

                    {/* Collector Pin */}
                    <motion.div
                      animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="absolute top-1/2 left-1/2"
                    >
                      <div className="bg-white p-2 rounded-full shadow-lg">
                        <MapPin className="text-zubba-green w-6 h-6" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Status Card */}
                  <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                        {/* Avatar placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-zubba-green to-emerald-800"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Kwame Osei</h4>
                        <p className="text-sm text-gray-500">Zubba verified collector</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 font-medium">ETA</p>
                      <p className="font-bold text-zubba-green text-lg">8 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-zubba-amber font-bold tracking-wider uppercase text-sm">
                <Smartphone className="w-5 h-5" />
                Live Tracking
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-zubba-charcoal leading-tight">
                Know exactly when your collector will arrive
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stop guessing and waiting. Our live tracking feature lets you see your assigned collector's real-time location, route, and precise estimated time of arrival.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Real-time GPS location updates",
                  "Automated arrival notifications",
                  "Verified collector profiles for security",
                  "Direct in-app communication"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-zubba-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONALISM SECTION */}
      <section className="py-24 bg-zubba-charcoal text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zubba-green/10 blur-[120px] rounded-full transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Trust, Regulation, and Absolute Professionalism
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are bringing dignity and standards to waste management. Every Zubba collector is thoroughly verified, professionally trained, and equipped with industry-standard safety gear.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-zubba-amber/20 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-zubba-amber" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Verified</h4>
                  <p className="text-sm text-gray-400">Strict background checks for all personnel.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-zubba-green/20 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-zubba-green" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Equipped</h4>
                  <p className="text-sm text-gray-400">Branded uniforms, gloves, and safety boots.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              {/* Professionalism Image */}
              <div className="w-full h-full bg-gray-800">
                <img src={zubbaRider} alt="Professional Zubba Collector" className="w-full h-auto object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zubba-charcoal mb-4">Why Choose Zubba?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of urban sanitation with features designed for your convenience.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <BellOff />, title: "No More Waiting for Sirens", desc: "Say goodbye to unpredictable horn honks. Schedule your pickup and we'll be there." },
              { icon: <CalendarClock />, title: "Reliable Scheduled Pickups", desc: "Consistent and dependable service. Set it and forget it." },
              { icon: <Map />, title: "Real-Time Tracking", desc: "Watch your collector arrive live on the map, just like a ride-hailing app." },
              { icon: <ShieldCheck />, title: "Verified Collectors", desc: "Rest easy knowing trusted, trained professionals are handling your waste." },
              { icon: <Leaf />, title: "Cleaner Communities", desc: "We ensure proper disposal, reducing illegal dumping and environmental hazards." },
              { icon: <Smartphone />, title: "Digital Convenience", desc: "Manage everything from your phone. Payments, scheduling, and support in one place." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-zubba-green mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. COMMUNITY IMPACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-zubba-green" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-zubba-charcoal mb-6">
              Building Cleaner, Healthier Communities in Ghana
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              By organizing and empowering the informal waste sector, we're not just providing a service—we're driving environmental sustainability and modern urban living.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="text-4xl font-extrabold text-zubba-green mb-2">100%</h4>
              <p className="text-gray-600 font-medium">Digital Accountability</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-gray-200">
              <h4 className="text-4xl font-extrabold text-zubba-amber mb-2">Safe</h4>
              <p className="text-gray-600 font-medium">Proper Disposal Practices</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-extrabold text-zubba-green mb-2">Empowered</h4>
              <p className="text-gray-600 font-medium">Collector Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAITLIST CTA SECTION */}
      <section id="waitlist" className="py-24 bg-zubba-charcoal relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-zubba-charcoal mb-4">
              Be Among the First to Experience Smarter Waste Collection
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the Zubba waitlist today and get notified the moment we launch in your neighborhood.
            </p>

            <form className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zubba-green focus:border-transparent outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zubba-green focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number (e.g. 050 000 0000)"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zubba-green focus:border-transparent outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-zubba-green text-white font-bold text-lg py-4 rounded-xl hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Join the Waitlist
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-6">By joining, you agree to our Terms of Service and Privacy Policy.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
