import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, AtSign, Share2 } from 'lucide-react';
import zubbaLogo from '../assets/zubba.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zubba-charcoal text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div>
                <img src={zubbaLogo} alt="Zubba Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Zubba</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Digitizing and modernizing waste collection in Ghana. Smarter scheduling, real-time tracking, and professional service for cleaner communities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zubba-amber hover:text-zubba-charcoal transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zubba-amber hover:text-zubba-charcoal transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zubba-amber hover:text-zubba-charcoal transition-colors">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zubba-amber hover:text-zubba-charcoal transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-zubba-amber transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-zubba-amber transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/collector" className="hover:text-zubba-amber transition-colors text-sm">Become a Collector</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-zubba-amber transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="hover:text-zubba-amber transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-zubba-amber transition-colors text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-zubba-amber transition-colors text-sm">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zubba-amber shrink-0 mt-0.5" />
                <span className="text-sm">Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zubba-amber shrink-0" />
                <span className="text-sm">+233 (0) 557468245</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zubba-amber shrink-0" />
                <span className="text-sm">zubbawastemanagement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Zubba Technology. All rights reserved.</p>
          <p>Designed for cleaner communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
