import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders company info and license', () => {
    render(<Footer />);
    expect(screen.getByText(/株式会社Restate/)).toBeInTheDocument();
    expect(screen.getByText(/東京都知事/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
});
