import React from 'react';
import { Star, Check } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { 
        name: 'Nguyễn Văn Nam', 
        role: 'Chủ sở hữu biệt thự cao cấp', 
        content: 'GrandHome đã giúp tôi tìm thấy căn biệt thự hoàn hảo cho gia đình trong thời gian ngắn kỷ lục. Nền tảng này vô cùng trực quan và dịch vụ hỗ trợ thật đẳng cấp.', 
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' 
    },
    { 
        name: 'Trần Thị Thu Thảo', 
        role: 'Nhà đầu tư bất động sản', 
        content: 'Những nghiên cứu thị trường hàng đầu và khả năng tiếp cận trực tiếp với các chủ đầu tư uy tín đã mang lại cho tôi sự tự tin để thực hiện khoản đầu tư lớn nhất từ trước đến nay.', 
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' 
    },
    { 
        name: 'Lê Hoàng Minh', 
        role: 'Cố vấn kiến trúc', 
        content: 'Tôi đã làm việc với nhiều trang web bất động sản, nhưng sự lựa chọn và cảm giác cao cấp của GrandHome thực sự là vô song trên thị trường hiện nay.', 
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' 
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50/50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <h2 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs text-center">Phản hồi từ khách hàng</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          <h3 className="text-4xl md:text-[60px] font-black text-text-primary leading-[0.85] tracking-tighter">
            Chia sẻ từ những <br />
            <span className="text-primary italic font-serif">gia chủ hạnh phúc.</span>
          </h3>
          <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
            Những câu chuyện có thật từ những người đã tìm thấy không gian sống hoàn hảo của mình thông qua nền tảng tuyển chọn các bất động sản cao cấp của chúng tôi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(30,74,233,0.1)] transition-all duration-700 border border-gray-100 flex flex-col gap-6 relative group hover:-translate-y-2">
              <div className="flex gap-1.5 transition-transform duration-500 group-hover:scale-105 origin-left">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-text-primary text-[18px] font-black leading-tight italic relative z-10 tracking-tight transition-colors group-hover:text-primary">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-6 pt-4 mt-auto">
                <div className="relative">
                    <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-20 h-20 rounded-[2rem] object-cover border-4 border-white shadow-xl transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-primary/40">
                        <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-text-primary tracking-tight text-xl">{review.name}</h4>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
