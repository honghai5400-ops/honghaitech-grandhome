import React from 'react';
import { ShieldCheck, Sparkles, BarChart3 } from 'lucide-react';
import interiorImg from '../assets/interior.png';

const WhyChooseUs = () => {
  const benefits = [
    { 
      title: 'Chủ Đầu Tư Uy Tín', 
      desc: 'Hợp tác với chúng tôi đồng nghĩa với việc bạn làm việc với những đối tác phát triển bất động sản đáng tin cậy nhất trong ngành.', 
      icon: <ShieldCheck size={28} strokeWidth={2.5} />
    },
    { 
      title: 'Bất Động Sản Kiệt Tác', 
      desc: 'Danh mục của chúng tôi chỉ bao gồm những căn hộ sang trọng, hiện đại và có giá trị tiềm năng cao nhất trên thị trường hiện nay.', 
      icon: <Sparkles size={28} strokeWidth={2.5} />
    },
    { 
      title: 'Nghiên Cứu Thị Trường', 
      desc: 'Những phân tích dựa trên dữ liệu của chúng tôi đảm bảo rằng bạn luôn đưa ra những quyết định sáng suốt và đạt được giá trị tối đa.', 
      icon: <BarChart3 size={28} strokeWidth={2.5} />
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-50">
              <img 
                src={interiorImg} 
                alt="Nội thất sang trọng" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] hover:scale-110" 
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-1/2 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute top-20 -left-6 w-32 h-32 bg-primary/10 rounded-[3rem] rotate-12 -z-0"></div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <h2 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Tại sao chọn chúng tôi</h2>
              </div>
              <h3 className="text-4xl md:text-[60px] font-black text-text-primary leading-[0.85] tracking-tighter">
                Tìm kiếm mảnh <br />
                <span className="text-primary italic font-serif">ghép hoàn hảo.</span>
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl font-medium">
                Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi kết nối con người với không gian sống mơ ước thông qua sự đổi mới và niềm tin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-8 group">
                  <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_20px_40px_-10px_rgba(30,74,233,0.4)] transition-all duration-500 group-hover:scale-110">
                    <div className="text-primary group-hover:text-white transition-colors duration-500 scale-125">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                    <h4 className="text-2xl font-black text-text-primary tracking-tight transition-colors group-hover:text-primary">
                      {benefit.title}
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed max-w-md font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
