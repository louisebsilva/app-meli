import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductsList from './ProductsList';

describe('Products List component', () => {
  it('should render ProductList page correctly', () => {
    const history = createBrowserHistory();

    render(
      <BrowserRouter history={history} state="browser">
        <ProductsList history={history} state="product-list" />
      </BrowserRouter>
    );
    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });
});
