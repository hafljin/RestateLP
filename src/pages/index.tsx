import React from 'react';
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

const handleDetailClick = (id: string) => {
  alert(`物件詳細: ${id}`);
};

const mockSubmit = async (data: any) => {
  return new Promise<void>((resolve) => setTimeout(resolve, 500));
};

const IndexPage: React.FC = () => (
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
          <div key={p.id}>
            <PropertyCard
              title={p.title}
              price={p.price}
              image={p.images[0]}
              tags={p.tags}
              onDetailClick={() => handleDetailClick(p.id)}
            />
            <PropertyCarousel images={p.images} />
          </div>
        ))}
      </div>
    </section>
    <FeatureList features={features} />
    <Testimonials testimonials={testimonials} />
    <ContactForm onSubmit={mockSubmit} properties={properties.map((p: any) => p.title)} />
    <Footer />
  </main>
);

IndexPage.displayName = 'IndexPage';
export default IndexPage;
