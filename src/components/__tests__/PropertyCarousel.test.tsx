import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCarousel, { PropertyCarouselProps } from '../PropertyCarousel';

describe('PropertyCarousel', () => {
  const defaultProps: PropertyCarouselProps = {
    images: ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'],
  };

  it('renders first image', () => {
    render(<PropertyCarousel {...defaultProps} />);
    expect(screen.getByAltText('物件画像1')).toHaveAttribute('src', '/assets/1.jpg');
  });

  it('slides images on next/prev click', () => {
    render(<PropertyCarousel {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('次へ'));
    expect(screen.getByAltText('物件画像2')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('前へ'));
    expect(screen.getByAltText('物件画像1')).toBeInTheDocument();
  });
});
