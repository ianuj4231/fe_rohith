import React, { useState } from 'react';
import Header from './components/Header';
import Comp1 from './components/Comp1';
import Footer from './components/Footer';
import Comp2 from './components/Comp2';

function App() {
  const [count, setCount] = useState(0);

  return (
<div className="main-container">
<Header />
<div className="h-56 grid grid-cols-11 gap-4 content-evenly">
  <a href="#PlugAndPlay" className="text-black hover:text-gray-600">Plug & Play</a>
  <a href="#CeilingLights" className="text-black hover:text-gray-600">Ceiling Lights</a>
  <a href="#Chandeliers" className="text-black hover:text-gray-600">Chandeliers</a>
  <a href="#WallLights" className="text-black hover:text-gray-600">Wall Lights</a>
  <a href="#Outdoor" className="text-black hover:text-gray-600">Outdoor</a>
  <a href="#CeilingFans" className="text-black hover:text-gray-600">Ceiling Fans</a>
  <a href="#ShopByRoom" className="text-black hover:text-gray-600">Shop by Room</a>
  <a href="#New" className="text-black hover:text-gray-600">New</a>
  <a href="#Learn" className="text-black hover:text-gray-600">Learn</a>
  <a href="#Sale" className="text-black hover:text-gray-600">Sale</a>
</div>
      
      <div className="centered-box">
      <main className="container mx-auto flex justify-center items-center flex-grow py-5">
        <Comp1 />
      </main>
      </div>

      <>
      <Comp2 />  
      
      </>

      <>
      <Footer />
      </>

    </div>
  );
}

export default App;