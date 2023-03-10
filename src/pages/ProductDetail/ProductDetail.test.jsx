import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';

it('should render ProductDetail page correctly', () => {
  render(<ProductDetail />);
  expect(screen.getByTestId('product-detail')).toBeInTheDocument();
});
