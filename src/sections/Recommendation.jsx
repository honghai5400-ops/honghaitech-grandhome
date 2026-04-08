import React from 'react';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import prop1 from '../assets/prop1.png';
import prop2 from '../assets/prop2.png';
import prop3 from '../assets/prop3.png';

const Recommendation = () => {
  const properties = [
    {
      id: 1,
      title: 'Biệt Thự Vườn Hà Nội',
      image: prop1,
      location: 'Tây Hồ, Hà Nội',
      beds: 4,
      size: '320m²',
      rooms: 6,
      price: '18,5',
      badge: 'Nổi Bật'
    },
    {
      id: 2,
      title: 'Penthouse Sky Villa',
      image: prop2,
      location: 'Quận 1, TP. Hồ Chí Minh',
      beds: 3,
      size: '250m²',
      rooms: 5,
      price: '32,0',
      badge: 'Độc Quyền'
    },
    {
      id: 3,
      title: 'Biệt Thự Biển Đà Nẵng',
      image: prop3,
      location: 'Ngũ Hành Sơn, Đà Nẵng',
      beds: 5,
      size: '480m²',
      rooms: 8,
      price: '25,0',
      badge: 'View Biển'
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" id="properties">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Tuyển Chọn Đặc Biệt</h2>
            </div>
            <h3 className="text-4xl md:text-[60px] font-black text-text-primary leading-[0.85] tracking-tighter">
              Khám phá<br />
              <span className="text-primary italic font-serif">bất động sản độc quyền</span>
            </h3>
          </div>
          <button className="group flex items-center gap-3 bg-white border-2 border-primary/20 text-text-primary hover:border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-[1.5rem] font-bold transition-all duration-500 shadow-xl shadow-transparent hover:shadow-primary/20">
            Xem Tất Cả Bất Động Sản
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map(prop => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
