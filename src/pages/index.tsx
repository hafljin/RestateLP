import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import PropertyCarousel from '../components/PropertyCarousel';
import FeatureList from '../components/FeatureList';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import properties from '../data/properties.json';

const features = [
  { icon: '🏆', text: '実績多数' },
  { icon: '🚃', text: '駅近物件' },
  { icon: '🐶', text: 'ペット可' },
];

const testimonials = [
  { name: '山田太郎', comment: 'とても親切な対応でした。' },
  { name: '佐藤花子', comment: '物件の説明が分かりやすかったです。' },
];

const handleCTAClick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

type PropertyDetail = typeof properties[0] | null;

const mockSubmit = async (data: any) => {
  return new Promise<void>((resolve) => setTimeout(resolve, 500));
};

const IndexPage: React.FC = () => {
  const [modal, setModal] = useState<PropertyDetail>(null);
  const handleDetailClick = (id: string) => {
    const prop = properties.find((p: any) => p.id === id);
    setModal(prop || null);
  };
  const closeModal = () => setModal(null);
  return (
    <main className="bg-bg min-h-screen">
    <HeroSection
      title="理想の住まいを見つけよう"
      subtitle="駅近・リフォーム済・ペット可物件多数掲載"
      ctaLabel="お問い合わせ"
      onCTAClick={handleCTAClick}
    />
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-main">おすすめ物件</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p: any) => (
          <PropertyCard
            key={p.id}
            title={p.title}
            price={p.price}
            image={p.images[0]}
            tags={p.tags}
            onDetailClick={() => handleDetailClick(p.id)}
          />
        ))}
        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-8 max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-main" onClick={closeModal} aria-label="閉じる">×</button>
              <h3 className="text-xl font-bold mb-2">{modal.title}</h3>
              <img src={modal.images[0]} alt={modal.title} className="w-full h-40 object-cover rounded mb-2" />
              <p className="mb-2">{modal.description}</p>
              <div className="mb-2">エリア: {modal.area}</div>
              <div className="mb-2">広さ: {modal.floor_area}</div>
              <div className="flex gap-2 mb-2">
                {modal.tags.map((tag: string) => (
                  <span key={tag} className="bg-accent text-xs px-2 py-1 rounded text-main">{tag}</span>
                ))}
              </div>
              <PropertyCarousel images={modal.images} />
            </div>
          </div>
        )}
      </div>
    </section>
    <FeatureList features={features} />
    <Testimonials testimonials={testimonials} />
  <ContactForm onSubmit={mockSubmit} properties={properties.map((p: any) => p.title)} recaptcha />
    <Footer />
  </main>
  );
}

IndexPage.displayName = 'IndexPage';
export default IndexPage;
