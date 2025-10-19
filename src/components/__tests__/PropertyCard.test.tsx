import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard, { PropertyCardProps } from '../PropertyCard';

describe('PropertyCard', () => {
  const defaultProps: PropertyCardProps = {
    title: 'サンプル物件',
    price: '3,000万円',
    image: '/assets/sample.jpg',
    tags: ['駅近', 'リフォーム済'],
    onDetailClick: vi.fn(),
  };

  it('renders title, price, and first image', () => {
    render(<PropertyCard {...defaultProps} />);
    expect(screen.getByText('サンプル物件')).toBeInTheDocument();
    expect(screen.getByText('3,000万円')).toBeInTheDocument();
    expect(screen.getByAltText('サンプル物件')).toHaveAttribute('src', '/assets/sample.jpg');
  });

  it('renders tags', () => {
    render(<PropertyCard {...defaultProps} />);
    expect(screen.getByText('駅近')).toBeInTheDocument();
    expect(screen.getByText('リフォーム済')).toBeInTheDocument();
  });

  it('calls onDetailClick when button is clicked', () => {
    render(<PropertyCard {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: '詳細を見る' }));
    expect(defaultProps.onDetailClick).toHaveBeenCalled();
  });
});
