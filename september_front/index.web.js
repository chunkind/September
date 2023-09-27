import React from 'react';
import App from './App.web';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); 
// const root = createRoot(container!); //if you use TypeScript
root.render(<App tab="home"/>);