import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

it('should render ProductList page correctly', () => {
  render(<ProductList />);
  expect(screen.getByTestId('product-list')).toBeInTheDocument();
});
