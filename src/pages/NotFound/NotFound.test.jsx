import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should render NotFound page correctly', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(screen.getByText('Página no encontrada')).toBeInTheDocument();
  });
});
