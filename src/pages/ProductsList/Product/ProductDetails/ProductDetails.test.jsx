import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';

describe('Products Details page', () => {
  it('should render ProductDetails page', () => {
    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    );
    expect(screen.getByTestId('product-details')).toBeInTheDocument();
  });
});
