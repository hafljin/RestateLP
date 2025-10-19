import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection, { HeroSectionProps } from '../HeroSection';

describe('HeroSection', () => {
  const defaultProps: HeroSectionProps = {
    title: '見出しテスト',
    subtitle: 'サブテキスト',
    ctaLabel: 'お問い合わせ',
    onCTAClick: vi.fn(),
  };

  it('renders title, subtitle, and CTA', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('見出しテスト')).toBeInTheDocument();
    expect(screen.getByText('サブテキスト')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'お問い合わせ' })).toBeInTheDocument();
  });

  it('calls onCTAClick when CTA is clicked', () => {
    render(<HeroSection {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'お問い合わせ' }));
    expect(defaultProps.onCTAClick).toHaveBeenCalled();
  });
});
