import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the app correctly', () => {
  render(<App />);
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
