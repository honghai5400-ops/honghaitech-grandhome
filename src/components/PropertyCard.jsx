import React from 'react';
import { MapPin, Bed, Maximize, LayoutGrid, Tag } from 'lucide-react';

const PropertyCard = ({ title, image, location, beds, size, rooms, price, badge }) => {
  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group border border-gray-100 flex flex-col hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-8 left-8 bg-white backdrop-blur-md px-5 py-2 rounded-2xl text-[10px] font-black text-primary shadow-2xl uppercase tracking-[0.2em] z-10">
          {badge || 'Nổi Bật'}
        </div>
        <div className="absolute top-8 right-8 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-white shadow-2xl uppercase tracking-[0.1em] z-10 flex items-center gap-1">
          <Tag size={10} strokeWidth={3} />
          Đang Bán
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="text-primary" size={16} strokeWidth={2.5} />
            <span className="text-xs font-black uppercase tracking-widest">{location}</span>
          </div>
          <h3 className="text-2xl font-black text-text-primary leading-tight group-hover:text-primary transition-colors">{title || 'Biệt Thự Cao Cấp'}</h3>
        </div>

        <div className="flex justify-between items-center py-6 border-y border-gray-100">
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Phòng Ngủ</span>
            <div className="flex items-center gap-2">
              <Bed className="text-primary" size={20} strokeWidth={2.5} />
              <span className="text-base font-black text-text-primary">{beds}</span>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-100"></div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Diện Tích</span>
            <div className="flex items-center gap-2">
              <Maximize className="text-primary" size={20} strokeWidth={2.5} />
              <span className="text-base font-black text-text-primary">{size}</span>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-100"></div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Phòng</span>
            <div className="flex items-center gap-2">
              <LayoutGrid className="text-primary" size={20} strokeWidth={2.5} />
              <span className="text-base font-black text-text-primary">{rooms}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Giá Từ</span>
            <span className="text-3xl font-black text-text-primary tracking-tighter">{price} tỷ</span>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 text-sm uppercase tracking-widest">
            Chi Tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
