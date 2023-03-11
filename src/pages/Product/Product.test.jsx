import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from './Product';

it('should render ProductDetail page correctly', () => {
  render(<ProductDetail />, { wrapper: BrowserRouter });
  expect(screen.getByTestId('product-detail')).toBeInTheDocument();
});
