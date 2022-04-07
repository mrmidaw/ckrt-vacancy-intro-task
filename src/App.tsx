import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Explorer } from './pages/Explorer';

function App() {
  return (
    <div className="container mx-auto bg-gray-400 h-screen">
      <div className='grid-rows-2' >
        <div className='mb-4'>
          <Header />
        </div>
        <div className=''>
          <Explorer />
        </div>
      </div>
    </div>
  );
}

export default App;