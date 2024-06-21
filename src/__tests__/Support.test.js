import React from 'react';
import { render } from '@testing-library/react';
import Support from '../components/Support';

test('renders Support component with correct data', () => {
  const { getByText } = render(<Support />);

  expect(getByText(/support@feefo.com/i)).toBeInTheDocument();
  expect(getByText(/020 3362 4208/i)).toBeInTheDocument();
});
