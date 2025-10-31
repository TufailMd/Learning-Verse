import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-10 bg-gray-50 text-center bg-gradient-to-br from-background via-background to-muted">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

export default App;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\App.jsx