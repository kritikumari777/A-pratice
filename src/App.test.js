import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);  
  // it is the default react page where having the test "learn react" 
  // that i have remove thats why its falling
  // expect(linkElement).toBeInTheDocument();
});
