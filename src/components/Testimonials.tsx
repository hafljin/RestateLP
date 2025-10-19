import React from 'react';

export interface TestimonialsProps {
  testimonials: { name: string; comment: string }[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <div className="py-8">
    <h3 className="text-xl font-bold mb-4 text-center">お客様の声</h3>
    <div className="flex gap-4 overflow-x-auto">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded shadow p-4 min-w-[220px]">
          <p className="mb-2">"{t.comment}"</p>
          <span className="text-main font-semibold">{t.name}</span>
        </div>
      ))}
    </div>
  </div>
);

Testimonials.displayName = 'Testimonials';
export default Testimonials;
