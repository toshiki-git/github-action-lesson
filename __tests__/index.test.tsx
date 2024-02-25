import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText(/Get started by editing/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the Next.js logo', () => {
    render(<Home />);

    const image = screen.getByAltText('Next.js Logo');
    expect(image).toBeInTheDocument();
  });

});