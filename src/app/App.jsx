import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SmoothScrollProvider from '../providers/SmoothScrollProvider';
import AppRouter from '../router/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <AppRouter />
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
