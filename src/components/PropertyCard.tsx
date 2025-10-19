import React from 'react';

export interface PropertyCardProps {
  title: string;
  price: string;
  image: string;
  tags?: string[];
  onDetailClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, price, image, tags = [], onDetailClick }) => (
  <div className="bg-white rounded shadow p-4 flex flex-col items-center">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-2" loading="lazy" />
    <h2 className="text-xl font-bold mb-1">{title}</h2>
    <p className="text-main font-semibold mb-2">{price}</p>
    <div className="flex gap-2 mb-2">
      {tags.map(tag => (
        <span key={tag} className="bg-accent text-xs px-2 py-1 rounded text-main">{tag}</span>
      ))}
    </div>
    <button
      className="bg-main text-white px-4 py-2 rounded hover:bg-blue-800"
      onClick={onDetailClick}
      aria-label="詳細を見る"
    >
      詳細を見る
    </button>
  </div>
);

PropertyCard.displayName = 'PropertyCard';
export default PropertyCard;
