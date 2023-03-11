import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductList from './ProductList';

it('should render ProductList page correctly', () => {
  const history = createBrowserHistory();

  render(
    <BrowserRouter history={history} state="browser">
      <ProductList history={history} state="product-list" />
    </BrowserRouter>
  );
  expect(screen.getByTestId('product-list')).toBeInTheDocument();
});
