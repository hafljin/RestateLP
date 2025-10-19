import React from 'react';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaLabel, onCTAClick }) => (
  <section className="bg-main text-white py-16 px-4 text-center relative">
    <div className="absolute inset-0 bg-black opacity-30 -z-10" />
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-lg mb-8">{subtitle}</p>
    <button
      className="bg-accent text-main font-semibold px-6 py-3 rounded shadow hover:bg-yellow-400 transition"
      onClick={onCTAClick}
      aria-label={ctaLabel}
    >
      {ctaLabel}
    </button>
  </section>
);

HeroSection.displayName = 'HeroSection';
export default HeroSection;
