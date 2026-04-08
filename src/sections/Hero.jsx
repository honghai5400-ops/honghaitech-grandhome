import React from 'react';
import { MapPin, Home, Search, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-[#0A1A2F]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bất Động Sản Cao Cấp Việt Nam"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent"></div>
      </div>

      {/* Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 opacity-10">
        <span className="text-[15rem] md:text-[25rem] font-black text-white leading-none whitespace-nowrap tracking-tighter uppercase">
          GRANDHOME
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl pt-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/80 mt-0.5">Đơn Vị Bất Động Sản #1 Việt Nam 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-[100px] font-black text-white leading-[0.82] tracking-tighter mb-6">
            Tìm ngôi nhà <br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(30,74,233,0.4)]">mơ ước</span> <br />
            <span className="text-white/40 italic font-serif text-4xl md:text-7xl">của bạn.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
            Chúng tôi cung cấp dịch vụ bất động sản toàn diện, từ tư vấn đến pháp lý. Khám phá bộ sưu tập bất động sản cao cấp được tuyển chọn kỹ lưỡng trên khắp Việt Nam.
          </p>

          {/* Search Bar */}
          <div className="bg-white/5 backdrop-blur-3xl p-3 md:p-5 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-5xl">
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2 px-4">
              <div className="flex flex-col py-3 border-b md:border-b-0 md:border-r border-white/10 last:border-0 md:pr-8">
                <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Khu Vực</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={16} strokeWidth={3} />
                  </div>
                  <input type="text" placeholder="Hà Nội, TP.HCM..." className="bg-transparent text-white font-black text-lg w-full outline-none placeholder:text-gray-700" />
                </div>
              </div>
              <div className="flex flex-col py-3 border-b md:border-b-0 md:border-r border-white/10 last:border-0 md:px-8">
                <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Loại Bất Động Sản</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Home size={16} strokeWidth={3} />
                  </div>
                  <input type="text" placeholder="Biệt thự, Căn hộ..." className="bg-transparent text-white font-black text-lg w-full outline-none placeholder:text-gray-700" />
                </div>
              </div>
              <div className="flex flex-col py-3 md:pl-8">
                <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Mức Giá</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ChevronDown size={16} strokeWidth={3} />
                  </div>
                  <input type="text" placeholder="1 - 5 tỷ đồng" className="bg-transparent text-white font-black text-lg w-full outline-none placeholder:text-gray-700" />
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-[2rem] font-black text-base shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group">
              <Search size={24} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
              Tìm Kiếm
            </button>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-10 right-10 hidden xl:flex gap-12 z-10">
        {[
          { label: 'Bất Động Sản', value: '1.200+' },
          { label: 'Khách Hàng', value: '4.000+' },
          { label: 'Tỉnh Thành', value: '25+' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col text-right">
            <span className="text-3xl font-black text-white">{stat.value}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
