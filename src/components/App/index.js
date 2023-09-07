import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={
          <Main />
        } />
      </Routes>
      <Footer />
    </div>
  );
}
