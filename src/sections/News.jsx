import React from 'react';
import { ArrowRight } from 'lucide-react';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

const News = () => {
  const posts = [
    { 
        title: 'Vẻ đẹp tiềm ẩn của kiến trúc hiện đại', 
        date: '24 Tháng 3, 2026', 
        tag: 'Thiết kế',
        image: news1 
    },
    { 
        title: 'Lời khuyên tốt nhất khi mua căn hộ cao cấp lần đầu', 
        date: '20 Tháng 3, 2026', 
        tag: 'Hướng dẫn',
        image: news2 
    },
    { 
        title: 'Xu hướng thị trường bất động sản toàn cầu 2026', 
        date: '15 Tháng 3, 2026', 
        tag: 'Xu hướng',
        image: news3 
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" id="news">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Tin Tức Mới Nhất</h2>
            </div>
            <h3 className="text-4xl md:text-[60px] font-black text-text-primary leading-[0.85] tracking-tighter">
              Cập nhật những <br />
              <span className="text-primary italic font-serif">thông tin mới nhất.</span>
            </h3>
          </div>
          <button className="group flex items-center gap-4 bg-white border-2 border-gray-100 text-text-primary hover:border-primary hover:bg-primary hover:text-white px-10 py-5 rounded-2xl font-black transition-all duration-500 shadow-xl shadow-transparent hover:shadow-primary/20 whitespace-nowrap uppercase tracking-widest text-xs">
            Xem Tất Cả
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={3} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_80px_-15px_rgba(30,74,233,0.2)] transition-all duration-700">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black text-primary shadow-2xl uppercase tracking-[0.2em] transition-transform duration-500 group-hover:scale-110">
                  {post.tag}
                </div>
              </div>
              
              <div className="space-y-3 px-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{post.date}</p>
                </div>
                <h4 className="text-2xl font-black text-text-primary group-hover:text-primary transition-all duration-500 leading-tight tracking-tighter">
                  {post.title}
                </h4>
                <p className="text-text-secondary font-medium text-base leading-relaxed line-clamp-2 transition-colors group-hover:text-gray-900">
                  Đi sâu vào thế giới bất động sản cao cấp đang phát triển và các xu hướng định hình môi trường sống hiện đại của chúng ta...
                </p>
                <div className="flex items-center gap-4 text-primary font-black text-[10px] pt-2 group-hover:gap-6 transition-all duration-500 uppercase tracking-widest">
                  Đọc Thêm
                  <ArrowRight size={16} strokeWidth={4} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
