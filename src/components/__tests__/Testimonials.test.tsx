import { render, screen } from '@testing-library/react';
import Testimonials, { TestimonialsProps } from '../Testimonials';

describe('Testimonials', () => {
  const testimonials = [
    { name: '山田太郎', comment: 'とても親切な対応でした。' },
    { name: '佐藤花子', comment: '物件の説明が分かりやすかったです。' },
  ];

  it('renders all testimonials', () => {
    render(<Testimonials testimonials={testimonials} />);
    expect(screen.getByText('とても親切な対応でした。')).toBeInTheDocument();
    expect(screen.getByText('物件の説明が分かりやすかったです。')).toBeInTheDocument();
    expect(screen.getByText('山田太郎')).toBeInTheDocument();
    expect(screen.getByText('佐藤花子')).toBeInTheDocument();
  });
});
