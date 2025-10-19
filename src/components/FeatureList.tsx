import React from 'react';

export interface FeatureListProps {
  features: { icon: React.ReactNode; text: string }[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <ul className="flex flex-wrap gap-6 justify-center py-8">
    {features.map((f, i) => (
      <li key={i} className="flex items-center gap-2">
        <span className="text-2xl">{f.icon}</span>
        <span className="text-main font-semibold">{f.text}</span>
      </li>
    ))}
  </ul>
);

FeatureList.displayName = 'FeatureList';
export default FeatureList;
