import React, { useState } from 'react';

export interface PropertyCarouselProps {
  images: string[];
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const handleNext = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <button aria-label="前へ" onClick={handlePrev} className="absolute left-2 bg-main text-white px-2 py-1 rounded">◀</button>
      <img src={images[current]} alt={`物件画像${current + 1}`} className="h-40 object-cover rounded" loading="lazy" />
      <button aria-label="次へ" onClick={handleNext} className="absolute right-2 bg-main text-white px-2 py-1 rounded">▶</button>
    </div>
  );
};

PropertyCarousel.displayName = 'PropertyCarousel';
export default PropertyCarousel;
