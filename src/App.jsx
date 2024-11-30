import React from 'react';
import Header from './components/Header/Header';
import TrackingForm from './components/TrackingForm/TrackingForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <TrackingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;