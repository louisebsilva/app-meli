import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';

it('should render ProductList page correctly', () => {
  render(<ProductList />, { wrapper: BrowserRouter });
  expect(screen.getByTestId('product-list')).toBeInTheDocument();
});
