import { render, screen } from '@testing-library/react';
import FeatureList, { FeatureListProps } from '../FeatureList';

describe('FeatureList', () => {
  const features = [
    { icon: '🏆', text: '実績多数' },
    { icon: '🚃', text: '駅近物件' },
  ];

  it('renders all features', () => {
    render(<FeatureList features={features} />);
    expect(screen.getByText('実績多数')).toBeInTheDocument();
    expect(screen.getByText('駅近物件')).toBeInTheDocument();
  });
});
