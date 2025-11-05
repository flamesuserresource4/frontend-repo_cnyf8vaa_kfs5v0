import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = ({ current, onNavigate }) => {
  const linkClass = (key) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      current === key ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
    }`;

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('acasa')}>
            <div className="p-2 bg-blue-600 text-white rounded-md shadow-sm">
              <Car size={20} />
            </div>
            <div>
              <p className="text-sm leading-tight text-gray-500">Dealer Auto</p>
              <h1 className="text-lg font-semibold tracking-tight">Mașini Rulate Podoleni</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <button className={linkClass('acasa')} onClick={() => onNavigate('acasa')}>Acasă</button>
            <button className={linkClass('masini')} onClick={() => onNavigate('masini')}>Mașini</button>
            <button className={linkClass('finantare')} onClick={() => onNavigate('finantare')}>Finanțare</button>
            <button className={linkClass('contact')} onClick={() => onNavigate('contact')}>Contact</button>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+40700111222" className="flex items-center gap-2 text-blue-700 font-medium">
              <Phone size={18} /> +40 700 111 222
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-2 flex items-center gap-4 overflow-x-auto">
          <button className={linkClass('acasa')} onClick={() => onNavigate('acasa')}>Acasă</button>
          <button className={linkClass('masini')} onClick={() => onNavigate('masini')}>Mașini</button>
          <button className={linkClass('finantare')} onClick={() => onNavigate('finantare')}>Finanțare</button>
          <button className={linkClass('contact')} onClick={() => onNavigate('contact')}>Contact</button>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
          <MapPin size={16} /> Podoleni, Neamț • Program: L-V 09:00 - 18:00 • S 10:00 - 14:00
          <span className="ml-auto hidden sm:flex items-center gap-2"><Mail size={16} /> contact@masini-podoleni.ro</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
