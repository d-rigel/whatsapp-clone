import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//Tech for the build
//React
//Firebase FireStore Realtime db
//Material UI
//React Router
//React context API
//^^^REDUX
//Google Authentication
//Deploy using firebase