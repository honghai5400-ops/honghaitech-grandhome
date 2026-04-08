import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', path: '#' },
    { name: 'Bất Động Sản', path: '#properties' },
    { name: 'Môi Giới', path: '#' },
    { name: 'Về Chúng Tôi', path: '#about' },
    { name: 'Tin Tức', path: '#news' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-gray-100/80' : 'bg-white/70 backdrop-blur-2xl border-b border-gray-100/50'}`}>
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-[1.25rem] flex items-center justify-center p-2 shadow-[0_10px_30px_-5px_rgba(30,74,233,0.2)] group-hover:scale-110 transition-all duration-500 border border-gray-100">
            <img src="/favicon.svg" alt="HongHaiTech GrandHome Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-black text-text-primary tracking-tighter uppercase">Grand<span className="text-primary italic font-serif lowercase border-b-2 border-primary/20">Home</span></span>
        </div>

        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-xs font-black text-text-secondary hover:text-primary transition-all duration-300 relative group uppercase tracking-[0.15em]">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:1900636466" className="flex items-center gap-2 text-xs font-black text-text-primary hover:text-primary transition-all duration-300 uppercase tracking-widest">
            <Phone size={14} strokeWidth={3} />
            1900 636 466
          </a>
          <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-black text-xs shadow-[0_15px_40px_-10px_rgba(30,74,233,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(30,74,233,0.6)] transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
            Tư Vấn Ngay
          </button>
        </div>

        <button className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl text-text-primary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen py-8 shadow-2xl shadow-black/5' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-6 px-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-lg font-black text-text-primary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-gray-50 my-2"></div>
          <a href="tel:1900636466" className="w-full text-center py-4 text-text-primary font-bold">📞 1900 636 466</a>
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">Tư Vấn Ngay</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
