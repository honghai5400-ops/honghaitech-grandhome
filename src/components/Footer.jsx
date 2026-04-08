import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

// Custom social icons
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
    return (
      <footer className="bg-[#050B15] text-white pt-16 pb-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-primary rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl shadow-[0_10px_30px_-5px_rgba(30,74,233,0.4)]">
                  H
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">Grand<span className="text-primary italic font-serif lowercase border-b-2 border-primary/20">Home</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed text-base font-medium">
                Biến hành trình tìm kiếm ngôi nhà của bạn thành một trải nghiệm cao cấp. chúng tôi mang đến những bất động sản độc quyền nhất trên toàn thế giới.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: FacebookIcon },
                  { name: 'Twitter', icon: TwitterIcon },
                  { name: 'Instagram', icon: InstagramIcon },
                  { name: 'LinkedIn', icon: LinkedinIcon }
                ].map((social) => (
                  <a key={social.name} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 border border-white/5">
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-black mb-6 tracking-tight">Dịch Vụ</h4>
              <ul className="space-y-3">
                {['Mua Bất Động Sản', 'Thuê Bất Động Sản', 'Bán Bất Động Sản', 'Cẩm Nang Nhà Đất'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2 group text-sm">
                      <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-black mb-6 tracking-tight">Hỗ Trợ</h4>
              <ul className="space-y-4">
                 <li className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin size={18} />
                    </div>
                    <span className="font-medium text-sm">68 Cầu Giấy, Hà Nội, Việt Nam</span>
                 </li>
                 <li className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone size={18} />
                    </div>
                    <span className="font-medium">+84 1900 636 466</span>
                 </li>
                 <li className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={18} />
                    </div>
                    <span className="font-medium">contact@grandhome.vn</span>
                 </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-black mb-6 tracking-tight">Bản Tin</h4>
              <p className="text-gray-400 mb-4 font-medium text-sm">
                Đăng ký để nhận danh sách bất động sản chọn lọc và thông tin thị trường.
              </p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-all pr-16 text-xs font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark w-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              © 2026 HONGHAITECH GRANDHOME. TINH HOA BẤT ĐỘNG SẢN TOÀN CẦU.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Chính Sách Bảo Mật</a>
              <a href="#" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Điều Khoản Dịch Vụ</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
