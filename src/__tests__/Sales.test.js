import React from 'react';
import { render } from '@testing-library/react';
import Sales from '../components/Sales';

test('renders Sales component with correct data', () => {
  const { getByText } = render(
    <Sales 
      uploads={0} 
      linesAdded={0} 
      uploadSuccess={0} 
      linesSaved={0} 
    />
  );

  expect(getByText(/Sales/i)).toBeInTheDocument();
  expect(getByText(/You had 0 uploads and 0 lines added/i)).toBeInTheDocument();
  expect(getByText(/UPLOAD SUCCESS/i)).toBeInTheDocument();
  expect(getByText(/LINES SAVED/i)).toBeInTheDocument();
});
