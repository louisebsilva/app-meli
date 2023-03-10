import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should render the component correctly', () => {
    render(<Header />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(screen.getByTestId('icon-search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Nunca dejes de buscar')
    ).toBeInTheDocument();
  });
});
