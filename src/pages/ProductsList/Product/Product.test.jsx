import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

const dataMock = {
  data: {
    thumbnail: 'thumbnail-test',
    price: 1000,
    title: 'Pokemon',
    address: 'Buenos Aires',
  },
};

describe('Product component', () => {
  it('should render Product page correctly', () => {
    render(<Product data={dataMock} />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('product-section')).toBeInTheDocument();
    expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
    expect(screen.getByTestId('section-detail')).toBeInTheDocument();
    expect(screen.getByTestId('product-price')).toBeInTheDocument();
    expect(screen.getByTestId('address-info')).toBeInTheDocument();
  });
});