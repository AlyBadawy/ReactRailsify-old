import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../App/App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders the document with correct paragraph', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const paragraph = screen.getByText(/This is the home page!/i);
    expect(paragraph).toBeInTheDocument();
  });
});
