import React from 'react';
import { render } from '@testing-library/react';
import AccountOverview from '../components/AccountOverview';

test('renders Account Overview component', () => {
  const { getByText } = render(
    <AccountOverview 
      uploads={0} 
      linesAdded={0} 
      uploadSuccess={0} 
      linesSaved={0} 
    />
  );
  
  expect(getByText(/Account Overview/i)).toBeInTheDocument();
});
