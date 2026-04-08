import React from 'react';
import { Search, ShieldCheck, MapPin, Building } from 'lucide-react';

const ServiceIcons = () => {
  const services = [
    { title: 'Kiểm định nhà', icon: <Search size={32} strokeWidth={2.5} /> },
    { title: 'Bảo hiểm tài sản', icon: <ShieldCheck size={32} strokeWidth={2.5} /> },
    { title: 'Vị trí đắc địa', icon: <MapPin size={32} strokeWidth={2.5} /> },
    { title: 'Dự án & Đất nền', icon: <Building size={32} strokeWidth={2.5} /> },
  ];

  return (
    <div className="bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-around gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-5 group cursor-pointer">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
                {service.icon}
              </div>
              <span className="text-base font-black text-text-primary tracking-tight group-hover:text-primary transition-colors">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcons;
